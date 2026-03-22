import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ViewEditMember } from './pages/view-edit-member/view-edit-member';

import { EditMember } from './pages/edit-member/edit-member';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'view-edit-member', component: ViewEditMember },
  { path: 'edit-member', component: EditMember }
];
