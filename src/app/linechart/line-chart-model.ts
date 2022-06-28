export class LineChartModel {

    public year!: number;
    public cordoba!: number;
    public buenosAires!: number;
    public santaFe!: number;

    constructor(init?: Partial<LineChartModel>) {
        Object.assign(this, init);
    }
}
