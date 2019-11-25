import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';
import { CategoryService } from '../category.service';
@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})

export class BsNavbarComponent {
  appUser: AppUser;
  categories$;

  // tslint:disable-next-line:no-input-rename
  @Input('category') category;

  constructor(private auth: AuthService, categoryService: CategoryService) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.categories$ = categoryService.getAll();
  }

  logout() {
    this.auth.logout();
  }


}
