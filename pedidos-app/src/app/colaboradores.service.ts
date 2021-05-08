import { Colaborador } from './colaboradores/colaborador';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {


  apiURL: string = `${environment.apiURLBase}/api/colaboradores`;

  constructor(private http : HttpClient) { }

  salvar(colaborador : Colaborador): Observable<Colaborador>{
    return this.http.post<Colaborador>(this.apiURL,colaborador);
  }

  atualizar(colaborador : Colaborador): Observable<any>{
    return this.http.put<Colaborador>(`${this.apiURL}/${colaborador.id}`,colaborador);
  }

 getColaboradores():Observable<Colaborador[]>{
   return this.http.get<Colaborador[]>(this.apiURL);
 }

 getColaboradorById(id:number){
   return this.http.get<any>(`${this.apiURL}/${id}`)
 }

 deletar(colaborador: Colaborador): Observable<any>{
   return this.http.delete<any>(`${this.apiURL}/${colaborador.id}`);
 }



}
