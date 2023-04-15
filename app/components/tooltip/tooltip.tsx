import { PropsWithChildren } from "react";

export type TooltipProps = {
    title: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
};
export default function Tooltip(props: PropsWithChildren<TooltipProps>) {
    return <div className="inline-block">
        {props.children}
        <span className="tooltip-text">{props.title}</span>
    </div>
}