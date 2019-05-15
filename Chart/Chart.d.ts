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
export declare class Chart extends React.Component<ChartProps, any> {
    constructor(props: any);
    renderChart(type: string): JSX.Element;
    render(): JSX.Element;
}
