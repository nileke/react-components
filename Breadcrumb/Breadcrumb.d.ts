import * as React from "react";
import "./breadcrumb-style.scss";
interface BreadcrumbProps {
    list: Array<string>;
    onClick?: (i: number) => void;
    className?: string;
}
export declare const Breadcrumb: React.StatelessComponent<BreadcrumbProps>;
export {};
