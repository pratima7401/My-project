import { Injectable } from '@angular/core';

export interface Person {
  id: number;
  name: string;
  age: number;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private people: Person[] = [
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Paul Walker', age: 28, email: 'paul@example.com' },
  ];

  getAllPeople() {
    return this.people;
  }

  getPerson(id: number) {
    return this.people.find(person => person.id === id);
  }

  updatePerson(person: Person) {
    const index = this.people.findIndex(p => p.id === person.id);
    if (index !== -1) {
      this.people[index] = person;
    }
  }

  deletePerson(id: number) {
    this.people = this.people.filter(person => person.id !== id);
  }
}
