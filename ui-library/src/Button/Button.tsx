import React from 'react';
import {ETheme} from "../ETheme";

interface IButton {
    theme: ETheme,
    children: React.ReactNode;
}


export const Button: React.FC<IButton> = ({children, theme, ...props}) => {
    return (
        <button {...props}>
            {children}
        </button>
    );
};
