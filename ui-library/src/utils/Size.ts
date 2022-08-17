import { ESize } from '../ESize';

export const chooseSize = (size: string, rootClasses: string[]) => {
  if (size === ESize.SMALL) {
    rootClasses.push('small-root')
  }
  else if (size === ESize.MEDIUM) {
    rootClasses.push('medium-root')
  }
  else {
    rootClasses.push('large-root')
  }
}
