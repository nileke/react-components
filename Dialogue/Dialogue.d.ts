import * as React from "react";
import "./dialogue-style.scss";
interface DialogueProps {
    toggle: boolean;
    header?: string;
    desc?: string;
    primaryBtn?: string;
    secondaryBtn?: string;
    primaryAction?: () => void;
    secondaryAction?: () => void;
    className?: string;
}
interface DialogueState {
    open: boolean;
    close: boolean;
}
export declare class Dialogue extends React.Component<DialogueProps, DialogueState> {
    constructor(props: DialogueProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: DialogueProps): void;
    render(): JSX.Element;
}
export {};
