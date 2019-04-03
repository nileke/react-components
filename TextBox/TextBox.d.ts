import * as React from "react";
import "./text-box-style.scss";
export interface TextBoxProps {
    value: string | number;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    type?: string;
    label?: string;
    error?: string;
    placeHolder?: string;
    className?: string;
    focus?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    max?: number;
    autoComplete?: boolean;
    reference?: React.RefObject<HTMLInputElement>;
}
export declare const TextBox: React.FunctionComponent<TextBoxProps>;
