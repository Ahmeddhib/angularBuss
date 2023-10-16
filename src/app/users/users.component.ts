import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { Role } from '../model/role.model';
import {AuthService} from "../services/auth.service";
import { UsersService } from '../services/users.service';
import { BusService } from '../services/bus.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users? : User[];
  roles?: Role[];
  constructor(public authService: AuthService, private busService: BusService) {}

  ngOnInit(): void {
    this.listeUser();
  }

  listeUser(): void {
    this.busService.listeUser().subscribe((users: User[]) => {
      this.users = users;
    });
  }



  //supprimerUser(u: User) {
    //let conf = confirm("Etes-vous sûr ?");
    //if (conf)
      //this.busService.supprimerUser(u.user_id!).subscribe(() => {
        //console.log("Deleted User");
        //this.chargerUsers();
      //});
  //}

}

