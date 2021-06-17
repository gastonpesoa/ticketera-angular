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
    //this.usedUrl = this.urlLocal;
    this.usedUrl=this.urlServer;
  }
  title = 'ticketera';
  urlLocal = "http://localhost:8080/";
  urlServer = "https://nodejs-mongodb-ticketera.herokuapp.com/";
  usedUrl = "";
  responseDesperfectos: any;
  responseAtenciones: any;
  responseZonales: any;
  responseClientes: any;
  get() {
    return this.http.get(this.usedUrl)
      .subscribe((data: any) => {
        this.responseDesperfectos = JSON.stringify(data)
        this.responseAtenciones = ""
        this.responseZonales = ""
        this.responseClientes = ""
      })
  }
  getDesperfectos() {
    return this.http.get(this.usedUrl.concat("desperfectos"))
      .subscribe((data: any) => {
        this.responseDesperfectos = JSON.stringify(data)
        this.responseAtenciones = ""
        this.responseZonales = ""
        this.responseClientes = ""
      })
  }
  getDesperfectosDondeOcurren() {
    return this.http.get(this.usedUrl.concat("desperfectos-donde"))
      .subscribe((data: any) => {
        this.responseDesperfectos = JSON.stringify(data)
        this.responseAtenciones = ""
        this.responseZonales = ""
        this.responseClientes = ""
      })
  }
  getDesperfectosCadaCuanto() {
    return this.http.get(this.usedUrl.concat("desperfectos-cada-cuanto"))
      .subscribe((data: any) => {
        this.responseDesperfectos = JSON.stringify(data)
        this.responseAtenciones = ""
        this.responseZonales = ""
        this.responseClientes = ""
      })
  }
  getAtencionEmpleado() {
    return this.http.get(this.usedUrl.concat("atencion-empleado"))
      .subscribe((data: any) => {
        this.responseAtenciones = JSON.stringify(data)
        this.responseDesperfectos = ""
        this.responseZonales = ""
        this.responseClientes = ""
      })
  }
  getAtencionHorario() {
    return this.http.get(this.usedUrl.concat("atencion-horario"))
      .subscribe((data: any) => {
        this.responseAtenciones = JSON.stringify(data)
        this.responseDesperfectos = ""
        this.responseZonales = ""
        this.responseClientes = ""
      })
  }
  getAtencionTrabajos() {
    return this.http.get(this.usedUrl.concat("atencion-trabajos"))
      .subscribe((data: any) => {
        this.responseAtenciones = JSON.stringify(data)
        this.responseDesperfectos = ""
        this.responseZonales = ""
        this.responseClientes = ""
      })
  }
  getZonalesDesperfectos() {
    return this.http.get(this.usedUrl.concat("zonales-desperfectos"))
      .subscribe((data: any) => {
        this.responseZonales = JSON.stringify(data)
        this.responseDesperfectos = ""
        this.responseAtenciones = ""
        this.responseClientes = ""
      })
  }
  getZonalesAtenciones() {
    return this.http.get(this.usedUrl.concat("zonales-atenciones"))
      .subscribe((data: any) => {
        this.responseZonales = JSON.stringify(data)
        this.responseDesperfectos = ""
        this.responseAtenciones = ""
        this.responseClientes = ""
      })
  }
  getClientesConsultas() {
    return this.http.get(this.usedUrl.concat("clientes-consultas"))
      .subscribe((data: any) => {
        this.responseClientes = JSON.stringify(data)
        this.responseDesperfectos = ""
        this.responseAtenciones = ""
        this.responseZonales = ""
      })
  }
  getClientesTickets() {
    return this.http.get(this.usedUrl.concat("clientes-tickets"))
      .subscribe((data: any) => {
        this.responseClientes = JSON.stringify(data)
        this.responseDesperfectos = ""
        this.responseAtenciones = ""
        this.responseZonales = ""
      })
  }
  getClientesZona() {
    return this.http.get(this.usedUrl.concat("clientes-zona"))
      .subscribe((data: any) => {
        this.responseClientes = JSON.stringify(data)
        this.responseDesperfectos = ""
        this.responseAtenciones = ""
        this.responseZonales = ""
      })
  }
  getClientesEmpleados() {
    return this.http.get(this.usedUrl.concat("clientes-empleados"))
      .subscribe((data: any) => {
        this.responseClientes = JSON.stringify(data)
        this.responseDesperfectos = ""
        this.responseAtenciones = ""
        this.responseZonales = ""
      })
  }
}
