import { PropType } from 'vue';
import type { ButtonColor } from './types';
export declare const props: {
    color: {
        type: PropType<ButtonColor>;
        default: string;
    };
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
};
declare const _default: import("vue").DefineComponent<{
    color: {
        type: PropType<ButtonColor>;
        default: string;
    };
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: PropType<ButtonColor>;
        default: string;
    };
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    color: ButtonColor;
    plain: boolean;
    icon: string;
}>;
export default _default;
