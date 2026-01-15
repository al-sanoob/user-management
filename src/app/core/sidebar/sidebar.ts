import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavItem } from '../../interfaces/user-interfaces';
import { navMenuItems } from '../../constants/common-constant';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {

  navItems: NavItem[] = navMenuItems;

}
