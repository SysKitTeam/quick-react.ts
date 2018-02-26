import { IPrincipal, PrincipalType } from '../../src/components/PeoplePicker/Principal.Props';

export const peoplePickerData: IPrincipal[] = [
    { identifier: '1', displayName: 'FirstName1 LastName1 loooong loooong looooong', email: 'username1@domain1', displayIdentifier: 'domain1\\username', type: 1 },
    { identifier: '2', displayName: 'FirstName2 LastName2', email: 'username2@domain2', displayIdentifier: 'username2@domain2', type: 2 },
    { identifier: '3', displayName: 'FirstName3 LastName3', email: 'username3@domain3', type: 3 },
    { identifier: '4', displayName: 'FirstName4 LastName4', email: 'username4@domain4', type: 4 },
    { identifier: '5', displayName: 'FirstName5 LastName5', email: 'username5@domain5', type: 1 }
];
export function MapIcon(principal: IPrincipal): string {
    switch (principal.type) {
        case PrincipalType.user:
            return 'icon-user';
        case PrincipalType.securityGroup:
            return 'icon-group';
        case PrincipalType.sharePointGroup:
            return 'icon-group';
        case PrincipalType.activeDirectoryGroup:
            return 'icon-group';
        default:
            return undefined;
    }
}

export function MapIconClass(principal: IPrincipal) {
    switch (principal.type) {
        case PrincipalType.user:
            return 'principal-user-icon';
        case PrincipalType.securityGroup:
            return 'principal-security-group-icon';
        case PrincipalType.sharePointGroup:
            return 'principal-share-point-group-icon';
        case PrincipalType.activeDirectoryGroup:
            return 'principal-active-directory-group-icon';
        default:
            return undefined;
    }
}
