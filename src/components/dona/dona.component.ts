import { Component, Input, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent implements OnInit {
  @Input() title = '';
  @Input() labels: Label[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  @Input() public data: MultiDataSet = [[350, 450, 100]];
  public colors: Color[] = [
    { backgroundColor: ['#6857E6', '#009FEE', '#F02059'] },
  ];

  constructor() {}

  ngOnInit(): void {}
}
