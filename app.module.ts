import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPeopleComponent } from './components/list-people/list-people.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { DeletePersonComponent } from './components/delete-person/delete-person.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPeopleComponent,
    EditPersonComponent,
    DeletePersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
