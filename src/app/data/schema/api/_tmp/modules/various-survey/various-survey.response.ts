import { CountermeasurementSchema } from "./countermeasurement";

export interface CountermeasurementListResponse {
    measures: CountermeasurementSchema[];
    reqIvgKey: string;
}