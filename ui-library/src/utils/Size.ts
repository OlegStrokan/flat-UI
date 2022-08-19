import { ESize } from '../enums/ESize';

export const chooseSize = (size: string, rootClasses: string[]) => {
  if (size === ESize.SMALL) {
    rootClasses.push('small-root')
  }
  else if (size === ESize.LARGE) {
    rootClasses.push('large-root')
  }
  else {
    return;
  }
}
