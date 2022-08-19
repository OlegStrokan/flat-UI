import React from 'react';
import {ETheme} from '../enums/ETheme';
import './Button.css'
import {ESize} from '../enums/ESize';
import {chooseTheme} from '../utils/Theme';
import {chooseSize} from '../utils/Size';

export interface IButton {
    theme?: ETheme,
    size?: ESize,
    children: React.ReactNode
    label?: string,
}


export const Button: React.FC<IButton> = ({
                                              children,
                                              label = 'submit',
                                              theme = 'dark',
                                              size = 'medium',
                                              ...props
                                          }) => {
    const rootClasses = ['root'];

    chooseTheme(theme, rootClasses)
    chooseSize(size, rootClasses)


    return (
        <button {...props} className={rootClasses.join(' ')}>
            {children}
            {label}
        </button>
    );
};
