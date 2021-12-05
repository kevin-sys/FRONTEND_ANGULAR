import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ServiceService}from'../../Service/service.service'
import{Usuario}from 'src/app/Modelo/Usuario';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
 usuarios:Usuario[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getUsuarios()
    .subscribe(data=>{
      this.usuarios=data;
    })
  }
  Editar(usuario:Usuario):void{
    localStorage.setItem("id",usuario.id.toString());
    this.router.navigate(["edicion"]);
  }
  Delete(usuario:Usuario){
    this.service.deleteUsuario(usuario)
    .subscribe(data=>{
      this.usuarios=this.usuarios.filter(p=>p!==usuario);
      alert("USUARIO ELIMINADO SATISFACTORIAMENTE");
    })
  }

}
