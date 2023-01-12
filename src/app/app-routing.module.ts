import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    {
        path: '',
        loadComponent: () =>
            import('./pages/advanced-search/advanced-search.component').then((m) => m.AdvancedSearchComponent),
    },

    {
        path: 'users/:username',
        loadComponent: () => import('./pages/user/user.component').then((m) => m.UserComponent),
    },

    { path: 'new', loadComponent: () => import('./pages/new/new.component').then((m) => m.NewComponent) },
    { path: 'past', loadComponent: () => import('./pages/past/past.component').then((m) => m.PastComponent) },
    {
        path: 'comments',
        loadComponent: () => import('./pages/comments/comments.component').then((m) => m.CommentsComponent),
    },
    { path: 'ask', loadComponent: () => import('./pages/ask/ask.component').then((m) => m.AskComponent) },
    { path: 'show', loadComponent: () => import('./pages/show/show.component').then((m) => m.ShowComponent) },
    { path: 'jobs', loadComponent: () => import('./pages/jobs/jobs.component').then((m) => m.JobsComponent) },
    { path: 'submit', loadComponent: () => import('./pages/submit/submit.component').then((m) => m.SubmitComponent) },

    { path: 'login', loadComponent: () => import('./pages/login/login.component').then((m) => m.LoginComponent) },
    { path: 'logout', loadComponent: () => import('./pages/logout/logout.component').then((m) => m.LogoutComponent) },

    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
