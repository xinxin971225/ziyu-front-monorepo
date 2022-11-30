import type { ButtonColor, ZiYuUiSize } from './types';
export interface Props {
    color?: ButtonColor;
    plain?: boolean;
    icon?: string;
    rounded?: boolean;
    size?: ZiYuUiSize;
}
declare const _sfc_main: import("vue").DefineComponent<{
    color: {
        type: null;
        required: false;
        default: string;
    };
    plain: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    rounded: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    size: {
        type: null;
        required: false;
        default: string;
    };
}, {
    props: any;
    computedClass: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: null;
        required: false;
        default: string;
    };
    plain: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    rounded: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    size: {
        type: null;
        required: false;
        default: string;
    };
}>>, {
    color: any;
    plain: boolean;
    icon: string;
    rounded: boolean;
    size: any;
}>;
export default _sfc_main;
