import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';
import {Router } from '@angular/router';



@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html'
})
export class AddVoitureComponent implements OnInit {
  newVoiture = new Voiture();

  message :string;


  constructor(private voitureService: VoitureService,
    private router :Router) { }

  ngOnInit(): void {
  }


  addVoiture(){
    this.voitureService.ajouterVoiture(this.newVoiture).subscribe(v => {
    console.log(v);
    });
    this.router.navigate(['voitures']).then(() => {
      window.location.reload();
      });

}}
