import * as React from 'react';
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
export declare class ProjectedLayer extends React.Component<IProjectedLayerProps, IProjectedLayerState> {
    private _rootElement;
    private _remoteProps;
    private _resolves;
    constructor(props?: IProjectedLayerProps);
    shouldComponentUpdate(): boolean;
    componentDidMount(): void;
    render(): JSX.Element;
    protected resolveRef(refName: string): (ref: any) => any;
    getId(): string;
    projectProps(remoteProps: any): void;
}
