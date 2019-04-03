import * as React from "react";
import "./dropdown-style.scss";
export interface DropDownItem {
    value: any;
    label: string;
}
export interface DropDownProps {
    selectedValue: DropDownItem;
    list: Array<DropDownItem>;
    onChange: (event: any) => void;
    name?: string;
    className?: string;
    label?: string;
    placeholder?: string;
    error?: string;
    native?: boolean;
    searchable?: boolean;
    multi?: boolean;
    clearable?: boolean;
    disabled?: boolean;
}
export declare const DropDown: React.FunctionComponent<DropDownProps>;
