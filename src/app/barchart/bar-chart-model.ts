export class BarChartModel {

    public jugador!: string;
    public goles!: number;
    public golestemporada!: number;

    constructor(init?: Partial<BarChartModel>) {
        Object.assign(this, init);
    }

}
