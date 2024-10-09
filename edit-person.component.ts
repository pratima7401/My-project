import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from 'src/app/people.service';
import { Person } from 'src/app/people.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html'
})
export class EditPersonComponent implements OnInit {
  person: Person | undefined;

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.person = this.peopleService.getPerson(id);
  }

  save(): void {
    if (this.person) {
      this.peopleService.updatePerson(this.person);
      this.router.navigate(['/people']);
    }
  }
}
