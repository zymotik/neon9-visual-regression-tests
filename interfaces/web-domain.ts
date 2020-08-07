// based on Plesk API schema
export interface WebDomain {
    id: number;
    created: string;
    name: string;
    ascii_name: string;
    base_domain_id: number;
    guid: string;
    hosting_type: string;
    www_root: string;
}
