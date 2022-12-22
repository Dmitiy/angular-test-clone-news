import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedSearchComponent } from './pages/advanced-search/advanced-search.component';
import { AskComponent } from './pages/ask/ask.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { NewComponent } from './pages/new/new.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PastComponent } from './pages/past/past.component';
import { ShowComponent } from './pages/show/show.component';
import { SubmitComponent } from './pages/submit/submit.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full' },
	{ path: '', component: AdvancedSearchComponent },

	{ path: 'users/:username', component: UserComponent },

	{ path: 'new', component: NewComponent },
	{ path: 'past', component: PastComponent },
	{ path: 'comments', component: CommentsComponent },
	{ path: 'ask', component: AskComponent },
	{ path: 'show', component: ShowComponent },
	{ path: 'jobs', component: JobsComponent },
	{ path: 'submit', component: SubmitComponent },

	{ path: 'login', component: LoginComponent },
	{ path: 'logout', component: LogoutComponent },
	{ path: '**', component: NotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
