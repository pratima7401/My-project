import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from 'src/app/people.service';
import { Person } from 'src/app/people.service';

@Component({
  selector: 'app-delete-person',
  templateUrl: './delete-person.component.html'
})
export class DeletePersonComponent implements OnInit {
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

  delete(): void {
    if (this.person) {
      this.peopleService.deletePerson(this.person.id);
      this.router.navigate(['/people']);
    }
  }

  cancel(): void {
    this.router.navigate(['/people']);
  }
}
