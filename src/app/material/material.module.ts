import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

const MaterialComponents = [
  MatCheckboxModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})

export class MaterialModule { }
