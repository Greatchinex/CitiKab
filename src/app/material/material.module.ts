import { NgModule } from '@angular/core';
import { MatGridListModule, MatCardModule, MatFormFieldModule, MatInputModule, MatDividerModule, MatRadioModule  } from '@angular/material'

const MaterialComponents = [
  MatGridListModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatRadioModule 
]


@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
