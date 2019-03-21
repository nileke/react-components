import * as React from "react";
import "./button-style.scss";
export interface ButtonProps {
    label: string;
    onClick: (event: any) => void;
    className?: string;
    disabled?: boolean;
    theme?: string;
    title?: string;
    icon?: any;
    iconPosition?: string;
}
export declare const Button: React.StatelessComponent<ButtonProps>;
