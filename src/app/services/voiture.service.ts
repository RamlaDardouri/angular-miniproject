import { Injectable } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  apiURL: string = 'http://localhost:8086/voitures/api/';
  voitures : Voiture[];
  
 


  constructor(private http : HttpClient) { 
    /*this.voitures = [
      {idVoiture : 1, marque : "Kia", matricule:"123 4578TN",prix :70.600, dateVente
       : new Date("01/12/2019")},
       {idVoiture : 2, marque : "X five", matricule:"122 78578TN",prix :100.600, dateVente
       : new Date("01/12/2020")},
       {idVoiture : 3, marque : "Range Rover", matricule:"124 8978TN",prix :300.600, dateVente
       : new Date("01/01/2021")}
       ];*/
  }

  listeVoitures(): Observable<Voiture[]>{
    return this.http.get<Voiture[]>(this.apiURL);
    }

    ajouterVoiture( v: Voiture):Observable<Voiture>{
      return this.http.post<Voiture>(this.apiURL, v, httpOptions);
      }
      


      supprimerVoiture(id : number) {
        const url = `${this.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
        }
  
        consulterVoiture(id: number): Observable<Voiture> {
          const url = `${this.apiURL}/${id}`;
          return this.http.get<Voiture>(url);
          }
          
  
    trierVoitures(){
      this.voitures = this.voitures.sort((n1,n2) => {
      if (n1.idVoiture > n2.idVoiture) {
      return 1;
      }
      if (n1.idVoiture < n2.idVoiture) {
      return -1;
      }
      return 0;
      });
      }



      updateVoiture(v :Voiture) : Observable<Voiture>
      {
      return this.http.put<Voiture>(this.apiURL, v, httpOptions);
      }

}
