import * as React from "react";
import "./video-style.scss";
export interface VideoProps {
    src: string;
    width: string;
    height: string;
    name: string;
    sourceType: string;
    className?: string;
    autoplay?: boolean;
    loop?: boolean;
    showControls?: boolean;
    showInfo?: boolean;
    allowFullScreen?: boolean;
}
export declare const Video: React.StatelessComponent<VideoProps>;
