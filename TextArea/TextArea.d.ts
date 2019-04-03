import * as React from "react";
import "./text-area-style.scss";
export interface TextAreaProps {
    value: string;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    onKeyUp?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    onKeyPress?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    label?: string;
    error?: string;
    placeHolder?: string;
    className?: string;
    focus?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    cols?: number;
    rows?: number;
    resizable?: boolean;
    max?: number;
    reference?: React.RefObject<HTMLTextAreaElement>;
}
export declare const TextArea: React.FunctionComponent<TextAreaProps>;
