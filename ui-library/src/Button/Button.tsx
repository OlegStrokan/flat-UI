import React from 'react';
import { ETheme } from '../ETheme';
import './Button.css'
import { ESize } from '../ESize';
import { chooseTheme } from '../utils/Theme';
import { chooseSize } from '../utils/Size';

interface IButton {
  theme?: ETheme,
  size?: ESize,
  children: React.ReactNode;
}


export const Button: React.FC<IButton> = ({ children, theme = 'white', size = 'medium', ...props }) => {
  const rootClasses = ['root'];

  chooseTheme(theme, rootClasses)
  chooseSize(size, rootClasses)


  return (
    <button {...props} className={rootClasses.join(' ')}>
      {children}
    </button>
  );
};
