import * as _ from 'lodash';

export function toPrettyString(value: number, significantDecimalPlaces: number = 2) {
    if (!value) {
        return '0';
    }
    if (Math.abs(value) < 1) {        
        let fixedDigits = significantDecimalPlaces - 1 - Math.floor(Math.log(Math.abs(value)) / Math.log(10));
        fixedDigits = _.clamp(fixedDigits, 0, 20);
        let retVal = value.toFixed(fixedDigits);
        retVal = _.trimEnd(retVal, '0');
        if (retVal !== '0.' && retVal !== '-0.') {
            return retVal;
        } else {
            return '0';
        }
    } else {
        return (Math.round(value * Math.pow(10, significantDecimalPlaces)) / Math.pow(10, significantDecimalPlaces)).toString();
    }
}
