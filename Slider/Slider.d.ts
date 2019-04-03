import * as React from "react";
import "./slider-style.scss";
export interface RangeSliderLabel {
    position: number;
    text: string;
}
export interface SliderProps {
    value: number;
    name: string;
    label?: string;
    onChange: (event: any) => void;
    min?: number;
    max?: number;
    step?: number;
    className?: string;
    labels?: Array<RangeSliderLabel>;
    showTicks?: boolean;
    theme?: string;
    tooltipTheme?: string;
    alwaysShowTooltip?: boolean;
    alternative?: boolean;
    error?: string;
    reference?: React.RefObject<any>;
}
export declare const Slider: React.FunctionComponent<SliderProps>;
