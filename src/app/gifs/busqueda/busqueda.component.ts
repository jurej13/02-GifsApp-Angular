import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {
  // Para manipular todo el html en este caso input, para eso se usa.
  @ViewChild('txtBuscar') txtBuscar !: ElementRef<HTMLInputElement> ;
  // ! operador para asegurar que el objeto no es nulo
  constructor(private gifsService:GifsService) { }

  buscar(){
    const valor =this.txtBuscar.nativeElement.value
    if(valor.trim().length===0) return;
    this.gifsService.buscarGifs(valor)
    this.txtBuscar.nativeElement.value = ''
  }  

}
