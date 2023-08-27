import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { UserDetails } from '../models/user_details.model';
import { UsersDetailsService } from '../services/users-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-site',
  templateUrl: './user-site.component.html',
  styleUrls: ['./user-site.component.css']
})
export class UserSiteComponent implements OnInit {
  users?: UserDetails[];
  currentUsers: UserDetails = {};
  currentIndex = -1;
  model = '';

  @Input() currentDevice: UserDetails = {
    name:'',
    address: '',
    gender: '',
    email:'',
    age:0,
    phoneNumber: +94779784148
  };

  message = '';

  constructor(private usersDetailsService: UsersDetailsService,
    private router: Router, private storageService: StorageService) { 
    }

  ngOnInit() {
    this.retrieveUsers();
  }
  retrieveUsers(): void {
    this.usersDetailsService.getAllUsers()
      .subscribe({
        next: (data) => {
          this.users = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveUsers();
    this.currentIndex = -1;
  }

  getDevice(id: string): void {
    this.usersDetailsService.getUsersDetails(id)
      .subscribe({
        next: (data) => {
          this.currentDevice = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  deleteDevice(id: any): void {
    if(confirm('Are you sure Delete this user?'))
    this.usersDetailsService.deleteUsers(id)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      });
  }

  updateDevice(id: any): void {
    this.router.navigate(['users/update/', id]);
  }

  logout(): void {
    this.storageService.clean();
    window.location.reload();
  }
}

