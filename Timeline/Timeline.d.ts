import * as React from "react";
import "./timeline-style.scss";
export interface TimelineListItem {
    title: string;
    time: string;
    desc?: string;
}
interface TimelineProps {
    list: Array<TimelineListItem>;
    direction?: string;
    onClick?: (index: number) => void;
    className?: string;
}
export declare const Timeline: React.FunctionComponent<TimelineProps>;
export {};
