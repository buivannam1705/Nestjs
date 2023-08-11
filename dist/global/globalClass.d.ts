export declare class ReponseData<D> {
    data: D | D[];
    statusCode: number;
    message: string;
    constructor(data: D | D[], statusCode: number, message: string);
}
