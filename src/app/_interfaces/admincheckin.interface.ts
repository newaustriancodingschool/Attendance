export interface AdminCheckin {
    id?: number;
    checkedIn: boolean;
    duration: string;
    name?: string;
    auto?: boolean;
    time: string;
    _links: Array<any>;
}
