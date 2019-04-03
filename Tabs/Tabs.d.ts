import * as React from "react";
import "./tabs-style.scss";
export interface TabsListItem {
    text: string;
    disabled?: boolean;
}
interface TabsProps {
    list: Array<TabsListItem>;
    activeTab: number;
    onClick?: (index: number) => any;
    className?: string;
}
export declare const Tabs: React.FunctionComponent<TabsProps>;
export {};
