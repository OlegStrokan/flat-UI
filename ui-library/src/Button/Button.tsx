import React from 'react';
import {ETheme} from "../ETheme";
import styles from './Button.css'
import {ESize} from "../ESize";

interface IButton {
    theme: ETheme,
    size: ESize,
    children: React.ReactNode;
}


export const Button: React.FC<IButton> = ({children, theme, size, ...props}) => {
    return (
        <button {...props} className={
            `${theme === ETheme.WHITE ? styles.whiteRoot : styles.whiteRoot} 
            ${size === ESize.SMALL && styles.smallRoot}
            ${size === ESize.MEDIUM && styles.mediumRoot}
            ${size === ESize.LARGE && styles.largeRoot}
            `}>
            {children}
        </button>
    );
};
