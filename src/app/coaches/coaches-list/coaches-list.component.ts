import { Component, OnInit } from '@angular/core';
import { Coach } from '../coach.model';

@Component({
  selector: 'app-coaches-list',
  templateUrl: './coaches-list.component.html',
  styleUrls: ['./coaches-list.component.css']
})
export class CoachesListComponent implements OnInit {

  coaches: Coach[] = [
    new Coach('../../../assets/photo/coaches-profil/Nikos Koustas.jpg', 'Nikos Koustas', 'Kifisia FC'),
    new Coach('../../../assets/photo/coaches-profil/Giorgos Archontakis.jpg', 'Giorgos Archontakis', 'Moschato')

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
