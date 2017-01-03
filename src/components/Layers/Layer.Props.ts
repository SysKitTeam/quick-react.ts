import * as React from 'react';

export interface ILayerProps extends React.HTMLProps<HTMLDivElement> {
  onLayerMounted?: () => void;
}
