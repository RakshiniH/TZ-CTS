import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-member',
  imports: [CommonModule],
  templateUrl: './edit-member.html',
  styleUrl: './edit-member.css',
})
export class EditMember {
  addresses = [
    {
      use: 'Physical',
      type: 'Home',
      street1: '0A00A00A75',
      street2: '',
      city: 'ADJUNTAS',
      state: 'PR',
      zip: '00601',
      start: '03/09/2026',
      end: '09/30/2049',
      status: 'Valid'
    }
  ];
}
