export interface Participant {
    id?: string;
    disabled?: boolean;
    name: string;
    email?: string;
    slackHandle?: string;
    uid: string;
    _links?: Array<any>;
}
