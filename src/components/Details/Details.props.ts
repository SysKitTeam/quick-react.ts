export interface IDetailsProps {
    serverType: string;
    serverIcon: string;
    serverRoles: IServerRole[];
}

export interface IServerRole {
    roleName: string;
    icon: string;
}