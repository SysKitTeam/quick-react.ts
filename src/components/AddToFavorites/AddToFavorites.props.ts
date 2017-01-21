import * as React from 'react';
export interface AddToFavoritesProps extends React.HTMLProps <HTMLElement> {
  favorited: boolean;
  onClick ?: React.MouseEventHandler<HTMLElement>;
}
