import { Routes } from '@angular/router';
import { TournamentAdminComponent } from './modules/tournaments/pages/tournament-admin/tournament-admin';
import { EnrollmentAdminComponent } from './modules/tournaments/pages/enrollment-admin/enrollment-admin';
import { TournamentDashboardComponent } from './modules/tournaments/pages/tournament-dashboard/tournament-dashboard';
import { RoleAdminComponent } from './modules/tournaments/components/role-admin/role-admin.component';

export const routes: Routes = [
  { path: 'admin/tournaments', component: TournamentAdminComponent },
  { path: 'admin/enrollments', component: EnrollmentAdminComponent },
  { path: 'dashboard', component: TournamentDashboardComponent }, 
  { path: '', redirectTo: 'admin/tournaments', pathMatch: 'full' },
  { path: '**', redirectTo: 'admin/tournaments' },
  { path: 'roles', component: RoleAdminComponent }
];