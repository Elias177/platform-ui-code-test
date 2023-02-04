import { Component } from '@angular/core';
import {ProviderListService} from '../services/provider-list.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  showSide = false;

  constructor(public providerList: ProviderListService) {
  }
}
