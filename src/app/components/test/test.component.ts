import { Component, OnInit } from '@angular/core';
import { IgxItemLegendComponent, IgxPieChartComponent } from 'igniteui-angular-charts';
import { Model } from 'src/app/model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  ngOnInit(): void {
  }

  datos!:Array<Model>
  public constructor() {
    this.datos = new Array<Model>()
    this.datos.push(new Model(40, "Niños"))
    this.datos.push(new Model(30, "Adultos"))
    this.datos.push(new Model(30, "Jovenes"))
  }

  private legend!: IgxItemLegendComponent
  private chart!: IgxPieChartComponent
}
