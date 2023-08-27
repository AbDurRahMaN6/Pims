import { Component, Input, OnInit } from '@angular/core';
import { UserDetails } from '../models/user_details.model';
import { UsersDetailsService } from '../services/users-details.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-update-user-site',
  templateUrl: './update-user-site.component.html',
  styleUrls: ['./update-user-site.component.css']
})
export class UpdateUserSiteComponent implements OnInit {
  currentUsers: UserDetails = {};
  currentIndex = -1;

  @Input() currentDevice: UserDetails = {
    name: '',
    email:'',
    age:0,
    address:'',
    gender:'',
    phoneNumber: +94779784148
  };

  message = '';

  id: any;
  user: UserDetails = new UserDetails();
  constructor(private usersDetailsService: UsersDetailsService,
    private route: ActivatedRoute,
    private router: Router, 
    private storageService: StorageService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.usersDetailsService.getUsersDetails(this.id).subscribe(data => {
      this.user = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.usersDetailsService.updateUsers(this.id, this.user).subscribe( data =>{
      this.goToUserList();
    }
    , error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/user']);
  }

  setActiveUsersDetails(user: UserDetails, index: number): void {
    this.currentUsers = user;
    this.currentIndex = index;
  }

  logout(): void {
    this.storageService.clean();
    window.location.reload();
  }
}
