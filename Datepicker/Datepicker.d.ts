import * as React from "react";
import "./date-picker-style.scss";
export interface DatepickerProps {
    value: Date;
    onChange: (event: any) => void;
    name: string;
    label?: string;
    error?: string;
    placeHolder?: string;
    className?: string;
    disabled?: boolean;
    minDate?: Date;
    maxDate?: Date;
    locale?: string;
}
export declare const Datepicker: React.StatelessComponent<DatepickerProps>;
