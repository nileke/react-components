import * as React from "react";
import "./accordion-style.scss";
export interface AccordionText {
    title?: string;
    desc?: string;
}
export interface AccrodionListItem {
    category: string;
    text?: AccordionText | Array<AccordionText>;
}
interface AccordionProps {
    list: Array<AccrodionListItem>;
    className?: string;
}
interface AccordionState {
    active: number;
}
export declare class Accordion extends React.Component<AccordionProps, AccordionState> {
    constructor(props: AccordionProps);
    toggle(i: number): void;
    render(): JSX.Element;
}
export {};
