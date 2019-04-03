import * as React from "react";
import "./text-label-style.scss";
export interface TextLabelProps {
    value: string | number;
    name?: string;
    label?: string;
    className?: string;
}
export declare const TextLabel: React.FunctionComponent<TextLabelProps>;
