import {Injectable} from '@angular/core';
import {ProviderObj} from '../models/providerModel';
@Injectable({
  providedIn: 'root'
})
export class ProviderListService {

  private selectedProviders: ProviderObj[] = [];
  private unselectedProviders: ProviderObj[] = [
    {
      id: '1',
      name: 'John',
      address: '123 Greenway Blvd',
      phone: '8991234321'
    },
    {
      id: '2',
      name: 'Mary',
      address: '443 Windwhisper Road',
      phone: '2233211903'
    },
    {
      id: '3',
      name: 'Jason',
      address: '9992 Pumpkin Hollow',
      phone: '4343219384'
    }
  ];

  constructor() {

    this.loadState();

  }

  getSelectedProviders() {
    return this.selectedProviders;
  }

  getUnselectedProviders() {
    return this.unselectedProviders;
  }

  selectProvider(provider: ProviderObj) {

    let index = 0;

    for (let i = 0; i < this.unselectedProviders.length; i++) {
      if (this.unselectedProviders[i].id === provider.id) {
        index = i;
      }
    }

    provider.selected = true;
    this.unselectedProviders.splice(index, 1);
    this.selectedProviders.push(provider);

    this.updateState();
  }

  removeProvider(provider: ProviderObj) {

    let index = 0;

    for (let i = 0; i < this.selectedProviders.length; i++) {
      if (this.selectedProviders[i].id === provider.id) {
        index = i;
      }
    }

    provider.selected = false;

    this.selectedProviders.splice(index, 1);

    this.unselectedProviders.push(provider);

    this.updateState();

  }

  createProvider(provider: ProviderObj) {
    this.unselectedProviders.push(provider);

    this.updateState();
  }

  updateState() {
    localStorage.setItem('selectedProviders' , JSON.stringify(this.selectedProviders));
    localStorage.setItem('unselectedProviders' , JSON.stringify(this.unselectedProviders));
  }

  loadState() {

    if (localStorage.getItem('selectedProviders')) {
      this.selectedProviders = JSON.parse(<string>localStorage.getItem('selectedProviders'));
    }

    if (localStorage.getItem('unselectedProviders')) {
      this.unselectedProviders = JSON.parse(<string>localStorage.getItem('unselectedProviders'));
    }

  }

}
