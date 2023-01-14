import { inject, NgModule } from '@angular/core';
import { Route, RouterModule, Routes, UrlSegment } from '@angular/router';
import { AuthService } from './services/auth.service';

const routes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    {
        path: '',
        loadComponent: () =>
            import('./pages/advanced-search/advanced-search.component').then((m) => m.AdvancedSearchComponent),
        canMatch: [
            (route: Route, segments: UrlSegment[]) => {
                const authService = inject(AuthService);
                return authService.isLoggedIn$;
            },
        ],
    },
    {
        path: 'welcome',
        loadComponent: () => import('./pages/welcome/welcome.component').then((m) => m.WelcomeComponent),
    },

    { path: 'login', loadComponent: () => import('./pages/login/login.component').then((m) => m.LoginComponent) },

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
