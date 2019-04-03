import * as React from "react";
import "./radio-button-style.scss";
export interface RadioButtonProps {
    onChange: (value: any) => void;
    value: any;
    radioValue: any;
    group: string;
    name?: string;
    description?: string;
    className?: string;
    label?: string;
    error?: string;
    inline?: boolean;
    disabled?: boolean;
    reference?: React.RefObject<any>;
}
export declare const RadioButton: React.FunctionComponent<RadioButtonProps>;
