import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/models/IUser';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userProfile: IUser | undefined = {} as IUser;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    let username: string = this.route.snapshot.paramMap.get('username')!;

    this.usersService.getUser(username).subscribe(res => {
      this.userProfile = res;
    });
  }

}
