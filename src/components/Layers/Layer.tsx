import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';
import { ILayerProps } from './Layer.Props';
import { LayerHost } from './LayerHost';
import { ProjectedLayer } from './ProjectedLayer';
import { getId } from '../../utilities/getId';
import { Fabric } from './Fabric';
import { setVirtualParent } from '../../utilities/virtualParent';
import { getDocument } from '../../utilities/getDocument';
import './Layer.scss';
import { CommonComponent } from '../Common';

let _layersByHostId: { [hostId: string]: Layer[] } = {};

export class Layer extends CommonComponent<ILayerProps, {}> {

  public static defaultProps = {
    onLayerDidMount: () => undefined,
    onLayerWillUnmount: () => undefined
  };

  private _rootElement: HTMLElement;
  private _host: Node;
  private _layerElement: HTMLElement;
  private _hasMounted: boolean;
  /**
   * Used for notifying applicable Layers that a host is available/unavailable and to re-evaluate Layers that
   * care about the specific host.
   */
  public static notifyHostChanged(id: string) {
    if (_layersByHostId[id]) {
      _layersByHostId[id].forEach(layer => layer.forceUpdate());
    }
  }

  constructor(props: ILayerProps) {
    super(props, {
      // Make sure to deprecate old properties.
      'onLayerMounted': 'onLayerDidMount'
    });

    if (this.props.hostId) {
      if (!_layersByHostId[this.props.hostId]) {
        _layersByHostId[this.props.hostId] = [];
      }

      _layersByHostId[this.props.hostId].push(this);
    }
  }

  public componentDidMount() {
    this.componentDidUpdate();
  }

  public componentWillUnmount() {
    this._removeLayerElement();

    if (this.props.hostId) {
      _layersByHostId[this.props.hostId] = _layersByHostId[this.props.hostId].filter(layer => layer !== this);
      if (!_layersByHostId[this.props.hostId].length) {
        delete _layersByHostId[this.props.hostId];
      }
    }
  }

  public componentDidUpdate() {
    let host = this._getHost();

    if (host !== this._host) {
      this._removeLayerElement();
    }

    if (host) {
      this._host = host;

      if (!this._layerElement) {
        let doc = getDocument(this._rootElement);

        this._layerElement = doc.createElement('div');
        this._layerElement.className = 'ms-Layer';

        host.appendChild(this._layerElement);
        setVirtualParent(this._layerElement, this._rootElement);
      }

      // Using this 'unstable' method allows us to retain the React context across the layer projection.
      ReactDOM.unstable_renderSubtreeIntoContainer(
        this,
        <Fabric className="ms-Layer-content">
          {this.props.children}
        </Fabric>,
        this._layerElement,
        () => {
          if (!this._hasMounted) {
            this._hasMounted = true;
         
            this.props.onLayerDidMount();
          }
        });
    }
  }

  public render() {
    return (
      <span
        className="ms-Layer"
        ref={this._resolveRef('_rootElement')}
      />
    );
  }

  private _removeLayerElement() {
    if (this._layerElement) {
      this.props.onLayerWillUnmount();

      ReactDOM.unmountComponentAtNode(this._layerElement);
      this._layerElement.remove();
      this._layerElement = undefined;
      this._hasMounted = false;
    }
  }

  private _getHost(): Node {
    let { hostId } = this.props;
    let doc = getDocument(this._rootElement);

    if (hostId) {
      return doc.getElementById(hostId);
    } else {
      return doc.body;
    }
  }
}
