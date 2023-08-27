import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/models/user_details.model';
import { StorageService } from 'src/app/services/storage.service';
import { UsersDetailsService } from 'src/app/services/users-details.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  user: UserDetails = new UserDetails();
  submitted = false;


  constructor(private userDetailsService: UsersDetailsService,
    private router: Router, private storageService: StorageService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.userDetailsService.createUser(this.user)
    .subscribe(data => console.log(data), error => console.log(error));
    this.user = new UserDetails();
    this.router.navigate(['/user']);
  }

  logout(): void {
    this.storageService.clean();
    window.location.reload();
  }

}