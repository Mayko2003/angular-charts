export class ColumnChartModel {
    public redsocial!: string;
    public usuarios!: number;
    public usuariosActivos!: number;

    constructor(init?: Partial<ColumnChartModel>) {
        Object.assign(this, init);
    }
}
