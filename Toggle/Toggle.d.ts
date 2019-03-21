import * as React from "react";
import "./toggle-style.scss";
export interface ToggleProps {
    name: string;
    label?: string;
    value: boolean;
    onChange: (event: any) => void;
    className?: string;
    reference?: React.RefObject<any>;
}
export declare const Toggle: React.StatelessComponent<ToggleProps>;
