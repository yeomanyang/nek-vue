<template>
    <div :class="classes">
        <div class="kl-form-item-label">
            <label for="" v-if="label || $slots.label">
                <slot name="label">{{ label }}</slot>
            </label>
        </div>
        <div class="kl-form-item-control-wrapper">
            <div class="kl-form-item-control">
                <slot></slot>
                <transition name="fade">
                    <div class="kl-form-item__error" v-if="validateState === stateTypes.ERROR && showMessage && form.showMessage">{{ validateMessage }}</div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import schema from 'async-validator';
    import emitter from '@/mixins/emitter';
    import * as stateTypes from './validate-state';

    function getPropByPath(obj, path) {
        let tempObj = obj;
        path = path.replace(/\[(\w+)\]/g, '.$1');
        path = path.replace(/^\./, '');

        let keyArr = path.split('.');
        let i = 0;

        for (let len = keyArr.length; i < len - 1; ++i) {
            let key = keyArr[i];
            if (key in tempObj) {
                tempObj = tempObj[key];
            } else {
                return null;
                // throw new Error('[nek-vue warning]: please transfer a valid prop path to form item!');
            }
        }
        return {
            o: tempObj,
            k: keyArr[i],
            v: tempObj[keyArr[i]]
        };
    }

    export default {
        name: 'kl-form-item',

        mixins: [emitter],

        props: {
            prop: String,
            label: String,
            labelWidth: String,
            required: {
                type: Boolean,
                default: false
            },
            showMessage: {
                type: Boolean,
                default: true
            },
            descTemplate: String,
            textAlign: {
                type: String,
                default: 'right'
            }
        },
        data() {
            return {
                stateTypes,
                validateState: '',
                validateMessage: ''
            };
        },
        methods: {
        },
        computed: {
            form() {
                let parent = this.$parent;
                while (parent.$options.name !== 'kl-form') {
                    parent = parent.$parent;
                }
                return parent;
            },
            fieldValue() {
                const data = this.form.data;
                if (!data || !this.prop) {
                    return;
                }

                let path = this.prop;

                return getPropByPath(data, path).v;
            },
            isRequired() {
                let rules = this.getRules();
                let isRequired = false;

                if (rules && rules.length) {
                    for (const rule of rules) {
                        if (rule.required) {
                            isRequired = true;
                            return;
                        }
                    }
                }

                return isRequired;
            },
            classes() {
                return [
                    'kl-form-item',
                    {
                        'kl-form-item-required': this.required || this.isRequired
                    }
                ];
            }
        },
        methods: {
            // 优先使用自己的校验规则，然后匹配父组件的校验规则
            getRules() {
                let formRules = this.form.rules;
                const ownRules = this.rules;
                formRules = formRules ? (getPropByPath(formRules, this.prop).v || []) : [];
                return [].concat(ownRules || formRules || []);
            },
            // 过滤非当前trigger的校验
            getFilteredRule(trigger) {
                const rules = this.getRules();
                return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1);
            },
            validate(trigger) {
                return new Promise((resolve) => {
                    const rules = this.getFilteredRule(trigger);
                    if (!rules || !rules.length) {
                        resolve();
                        return true;
                    }
                    this.validateState = this.stateTypes.VALIDATING;

                    // 初始化表单验证器
                    let descriptor = {};
                    descriptor[this.prop] = rules;
                    const validator = new schema(descriptor);

                    // 表单的值
                    let data = {};
                    data[this.prop] = this.fieldValue;

                    // 表单校验
                    validator.validate(data, { firstFields: true }, (errors) => {
                        this.validateState = !errors ? this.stateTypes.SUCCESS : this.stateTypes.ERROR;
                        this.validateMessage = errors ? errors[0].message : '';

                        resolve(this.validateMessage);
                    });
                });
            },
            resetField() {
                this.validateState = '';
                this.validateMessage = '';

                let data = this.form.data;
                let value = this.fieldValue;
                let path = this.prop;
                let prop = getPropByPath(data, path);

                prop.o[prop.k] = Array.isArray(value) ? [].concat(this.initialValue) : this.initialValue;
            },
            onFieldBlur() {
                this.validate('blur');
            },
            onFieldChange() {
                this.validate('change');
            }
        },
        mounted() {
            if (this.prop) {
                // push到父组件中
                this.dispatch('kl-form', 'form-item-add', this);

                // 记录初始值，在reset的时候使用
                Object.defineProperty(this, 'initialValue', {
                    value: this.fieldValue
                });

                // 获取校验规则
                let rules = this.getRules();

                // 判断是否设置了必填
                if (rules && rules.length) {
                    // 失焦的时候触发的事件
                    this.$on('form-blur', this.onFieldBlur);

                    // 改变的时候触发的事件
                    this.$on('form-change', this.onFieldChange);
                }
            }
        },
        beforeDestroy() {
            this.dispatch('kl-form', 'form-item-remove', this);
        }
    };
</script>
