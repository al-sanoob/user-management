import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { UserService } from '../../services/user-service';
import { UserDetailModal } from '../user-detail-modal/user-detail-modal';
import { FormsModule } from '@angular/forms';
import { UserDataObject } from '../../interfaces/user-interfaces';

@Component({
  selector: 'app-user-management-home',
  imports: [CommonModule, UserDetailModal, FormsModule],
  templateUrl: './user-management-home.html',
  styleUrl: './user-management-home.scss',
})
export class UserManagementHome {
  users: UserDataObject[] = [];
  filteredUsers: UserDataObject[] = [];
  activeFilter = 'All';
  selectedUser: UserDataObject | null = null;
  searchText: string = '';
  filterItems: string[] = ['All', 'Active', 'Inactive'];
  errorMessage: string = '';

  constructor(private _usersService: UserService, private _cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._usersService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.filteredUsers = data;
        this.errorMessage = '';
        this._cdr.detectChanges();
      },
      error: (err) => {
        this.errorMessage = 'Could not load users. Please try again later.';
        this._cdr.detectChanges();
      },
    });
  }

  filterByStatus(status: string) {
    this.activeFilter = status;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredUsers = this.users?.filter((user) => {
      const matchesSearch =
        user?.name?.toLowerCase().includes(this.searchText.toLowerCase()) ||
        user?.username?.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesStatus = this.activeFilter === 'All' || user.status === this.activeFilter;
      return matchesSearch && matchesStatus;
    });
  }

  onSearchChange() {
    this.applyFilters();
  }

  openProfile(user: any) {
    this.selectedUser = user;
  }

  closeProfile() {
    this.selectedUser = null;
  }
}
