<template>
    <div :class="classes">
        <div class="kl-form-item__label" :style="labelStyle">
            <label for="" v-if="label || $slots.label">
                <slot name="label">{{ label }}</slot>
            </label>
        </div>
        <div class="kl-form-item-control-wrapper">
            <div class="kl-form-item-control">
                <slot></slot>
                <span class="kl-form-item__desc" v-if="describe || $slots.describe">
                    <slot name="describe">{{ describe }}</slot>
                </span>
                <!-- <transition name="kl-zoom-in-top"> -->
                    <div class="kl-form-item__tip" v-if="validateState === stateTypes.ERROR && showMessage && form.showMessage">{{ validateMessage }}</div>
                <!-- </transition> -->
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
                return undefined;
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
            labelLineHeight: String,
            colon: {
                type: Boolean,
                default: true
            },
            required: {
                type: Boolean,
                default: undefined
            },
            showMessage: {
                type: Boolean,
                default: true
            },
            describe: String,
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
            labelStyle() {
                let styleObj = {};
                if (this.form.layout === 'vertical') {
                    return styleObj;
                }
                let labelWidth = this.labelWidth || this.form.labelWidth;
                let labelLineHeight = this.labelLineHeight || this.form.labelLineHeight;
                if (labelWidth) {
                    styleObj.width = labelWidth;
                }
                if (labelLineHeight) {
                    styleObj['line-height'] = labelLineHeight;
                }
                return styleObj;
            },
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

                return this.getProp(data, path).v;
            },
            isRequired() {
                let rules = this.getRules();
                let isRequired = false;
                if (rules && rules.length) {
                    for (const rule of rules) {
                        if (rule.required) {
                            isRequired = true;
                            break;
                        }
                    }
                }
                return isRequired;
            },
            classes() {
                return [
                    'kl-form-item',
                    {
                        'kl-form-item--error': this.validateState === this.stateTypes.ERROR && this.showMessage && this.form.showMessage,
                        'kl-form-item--required': this.required || this.isRequired,
                        'kl-form-item--colon': this.colon && this.form.colon
                    }
                ];
            }
        },
        methods: {
            getRules() {
                let formRules = this.form.rules;
                const ownRules = this.rules;
                let requiredRule = this.required !== undefined ? { required: !!this.required } : [];
                let prop = getPropByPath(formRules, this.prop);
                formRules = formRules ? ((prop && prop.v) || []) : [];
                return [].concat(ownRules || formRules || []).concat(requiredRule);
            },
            getFilteredRule(trigger) {
                const rules = this.getRules();
                return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1);
            },
            getProp(obj, path) {
                const prop = getPropByPath(obj, path);
                if(!prop) {
                    throw new Error('[nek-vue warning]: please transfer a valid prop path to form item!');
                }
                return prop;
            },
            validate(trigger) {
                return new Promise((resolve) => {
                    const rules = this.getFilteredRule(trigger);
                    if (!rules || !rules.length && this.required === undefined) {
                        resolve();
                        return true;
                    }
                    this.validateState = this.stateTypes.VALIDATING;

                    let descriptor = {};
                    descriptor[this.prop] = rules;
                    const validator = new schema(descriptor);

                    let data = {};
                    data[this.prop] = this.fieldValue;

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
                let prop = this.getProp(data, path);

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
                this.dispatch('kl-form', 'form-item-add', this);

                Object.defineProperty(this, 'initialValue', {
                    value: this.fieldValue
                });

                let rules = this.getRules();

                if ((rules && rules.length) || this.required !== undefined) {
                    this.$on('form-blur', this.onFieldBlur);

                    this.$on('form-change', this.onFieldChange);
                }
            }
        },
        beforeDestroy() {
            this.dispatch('kl-form', 'form-item-remove', this);
        }
    };
</script>
