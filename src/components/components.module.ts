import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { DonaComponent } from './dona/dona.component';
import { IncrementComponent } from './increment/increment.component';

@NgModule({
  declarations: [IncrementComponent, DonaComponent],
  imports: [CommonModule, FormsModule, ChartsModule],
  exports: [IncrementComponent, DonaComponent],
})
export class ComponentsModule {}
