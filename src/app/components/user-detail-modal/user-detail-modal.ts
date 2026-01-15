import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserDataObject } from '../../interfaces/user-interfaces';

@Component({
  selector: 'app-user-detail-modal',
  imports: [],
  templateUrl: './user-detail-modal.html',
  styleUrl: './user-detail-modal.scss',
})
export class UserDetailModal {

  @Input() user: UserDataObject = {};

  @Output() close = new EventEmitter<void>();

}
