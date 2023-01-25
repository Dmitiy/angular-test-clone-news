import { inject, NgModule } from '@angular/core';
import { Route, RouterModule, Routes, UrlSegment } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';

const routes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    {
        path: '',
        loadComponent: () =>
            import('./components/advanced-search/advanced-search.component').then((m) => m.AdvancedSearchComponent),
        canMatch: [
            (route: Route, segments: UrlSegment[]) => {
                // const authService = inject(AuthService);
                // return authService.isLoggedIn$;
                return true;
            },
        ],
    },
    {
        path: 'welcome',
        loadComponent: () => import('./pages/welcome/welcome.component').then((m) => m.WelcomeComponent),
    },

    {
        path: 'users/:username',
        loadComponent: () => import('./pages/user/user.component').then((m) => m.UserComponent),
        // canActivate: [AuthGuard],
    },

    {
        path: 'new',
        loadComponent: () => import('./pages/new/new.component').then((m) => m.NewComponent),
        // canActivate: [AuthGuard],
    },
    {
        path: 'past',
        loadComponent: () => import('./pages/past/past.component').then((m) => m.PastComponent),
        // canActivate: [AuthGuard],
    },
    {
        path: 'comments',
        loadComponent: () => import('./pages/comments/comments.component').then((m) => m.CommentsComponent),
        // canActivate: [AuthGuard],
    },
    {
        path: 'ask',
        loadComponent: () => import('./pages/ask/ask.component').then((m) => m.AskComponent),
        // canActivate: [AuthGuard],
    },
    {
        path: 'show',
        loadComponent: () => import('./pages/show/show.component').then((m) => m.ShowComponent),
        // canActivate: [AuthGuard],
    },
    {
        path: 'jobs',
        loadComponent: () => import('./pages/jobs/jobs.component').then((m) => m.JobsComponent),
        // canActivate: [AuthGuard],
    },
    {
        path: 'submit',
        loadComponent: () => import('./pages/submit/submit.component').then((m) => m.SubmitComponent),
        // canActivate: [AuthGuard],
    },

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
