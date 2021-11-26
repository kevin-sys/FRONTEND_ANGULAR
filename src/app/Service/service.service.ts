import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import{Usuario}from'../Modelo/Usuario';

@Injectable()
export class ServiceService {

  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/usuarios';
  getUsuarios(){
    return this.http.get<Usuario[]>(this.Url);
  }
  CreateUsuario(usuario:Usuario){
    return this.http.post<Usuario>(this.Url,usuario);
  }
  
}
