import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { IMockUser, MockUserEnum } from 'src/app/models/IMockUser.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-welcome',
    standalone: true,
    imports: [CommonModule, MaterialModule, ReactiveFormsModule],
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
    loginForm = this._formBuilder.group({
        name: [MockUserEnum.name, Validators.required],
        email: [MockUserEnum.email, Validators.required],
    });

    constructor(private _formBuilder: FormBuilder, private _auth: AuthService) {}

    onSubmit(): void {
        const user = this.loginForm.value as IMockUser;
        if (user) {
            this._auth.login(user);
            this.loginForm.reset();
        }
    }
}
