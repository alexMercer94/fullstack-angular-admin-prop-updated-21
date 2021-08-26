import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css'],
})
export class IncrementComponent implements OnInit {
  @Input() progress = 50;
  @Input() btnClass = 'btn btn-primary';

  @Output() outputValue: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  public get getPorcent(): string {
    return `${this.progress}%`;
  }

  public changeValue(value: number): void {
    if (this.progress >= 100 && value >= 0) {
      this.outputValue.emit(100);
      this.progress = 100;
      return;
    }

    if (this.progress <= 0 && value <= 0) {
      this.outputValue.emit(0);
      this.progress = 0;
      return;
    }

    this.progress = this.progress + value;
    this.outputValue.emit(this.progress);
  }

  public onChange(newValue: number): void {
    if (newValue >= 100) {
      newValue = 100;
    } else if (newValue <= 0) {
      newValue = 0;
    }

    this.outputValue.emit(newValue);
  }
}
