import * as React from "react";
import "./notification-style.scss";
/** An action button in the notification */
export interface NotificationAction {
    /** The label of the button */
    text: string;
    /** The action callback to be triggered when the button is clicked */
    action: () => void;
}
export interface NotificationProps {
    /** Notification toggler. `Compulsory` */
    toggle: boolean;
    /**
     * The style of the notification.
     *
     * Supported styles: `slide-in`, `bar`
     * @default `slide-in`
     */
    style?: string;
    /**
     * The position of the notification.
     *
     * Supported styles:
     * - With `slide-in` style: `bottom-left`, `bottom-right`, `top-left`, `top-right`
     * - With `bar` style: `top`, `bottom`
     * @default
     * - `bottom-left` for `slide-in` style
     * - `top` for `bar` style
     */
    position?: string;
    /** The title of the notification */
    title?: string;
    /** The message of the notification */
    message?: string;
    /**
     * Should the notification be dismissable with and `X` button
     * @default false
     */
    dismissable?: boolean;
    /**
     * The dismiss timeout in milliseconds
     * @default 5000ms
     */
    dismissTimeout?: number;
    /**
     * Action buttons to be displayed in the notification.
     * @note Maximum number of actions is `2`
     * @see `NotificationAction` Interface
     */
    actions?: Array<NotificationAction>;
    /**
     * Should the notification persist without a timer to dismiss it
     * @default false
     */
    persist?: boolean;
    /**
     * The theme of the notification.
     *
     * Supported themes: `purple`, `primary`, `danger`, `success`, `warning`, `inverted`
     * @default `purple`
     */
    theme?: string;
    /** Callback to be triggered when the notification is clicked. */
    onClick?: () => void;
    /** Callback to be triggered when the notification is dismissed. `Compulsory` */
    onDismiss: () => void;
    /** HTML/React elements to be rendered inside the notification */
    children?: React.ReactNode;
    /** Custom class name */
    className?: string;
}
export declare class Notification extends React.Component<NotificationProps> {
    timerRef: number;
    private defaultTimeout;
    constructor(props: NotificationProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: NotificationProps): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
    /** Dismiss the notification */
    private dismiss;
    /** Start the timer to dismiss the notification */
    private startTimer;
    /** Clear the timer that dismisses the notification */
    private clearTimer;
    /**
     * Get the style class based on the theme passed through the props
     * @param {string} style The style passed through the props
     * @returns {string} The style class
     */
    private getStyleClass;
    /**
     * Get the theme class based on the theme passed though the props
     * @param {string} theme The theme passed through the props
     * @returns {string} The theme class
     */
    private getThemeClass;
    /**
     * Get the position class based on the position and style passed through the props
     * @param {string} position The position passed through the props
     * @param {string} style The style passed through the props
     * @returns {string} The position class
     */
    private getPositionClass;
}
