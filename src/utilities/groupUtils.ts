import { GroupTypeEnum } from '../models';

export function getIconNameFromType(icons: { iconType: GroupTypeEnum, iconName: string }[], type: GroupTypeEnum): any {
    if (!icons) {
        return '';
    }
    
    let pair = icons.filter(x => x.iconType === type);
    if (pair && pair.length > 0) {
        return pair[0];
    }

    return '';
}
