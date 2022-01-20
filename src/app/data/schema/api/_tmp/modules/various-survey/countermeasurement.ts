export interface CountermeasurementSchema {

    isDelete: boolean;
    isEdit: boolean;
    reqIvgKey: string;
    ivgCmNo: string;
    dispNo: string;
    status: string;
    cmDetal: string;
    cmEsdDate: string;
    cmDate: string;
    cmLotNo: string;
    sckShipDate: string;
    reName: string;
    reDate: string;
}

export interface isDeleteMeasureRecord {
    isDelete: boolean;
}

export interface isUpdateMeasureRecord {
    isUpdate: boolean;
}

export interface VariousSurveyCountermeasures {
    ivgCmNo: boolean
    dispNo: number;
    cmStatus: Status;
    cmDisclosure: Disclosure;
    cmRollout: Rollout;
}

export interface VariousSurveyCountermeasuresEdit extends VariousSurveyCountermeasures, isDeleteMeasureRecord {
    cmStatus: StatusEdit;
    cmDisclosure: DisclosureEdit;
    cmRollout: RolloutEdit;
}


interface CountermeasureCommon {
    content: string;
    cmEsdDate: string;
    cmDate: string;
    cmLotNo: string;
    sckShipDate: string;
    reName: string;
    reDate: string;
}

interface Status extends CountermeasureCommon {
    status: string;
}

interface Disclosure extends CountermeasureCommon {
    disclose: boolean;
}

interface Rollout extends CountermeasureCommon {
    rollOut: boolean;
}

interface StatusEdit extends Status, isUpdateMeasureRecord {}
interface DisclosureEdit extends Disclosure, isUpdateMeasureRecord {}
interface RolloutEdit extends Rollout, isUpdateMeasureRecord {}