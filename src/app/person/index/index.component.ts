import { Component, OnInit } from '@angular/core';

import { PersonService } from '../person.service';
import { Person } from '../person.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  persons: Person[] = [];

  constructor( public personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getAll().subscribe((data: Person[])=>{
      this.persons =data;
      console.log(this.persons)
    })
  }

  deletePerson(id: number){
    this.personService.delete(id).subscribe(res => {
      console.log('Persona eliminada correctamente');
      window.location.reload();
    })
    
  }

}
