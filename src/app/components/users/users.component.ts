import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = true;
  showUserForm: boolean = false;
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  data:any;
  constructor(private dataSerive : DataService) { }

  ngOnInit() {
    this.dataSerive.getData().subscribe(data=>{
      console.log(data);
    })
    this.dataSerive.getUsers().subscribe(users =>{
     this.users = users;
     this.loaded = true;
   })

  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      email: ''
    }
  }
  toggleHide(user: User) {
    user.hide = !user.hide;
  }
  onSubmit(e) {
    //console.log(13);
    e.preventDefault();
  }
  fireEvent(e) {
    console.log(e.target.value);
  }

}
