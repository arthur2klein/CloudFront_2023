import { Component } from '@angular/core';
import { UsersI } from 'src/app/shared/models/users-i';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
    mapUsers:Map<string, UsersI> = new Map<string, UsersI>();
    constructor(public users: UsersService) {}
    ngOnInit() {
        this.users.getAllUsers();
        this.mapUsers = this.users.mapUsers;
    }
}
