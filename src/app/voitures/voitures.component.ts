import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';
import {Router } from '@angular/router';



@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html'
})
export class VoituresComponent implements OnInit {
  voitures : Voiture[];
  constructor(private voitureService: VoitureService ,
    private router :Router) {
    //this.voitures = voitureService.listeVoitures();
    }

  ngOnInit(): void {
    this.voitureService.listeVoitures().subscribe(v => {
      console.log(v);
      this.voitures  = v;
      });
      
  }


  supprimerVoiture(v: Voiture)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.voitureService.supprimerVoiture(v.idVoiture).subscribe(() => {
  console.log("voiture supprimé");
  this.SuprimerVoitureDuTableau(v);

  });
  }

  SuprimerVoitureDuTableau(v : Voiture) {
    this.voitures.forEach((cur, index) => {
    if(v.idVoiture=== cur.idVoiture) {
    this.voitures.splice(index, 1);
    }
    });
    }

}