import * as React from "react";
import "./chart-style.scss";
import "chartjs-plugin-annotation";
export interface ChartProps {
    chartType: string;
    data: any;
    options?: any;
    className?: string;
    onClick?: (event: any) => void;
}
export declare const Chart: React.FunctionComponent<ChartProps>;
