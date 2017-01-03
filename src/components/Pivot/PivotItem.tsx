import * as React from 'react';
import { IPivotItemProps } from './PivotItem.Props';

export default class PivotItem extends React.Component<IPivotItemProps, any> {

  public render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
