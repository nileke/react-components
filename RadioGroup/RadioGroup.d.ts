import * as React from "react";
import "./radio-group-style.scss";
export interface RadioListModel {
    value: any;
    group: string;
    label: string;
    description?: string;
    disabled?: boolean;
}
export interface RadioGroupProps {
    list: Array<RadioListModel>;
    onChange: (value: any) => void;
    value: any;
    name?: string;
    className?: string;
    label?: string;
    error?: string;
    inline?: boolean;
    disableAll?: boolean;
}
export declare const RadioGroup: React.FunctionComponent<RadioGroupProps>;
