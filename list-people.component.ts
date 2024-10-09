import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/people.service';
import { Person } from 'src/app/people.service';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html'
})
export class ListPeopleComponent implements OnInit {
  people: Person[] = [];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.people = this.peopleService.getAllPeople();
  }
}
