import * as React from "react";
import "./loader-style.scss";
export interface LoaderProps {
    toggle: boolean;
    fullscreen?: boolean;
    className?: string;
}
export declare const Loader: React.StatelessComponent<LoaderProps>;
