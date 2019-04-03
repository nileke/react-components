import * as React from "react";
import "./step-tracker-style.scss";
export interface StepTrackerProps {
    step: number;
    list: Array<string>;
    onClick?: (index: number) => void;
    className?: string;
    labelPosition?: string;
    useNumbers?: boolean;
    orientation?: string;
}
export declare const StepTracker: React.FunctionComponent<StepTrackerProps>;
