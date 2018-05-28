import * as React from 'react';
import './Dialog.scss';

export class DialogFooter extends React.Component<any, any> {
    state = {
        width: -1
    };

    private divRef = (ref: HTMLDivElement) => {
        this.setState({ width: ref.offsetWidth });
    }

    public render() {
        const maxWidth = this.state.width === -1 ? undefined : this.state.width;
        return (
            <div className="dialog-footer" ref={this.divRef} style={{ maxWidth }}>
                {this.props.children}
            </div>
        );
    }
}
