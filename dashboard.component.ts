import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  memberStats = [
    { count: 14569, label: 'Active', selected: true },
    { count: 19724, label: 'Pending', selected: false },
    { count: 509,   label: 'Not-Enrolled', selected: false }
  ];

  /* ── Plan rows (3 rows of 5) ── */
  planRow1 = [
    { count: 14135, code: 'H1001', selected: true },
    { count: 246,   code: 'H0001', selected: false },
    { count: 62,    code: 'H1002', selected: false },
    { count: 48,    code: 'H1005', selected: false },
    { count: 32,    code: 'H0002', selected: false }
  ];

  statusLabels = [
    { count: 14133, label: 'Active' },
    { count: 0,     label: 'Future Plan/PBP ID Change' },
    { count: 2,     label: 'Future Dis-Enrollment' }
  ];

  planRow2 = [
    { count: 14, code: 'H1004', selected: false },
    { count: 8,  code: 'S2001', selected: false },
    { count: 7,  code: 'H1003', selected: false },
    { count: 6,  code: 'H0003', selected: false },
    { count: 4,  code: 'PDM01', selected: false }
  ];

  planRow3 = [
    { count: 3, code: 'FL001', selected: false },
    { count: 1, code: 'H0005', selected: false },
    { count: 1, code: 'H0006', selected: false },
    { count: 1, code: 'R0105', selected: false },
    { count: 1, code: 'S0001', selected: false }
  ];
}
