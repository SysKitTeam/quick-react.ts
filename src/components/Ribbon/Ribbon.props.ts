import * as React from 'react';
import { IContextualMenuItem } from '../ContextualMenu/ContextualMenu.Props';


export interface IRibbonProps extends React.HTMLProps<HTMLDivElement> {
  isSearchBoxVisible?: boolean;
  searchPlaceholderText?: string;
  items: IContextualMenuItem[];
  overflowItems?: IContextualMenuItem[];
  farItems?: IContextualMenuItem[];
  className?: string;
}
