import { Component, OnInit } from '@angular/core';
import { UploadedFile } from '../../models/uploaded-file';

@Component({
  selector: 'app-adjuntar-archivo',
  templateUrl: './adjuntar-archivo.component.html',
  styleUrls: ['./adjuntar-archivo.component.scss']
})
export class AdjuntarArchivoComponent {

  fileSelect:UploadedFile;
  canShowAlert: boolean = false;
  isButtonDisabled: boolean = true;

  /*Se asignan los valores enviados desde el componente hijo a fileSelect y se valida que
    no este vacio, sea null, undefined para poder activar el botón */
  saveFile(file: UploadedFile): void{
    if(!file){
      return;
    }
    this.fileSelect = file;
    this.isButtonDisabled = false;
  }

  /* se muestra la alerta por unos segundos */
  showAlert(): void{
    const TIME_TO_SHOW= 3000;
    const TIME_TO_HIDE= 7000;
    setTimeout(() => {
      this.canShowAlert = true;
    }, TIME_TO_SHOW);
    setTimeout(() => {
      this.canShowAlert = false;
    }, TIME_TO_HIDE);
  }
}
