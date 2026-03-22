import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-edit-member',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-edit-member.html',
  styleUrls: ['./view-edit-member.css'],
})
export class ViewEditMember {
  records = [
    { mbi: '0A00A00A75', firstName: 'TEST1', mi: '', lastName: 'TEST1', planId: 'H0001', pbpId: '001', memberId: 'M0001', effectDate: '01/01/2026', termDate: '12/31/9999', status: 'Active' },
    { mbi: '0A00A00AA17', firstName: 'LUCKY1', mi: 'M', lastName: 'AMIE1', planId: 'H1001', pbpId: '001', memberId: 'VMID00001', effectDate: '01/01/2026', termDate: '12/31/9999', status: 'Pending' },
    { mbi: '0A00A00AA18', firstName: 'LUCKY2', mi: 'M', lastName: 'AMIE2', planId: 'H1001', pbpId: '001', memberId: 'VMID00002', effectDate: '01/01/2026', termDate: '12/31/9999', status: 'Pending' },
    { mbi: '0A00A00AA19', firstName: 'LUCKY3', mi: 'M', lastName: 'AMIE3', planId: 'H1001', pbpId: '001', memberId: 'VMID00003', effectDate: '01/01/2026', termDate: '12/31/9999', status: 'Pending' },
    { mbi: '0A00A00AA20', firstName: 'LUCKY4', mi: 'M', lastName: 'AMIE4', planId: 'H1001', pbpId: '001', memberId: 'VMID00004', effectDate: '01/01/2026', termDate: '12/31/9999', status: 'Pending' },
    { mbi: '0A00A00AA50', firstName: '0A00A00AA50', mi: '', lastName: '0A00A00AA50', planId: 'H0001', pbpId: '001', memberId: '0A00A00AA50', effectDate: '01/01/2026', termDate: '12/31/9999', status: 'Active' },
    { mbi: '0A00A00AA51', firstName: 'SDS', mi: '', lastName: 'AA', planId: 'H0001', pbpId: '005', memberId: 'SDS', effectDate: '01/01/2026', termDate: '12/31/9999', status: 'Active' },
    { mbi: '0A00A00AA52', firstName: '0A00A00AA52', mi: '', lastName: '0A00A00AA52', planId: 'H0001', pbpId: '002', memberId: '0A00A00AA77', effectDate: '02/01/2026', termDate: '12/31/9999', status: 'Active' },
    { mbi: '0A00A00AA53', firstName: '0A00A00AA53', mi: '', lastName: '0A00A00AA53', planId: 'H0001', pbpId: '001', memberId: '0A00A00AA53', effectDate: '01/01/2026', termDate: '12/31/9999', status: 'Active' }
  ];
}
