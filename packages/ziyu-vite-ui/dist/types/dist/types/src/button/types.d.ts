export declare type ButtonColor = 'black' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';
export declare type ZiYuUiSize = 'small' | 'mini' | 'base';
export interface BtnProps {
    color?: ButtonColor;
    plain?: boolean;
    icon?: string;
    rounded?: boolean;
    size?: ZiYuUiSize;
}
