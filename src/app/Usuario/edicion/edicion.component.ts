import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {
  usuario :Usuario =  new Usuario();

  constructor(private router:Router,private service:ServiceService) { }


  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getUsuarioId(+id)
    .subscribe(data=>{
      this.usuario=data;
    })

  }

  Actualizar(usuario:Usuario){
    this.service.updateUsuario(usuario)
    .subscribe(data=>{
      this.usuario=data;
      alert("SE ACTUALIZO EL REGISTRO EXITOSAMENTE");
     // this.router.navigate(['/listado']);

    })
  }

}
