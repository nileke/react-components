import * as React from "react";
import "./tooltip-style.scss";
export interface TooltipMessageGroupItem {
    title?: string;
    message: string;
}
interface TooltipState {
    toggle: boolean;
}
export interface TooltipProps {
    title?: string;
    message?: string;
    messageGroup?: Array<TooltipMessageGroupItem>;
    position?: string;
    customSvg?: any;
    width?: number;
    theme?: string;
    className?: string;
    triggerOnHover?: boolean;
}
export declare class Tooltip extends React.Component<TooltipProps, TooltipState> {
    constructor(props: any);
    /**
     * Forces the tooltip to dismiss
     * @param {React.MouseEvent<HTMLDivElement>} e Mouse event
     */
    forceDismiss(e?: React.MouseEvent<HTMLDivElement>): void;
    /** Forces the tooltip to show */
    forceShow(): void;
    isPositioned(search: string): boolean;
    toggleTooltip(state?: boolean): void;
    render(): JSX.Element;
}
export {};
