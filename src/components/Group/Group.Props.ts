import * as React from 'react';

export interface IGroupProps {
    name: string;
    id: any;
    className?: string;
    filter?: string;
    checkChildren?: (value : React.ReactChild, index, array ) => boolean;
    addFunc?: (farmId: any) => void;
    editFunc?: (farmId: any) => void;
    deleteFunc?: (farmId: any) => void;
}
