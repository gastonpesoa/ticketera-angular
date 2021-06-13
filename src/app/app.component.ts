import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) { 
    //this.usedUrl=this.urlLocal;
    this.usedUrl=this.urlServer;
  }
  title = 'ticketera';
  urlLocal="http://localhost:8080/";
  urlServer="https://nodejs-mongodb-ticketera.herokuapp.com/";
  usedUrl="";
  responseDesperfectos:any;
  responseAtenciones:any;
  responseZonales:any;
  responseClientes:any;
  get(){
    return this.http.get(this.usedUrl)
      .subscribe((data:any) => {
        this.responseDesperfectos = JSON.stringify(data)        
      })
  }
  getDesperfectos(){
    return this.http.get(this.usedUrl.concat("desperfectos"))
      .subscribe((data:any) => {
        this.responseDesperfectos = JSON.stringify(data)        
      })
  }
  getDesperfectosDondeOcurren(){
    return this.http.get(this.usedUrl.concat("desperfectos-donde"))
      .subscribe((data:any) => {
        this.responseDesperfectos = JSON.stringify(data)        
      })
  }
  getDesperfectosCadaCuanto(){
    return this.http.get(this.usedUrl.concat("desperfectos-cada-cuanto"))
      .subscribe((data:any) => {
        this.responseDesperfectos = JSON.stringify(data)        
      })
  }
  getAtencionEmpleado(){
    return this.http.get(this.usedUrl.concat("atencion-empleado"))
      .subscribe((data:any) => {
        this.responseAtenciones = JSON.stringify(data)        
      })
  }
  getAtencionHorario(){
    return this.http.get(this.usedUrl.concat("atencion-horario"))
      .subscribe((data:any) => {
        this.responseAtenciones = JSON.stringify(data)        
      })
  }
  getAtencionTrabajos(){
    return this.http.get(this.usedUrl.concat("atencion-trabajos"))
      .subscribe((data:any) => {
        this.responseAtenciones = JSON.stringify(data)        
      })
  }
  getZonalesDesperfectos(){
    return this.http.get(this.usedUrl.concat("zonales-desperfectos"))
      .subscribe((data:any) => {
        this.responseZonales = JSON.stringify(data)        
      })
  }
  getZonalesAtenciones(){
    return this.http.get(this.usedUrl.concat("zonales-atenciones"))
      .subscribe((data:any) => {
        this.responseZonales = JSON.stringify(data)        
      })
  }
  getClientesConsultas(){
    return this.http.get(this.usedUrl.concat("clientes-consultas"))
      .subscribe((data:any) => {
        this.responseClientes = JSON.stringify(data)        
      })
  }
  getClientesTickets(){
    return this.http.get(this.usedUrl.concat("clientes-tickets"))
      .subscribe((data:any) => {
        this.responseClientes = JSON.stringify(data)        
      })
  }
  getClientesZona(){
    return this.http.get(this.usedUrl.concat("clientes-zona"))
      .subscribe((data:any) => {
        this.responseClientes = JSON.stringify(data)        
      })
  }
  getClientesEmpleados(){
    return this.http.get(this.usedUrl.concat("clientes-empleados"))
      .subscribe((data:any) => {
        this.responseClientes = JSON.stringify(data)        
      })
  }
}
