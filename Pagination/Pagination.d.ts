import * as React from "react";
import "./pagination-style.scss";
export interface PaginationProps {
    value: number;
    size: number;
    offset?: number;
    useTextNav?: boolean;
    useFirstAndLast?: boolean;
    nextText?: string;
    previousText?: string;
    firstText?: string;
    lastText?: string;
    className?: string;
    useDotNav?: boolean;
    onChange?: (value: number) => void;
}
export declare const Pagination: React.FunctionComponent<PaginationProps>;
