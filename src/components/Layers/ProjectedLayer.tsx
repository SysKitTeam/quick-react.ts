import * as React from 'react';
import { setVirtualParent } from '../../utilities/virtualParent';
import { divAttributes, getNativeAttributes } from '../../utilities/attributes';
import * as classNames from 'classnames';
import { ILayerProps } from './Layer.Props';
import './Layer.scss';

export interface IProjectedLayerProps extends React.Props<ProjectedLayer> {
  layerId: string;

  parentElement: HTMLElement;

  defaultRemoteProps: ILayerProps;
}

export interface IProjectedLayerState {
  isMounted: boolean;
}

export class ProjectedLayer extends React.Component<IProjectedLayerProps, IProjectedLayerState> {
  private _rootElement: HTMLElement;
  private _remoteProps: ILayerProps;
  private _resolves: { [name: string]: (ref: any) => any };

  constructor(props?: IProjectedLayerProps) {
    super(props);

    this.state = {
      isMounted: false
    };

    this._remoteProps = props.defaultRemoteProps;
  }

  public shouldComponentUpdate() {
    return !this.state.isMounted;
  }

  public componentDidMount() {
    setVirtualParent(this._rootElement, this.props.parentElement);
    this.setState({ isMounted: true });
  }

  public render() {
    let remoteProps = getNativeAttributes<React.HTMLProps<HTMLDivElement>>(this._remoteProps, divAttributes);

    if (!this.state.isMounted) {
      delete remoteProps.children;
    }

    return (
      <div
        { ...remoteProps }
        className={classNames('projected-layer', remoteProps.className)}
        ref={this.resolveRef('_rootElement')}
      />
    );
  }

  protected resolveRef(refName: string) {
    if (!this._resolves) {
      this._resolves = {};
    }
    if (!this._resolves[refName]) {
      this._resolves[refName] = (ref) => this[refName] = ref;
    }
    return this._resolves[refName];
  }

  public getId() {
    return this.props.layerId;
  }

  public projectProps(remoteProps: any) {
    this._remoteProps = remoteProps;
    this.forceUpdate();
  }
}
