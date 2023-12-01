import { Component } from '@angular/core';
import {UsersI} from 'src/app/shared/models/users-i';
import {AuthService} from 'src/app/shared/services/auth.service';
import {UsersService} from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-gestion-profils',
  templateUrl: './gestion-profils.component.html',
  styleUrls: ['./gestion-profils.component.css']
})
export class GestionProfilsComponent {
  list_roles: Array<string> = [
    "superadmin",
    "organisateur",
    "user"
  ];
  mapUsers:Map<string, UsersI> = new Map<string, UsersI>();
  constructor(public users: UsersService, public auth: AuthService) {}
  ngOnInit() {
    this.users.getAllUsers();
    this.mapUsers = this.users.mapUsers;
  }
  change_role(user_id: string, $event: Event) {
    this.users.change_role(user_id, ($event.target! as HTMLSelectElement).value);;
  }
  }
