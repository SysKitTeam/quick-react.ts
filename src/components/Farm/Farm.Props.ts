import * as React from 'react';

export interface IFarmProps {
    name: string;
    id: any;
    className?: string;
    filter?: string;
    checkChildren?: (value : React.ReactChild, index, array ) => boolean;
}
