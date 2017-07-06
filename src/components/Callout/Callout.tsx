import * as React from 'react';
import { ICalloutProps } from './Callout.Props';
import { ICalloutState, CalloutContent } from './CalloutContent';
import { Layer } from '../Layers';

export class Callout extends React.Component<ICalloutProps, ICalloutState> {
  private _callout;
  setCalloutRef = (ref) => { this._callout = ref; };

  public UpdatePosition = () => {
    this._callout._updatePosition();
  }

  public render() {
    let content = (
      <CalloutContent
        ref={this.setCalloutRef}
        { ...this.props } />
    );
    return this.props.doNotLayer ? content : (
      <Layer className={this.props.layerClassName}>
        {content}
      </Layer>
    );
  }
}
