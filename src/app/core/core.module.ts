import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { UploadComponent } from './components/upload/upload.component';
import { DxFileUploaderModule } from 'devextreme-angular/ui/file-uploader';


@NgModule({
  declarations: [FooterComponent, HeaderComponent, UploadComponent],
  imports: [
    CommonModule,
    DxFileUploaderModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [HeaderComponent, FooterComponent, UploadComponent],
  entryComponents: [],
  bootstrap: []

})
export class CoreModule { }
