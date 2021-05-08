import { PedidoBusca } from './pedidos/pedidos-lista/pedidoBusca';
import { Observable } from 'rxjs';
import { Pedido } from './pedidos/pedido';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  apiURL: string = `${environment.apiURLBase}/api/pedidos`

  constructor(private http: HttpClient) { }


  salvar(pedido : Pedido): Observable<Pedido>{
    return this.http.post<Pedido>(this.apiURL, pedido);
  }

  buscar(nomeColaborador : string, mes: number):Observable<PedidoBusca[]>{

    const httpParms = new HttpParams()
      .set("nomeColaborador", nomeColaborador)
      .set("mes", mes ? mes.toString() : '');

      const url = this.apiURL + "?" + httpParms.toString();
      console.log(url)
      return this.http.get<any>(url);


  }

}
