import * as React from "react";
import "./icon-style.scss";
export interface IconProps {
    src: any;
    className?: string;
    title?: string;
    size?: number;
    onClick?: (event: any) => void;
}
export declare const Icon: React.StatelessComponent<IconProps>;
