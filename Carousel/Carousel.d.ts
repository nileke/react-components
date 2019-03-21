import * as React from "react";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "./carousel-style.scss";
export interface CarouselItem {
    title?: string;
    desc?: string;
    image?: string;
}
interface CarouselProps {
    list: Array<CarouselItem>;
    height?: number;
    autoPlay?: boolean;
    autoPlaySpeed?: number;
    backgroundPlacement?: string;
    carouselChanged?: (index: number) => void;
    className?: string;
}
export declare const Carousel: React.StatelessComponent<CarouselProps>;
export {};
