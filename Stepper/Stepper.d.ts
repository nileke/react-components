import * as React from "react";
import "./stepper-style.scss";
export interface StepperProps {
    value: number;
    onIncrease: (event: any) => void;
    onDecrease: (event: any) => void;
    min: number;
    max: number;
    name?: string;
    label?: string;
    className?: string;
    disabled?: boolean;
    error?: string;
    warning?: string;
    reference?: React.RefObject<any>;
}
export declare const Stepper: React.StatelessComponent<StepperProps>;
