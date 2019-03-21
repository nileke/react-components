import * as React from "react";
interface TimerProps {
    duration: number;
    callback?: () => void;
    className?: string;
}
interface TimerState {
    timer: string;
}
export declare class Timer extends React.Component<TimerProps, TimerState> {
    private innerInterval;
    constructor(props: TimerProps);
    startInterval(timeout: number): void;
    clearInterval(): void;
    convertMStoTime(value: number): string;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: TimerProps): void;
    render(): React.ReactNode;
}
export {};
