import { Servico } from './servicos/servico';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  apiURL: string = `${environment.apiURLBase}/api/servicos`;

  constructor(private http: HttpClient) { }

  salvar(servico: Servico): Observable<Servico>{
    return this.http.post<Servico>(`${this.apiURL}`,servico);
  }

  atualizar(servico: Servico): Observable<any>{
    return this.http.put<Servico>(`${this.apiURL}/${servico.id}`,servico);
  }

  getServicos() : Observable<Servico[]>{
    return this.http.get<Servico[]>(this.apiURL);
  }

  getServicoById(id:number){
    return this.http.get<any>(`${this.apiURL}/${id}`)
  }

  deletar(servico: Servico): Observable<any>{
    return this.http.delete<any>(`${this.apiURL}/${servico.id}`);
  }
}
