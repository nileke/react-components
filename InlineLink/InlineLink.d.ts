import * as React from "react";
import "./inline-link-style.scss";
interface InlineLinkProps {
    onClick?: () => void;
    className?: string;
    children?: any;
}
export declare const InlineLink: React.FunctionComponent<InlineLinkProps>;
export {};
