import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableMatComponent } from './table-mat/table-mat.component';
import { MaterialModule } from 'src/app/material-module';

@NgModule({
  declarations: [TableMatComponent],
  imports: [CommonModule, MaterialModule],
})
export class ComponentsModule {}
