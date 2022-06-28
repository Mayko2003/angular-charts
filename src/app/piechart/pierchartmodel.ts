export class Pierchartmodel {

    public valor!: number;
    public categoria!: string;

    public constructor(init?: Partial<Pierchartmodel>) {
        Object.assign(this, init);
    }
}
