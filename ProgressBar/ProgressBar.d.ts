import * as React from "react";
import "./progress-bar-style.scss";
export interface ProgressBarProps {
    value: number;
    showProgress?: boolean;
    className?: string;
}
export declare const ProgressBar: React.StatelessComponent<ProgressBarProps>;
