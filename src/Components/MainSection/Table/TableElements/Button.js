import React from "react";
import { classNames } from "./Utils";

export function Button({ children, className, ...rest }) {
    return (
        <button
            type="button"
            aria-label="Table Action Button"
            className={classNames(
                "relative h-12 w-48 inline-flex items-center rounded-md border border-neutral-5 bg-white px-2 py-2 text-sm font-medium text-neutral-8 hover:bg-neutral-1",
                className
            )}
            {...rest}
        >
            {children}
        </button>
    );
}

export function PageButton({ children, className, ...rest }) {
    return (
        <button
            aria-label="Table action button"
            type="button"
            className={classNames(
                "relative h-10 w-11 m-4 justify-center inline-flex items-center rounded-md border border-neutral-5 bg-white px-2 py-2 text-sm font-medium text-neutral-8 hover:bg-neutral-1",
                className
            )}
            {...rest}
        >
            {children}
        </button>
    );
}
