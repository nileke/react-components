import * as React from "react";
import "./image-style.scss";
export interface ImageProps {
    src: string;
    width: string;
    height: string;
    onClick?: (event: any) => void;
    onLoad?: (event: any) => void;
    className?: string;
    useImgTag?: boolean;
}
export declare const Image: React.StatelessComponent<ImageProps>;
