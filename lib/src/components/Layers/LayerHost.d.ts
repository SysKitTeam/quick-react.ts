import * as React from 'react';
import { ProjectedLayer } from './ProjectedLayer';
import { ILayerProps } from './Layer.Props';
import { ILayerHostProps } from './LayerHost.Props';
export interface ILayer {
    id: string;
    parentElement: HTMLElement;
    props: ILayerProps;
    onMounted: (projectedLayer: ProjectedLayer) => void;
}
export declare class LayerHost extends React.Component<ILayerHostProps, {}> {
    static childContextTypes: {
        layerHost: React.Requireable<any>;
    };
    private _layers;
    private _layerRefs;
    static getDefault(layerElement: HTMLElement): LayerHost;
    constructor(props: ILayerHostProps);
    getChildContext(): {
        layerHost: LayerHost;
    };
    render(): JSX.Element;
    addLayer(id: string, parentElement: HTMLElement, props: ILayerProps, onMounted: (proxyLayer: ProjectedLayer) => void): void;
    removeLayer(id: string): void;
    private _resolveLayer(projectedLayer);
}
