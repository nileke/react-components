import * as React from "react";
interface RatingProps {
    initialValue?: any;
    onChange?: (value: number) => void;
    tooltipList?: Array<string>;
    iconHeight?: number;
    iconWidth?: number;
    useHollow?: boolean;
    colors?: Array<string>;
    readOnly?: boolean;
    className?: string;
}
export declare const Rating: React.FunctionComponent<RatingProps>;
export {};
