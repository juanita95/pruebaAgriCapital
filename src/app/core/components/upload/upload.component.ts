import { AfterViewInit } from '@angular/core';
import {
  Component, Output, EventEmitter, ElementRef, OnInit, Renderer2
} from '@angular/core';
import { UploadedFile } from 'src/app/feature/models/uploaded-file';

@Component({
  selector: 'app-upload',
  templateUrl: 'upload.component.html',
  styleUrls: ['upload.component.scss'],
})
export class UploadComponent implements AfterViewInit{
  @Output() onValueChanged: EventEmitter<UploadedFile> = new EventEmitter<UploadedFile>();

  value: any[]= [];

  constructor(private elementRef: ElementRef, private renderer2: Renderer2){ }

  /* se obtiene la clase con la etiqueta dx-button-content y se crea un nuevo elemento
    para añadir el icono folder al boton*/
  ngAfterViewInit(): void{
    const parent = this.elementRef.nativeElement.querySelector('.dx-button-content');
    const child = this.renderer2.createElement('span');
    child.classList.add('icon-Folder');
    this.renderer2.appendChild(parent, child);
  }

  /* se emite el valor actual del archivo al padre*/
  valueChanged(event: any): void{
    if(!event.value){
      return;
    }
    this.onValueChanged.emit(event.value[0]);
  }
}
