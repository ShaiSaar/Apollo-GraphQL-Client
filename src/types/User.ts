export enum WorkStatus {
    Working = 'Working',
    OnVacation = 'On Vacation',
    LunchTime = 'Lunch Time',
    BusinessTrip = 'Business Trip',
}

export interface User {
    _id: string;
    name: string;
    workStatus: WorkStatus | string;
    createdAt: string;
    img?: string;
}