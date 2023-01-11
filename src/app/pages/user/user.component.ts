/* eslint-disable no-useless-constructor */
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/models/IUser';
import { UsersService } from 'src/app/services/users.service';

@Component({
	selector: 'app-user',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
	userProfile$: IUser | undefined = {} as IUser;

	constructor(private _route: ActivatedRoute, private _usersService: UsersService) {}

	ngOnInit(): void {
		this.getUser();
	}

	getUser(): void {
		const username: string = this._route.snapshot.paramMap.get('username')!;

		this._usersService.getUser(username).subscribe((res) => {
			this.userProfile$ = res;
		});
	}
}
