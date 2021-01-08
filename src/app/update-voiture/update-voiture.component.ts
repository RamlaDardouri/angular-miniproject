import { Component, OnInit } from '@angular/core';

import { VoitureService } from '../services/voiture.service';
import { Voiture } from '../model/voiture.model';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
selector: 'app-update-voiture',
templateUrl: './update-voiture.component.html',
styles: []
})
export class UpdateVoitureComponent implements OnInit {
currentVoiture = new Voiture();
constructor(private activatedRoute: ActivatedRoute,
  private router :Router,
  private voitureService: VoitureService) { }
  
  ngOnInit() {
    this.voitureService.consulterVoiture(this.activatedRoute.snapshot.params.id).
     subscribe( v =>{ this.currentVoiture = v; } ) ;
    }


    updateVoiture() {
      this.voitureService.updateVoiture(this.currentVoiture).subscribe(v => {
      this.router.navigate(['voitures']);
      },(error) => { alert("Problème lors de la modification !"); }
      );
      }

}