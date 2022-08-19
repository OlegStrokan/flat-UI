import { ETheme } from '../enums/ETheme';

export const chooseTheme = (theme: string, rootClasses: string[]) => {
  if (theme === ETheme.WHITE) {
    rootClasses.push('white-root')
  } else {
    rootClasses.push('dark-root')
  }

}
