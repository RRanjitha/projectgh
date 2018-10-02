import { Moment } from 'moment';

export interface IMapZonalWithOh {
    id?: number;
    fromDate?: Moment;
    toDate?: Moment;
    description?: string;
    status?: number;
    zonalZoneName?: string;
    zonalId?: number;
    operationalHeadName?: string;
    operationalHeadId?: number;
}

export class MapZonalWithOh implements IMapZonalWithOh {
    constructor(
        public id?: number,
        public fromDate?: Moment,
        public toDate?: Moment,
        public description?: string,
        public status?: number,
        public zonalZoneName?: string,
        public zonalId?: number,
        public operationalHeadName?: string,
        public operationalHeadId?: number
    ) {}
}

export class MapZonalWithOhModel {
    id?: number;
    fromDate?: Moment;
    toDate?: Moment;
    description?: string;
    status?: number;
    zonalZoneName?: string;
    zonalId?: number;
    operationalHeadName?: string;
    operationalHeadId?: number;
}

export const STATUS_ACTIVE = 1;
export const STATUS_INACTIVE = 2;
