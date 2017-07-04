import { GridColumn } from '../../src/components/QuickGrid/QuickGrid.Props';

const RANDOM_WORDS = ['abstrusity', 'advertisable', 'bellwood', 'benzole', 'disputative', 'djilas', 'ebracteate', 'zonary'];
const RANDOM_Names = ['Ivan', 'Mario', 'Silvio', 'Hrvoje', 'Vinko', 'Marijana', 'Andrea'];
const RANDOM_Color = ['Black', 'Green', 'White', 'Blue', 'Orange', 'Red', 'Yellow', 'Gray'];
const RANDOM_Animal = ['Dog', 'Cat', 'Mouse'];
const RANDOM_City = ['Zagreb', 'Vienna', 'London', 'Amsterdam', 'Barcelona'];
const RANDOM_CarBrand = ['Audi', 'BMW', 'Mercedes', 'Opel', 'VW', 'Lada', 'Ford', 'Mazda'];

export interface GridData1 {
    Name: string;
    Color: string;
    Animal: string;
    City: string;
    CarBrand: string;
}

export const gridColumns1: Array<GridColumn> = [
    {
        valueMember: 'Name',
        headerText: 'Name',
        width: 100
    }, {
        valueMember: 'Color',
        headerText: 'Color',
        width: 100
    }, {
        valueMember: 'Animal',
        headerText: 'Animal - with very long header name',
        width: 100
    }, {
        valueMember: 'City',
        headerText: 'City to witch to travel',
        width: 100
    }, {
        valueMember: 'CarBrand',
        headerText: 'Car Brand',
        width: 100
    }
];

export function getGridData1(numberOfElements): Array<GridData1> {
    let data = [];
    for (let i = 0; i < numberOfElements; i++) {
        data.push(
            {
                Name: RANDOM_Names[Math.floor(Math.random() * RANDOM_Names.length)],
                Color: RANDOM_Color[Math.floor(Math.random() * RANDOM_Color.length)],
                Animal: RANDOM_Animal[Math.floor(Math.random() * RANDOM_Animal.length)],
                City: RANDOM_City[Math.floor(Math.random() * RANDOM_City.length)],
                CarBrand: RANDOM_CarBrand[Math.floor(Math.random() * RANDOM_CarBrand.length)]
            }
        );
    }
    return data;
}


export interface GridData2 {
    Name: string;
    Color: string;
}

export const gridColumns2: Array<GridColumn> = [
    {
        valueMember: 'RandomWords',
        headerText: 'Random Words',
        width: 100
    }, {
        valueMember: 'Color',
        headerText: 'Color',
        width: 100
    }
];

export function getGridData2(numberOfElements): Array<GridData2> {
    let data = [];
    for (let i = 0; i < numberOfElements; i++) {
        data.push(
            {
                RandomWords: RANDOM_WORDS[Math.floor(Math.random() * RANDOM_WORDS.length)],
                Color: RANDOM_Color[Math.floor(Math.random() * RANDOM_Color.length)]              
            }
        );
    }
    return data;
}
