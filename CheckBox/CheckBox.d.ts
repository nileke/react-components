import * as React from "react";
import "./check-box-style.scss";
export interface CheckBoxProps {
    name: string;
    checked: boolean;
    onChange: (event: any) => void;
    className?: string;
    label?: string;
    topLabel?: string;
    disabled?: boolean;
    inline?: boolean;
    description?: string;
    error?: string;
    reference?: React.RefObject<any>;
}
export declare const CheckBox: React.FunctionComponent<CheckBoxProps>;
