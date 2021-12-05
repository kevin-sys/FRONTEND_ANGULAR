import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.component.html',
  styleUrls: ['./creacion.component.css']
})
export class CreacionComponent implements OnInit {
  usuario:Usuario=new Usuario();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }
  
  Guardar(){
    this.service.CreateUsuario(this.usuario).subscribe(data=>{
      alert("SE REGISTRÓ EXITOSAMENTE EL USUARIO: "+ this.usuario.nombres);
     //this.router.navigate(["listado"]);
    });
  }

}
