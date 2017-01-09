import * as React from 'react';
import { IPopupProps } from './Popup.Props';
import { KeyCodes } from '../../utilities/KeyCodes';
import {EventGroup} from './EventGroup';
import {IDisposable} from './IDisposable';
import { getNativeAttributes, divAttributes } from '../../utilities/attributes';
import { doesElementContainFocus } from '../../utilities/focus';
import { getDocument } from '../../utilities/getDocument';
import { CommonComponent } from '../Common/Common';

export class Popup extends CommonComponent<IPopupProps, {}> {


  public static defaultProps: IPopupProps = {
    shouldRestoreFocus: true
  };

  public refs: {
    [key: string]: React.ReactInstance;
    root: HTMLElement;
  };

  private _originalFocusedElement: HTMLElement;
  private _containsFocus: boolean;
  
  public componentWillMount() {
    this._originalFocusedElement = getDocument().activeElement as HTMLElement;
  }

  public componentDidMount(): void {
    this._events.on(this.refs.root, 'keydown', this._onKeyDown);
    this._events.on(this.refs.root, 'focus', () => this._containsFocus = true, true);
    this._events.on(this.refs.root, 'blur', () => this._containsFocus = false, true);
    if (doesElementContainFocus(this.refs.root)) {
      this._containsFocus = true;
    }
  }

  public componentWillUnmount(): void {
    if (
      this.props.shouldRestoreFocus &&
      this._originalFocusedElement &&
      this._containsFocus &&
      this._originalFocusedElement as any !== window) {
      setTimeout(() => {
        if (this._originalFocusedElement) {
          this._originalFocusedElement.focus();
        }
      }, 0);
    }
  }

  public render() {
    let { role, className, ariaLabelledBy, ariaDescribedBy } = this.props;

    return (
      <div
        ref="root"
        { ...getNativeAttributes(this.props, divAttributes) }
        className={ className }
        role={ role }
        aria-labelledby={ ariaLabelledBy }
        aria-describedby={ ariaDescribedBy }>
        { this.props.children }
      </div>
    );
  }

  private _onKeyDown(ev: React.KeyboardEvent) {
    switch (ev.which) {
      case KeyCodes.escape:

        if (this.props.onDismiss) {
          this.props.onDismiss();

          ev.preventDefault();
          ev.stopPropagation();
        }

        break;
    }
  }
}
