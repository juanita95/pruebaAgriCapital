import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { AdjuntarArchivoComponent } from './components/adjuntar-archivo/adjuntar-archivo.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [ AdjuntarArchivoComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    CoreModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [AdjuntarArchivoComponent],
  bootstrap: []

})
export class FeatureModule { }

