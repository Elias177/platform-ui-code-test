import {Component, Input} from '@angular/core';
import {ProviderListService} from '../../services/provider-list.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input('provider') provider: ProviderObj;

  showToast = false;
  toastMessage: string;
  addProvider: boolean;

  constructor(private providerListService: ProviderListService) {
  }

  selectProvider(provider: ProviderObj) {
    this.showToast = false;
    this.providerListService.selectProvider(provider);
    this.toastMessage = 'Provider ' + provider.name + ' selected ';
    setTimeout(() => {
      this.showToast = true;
    });
  }

  removeProvider(provider: ProviderObj) {
    this.showToast = false;
    this.providerListService.removeProvider(provider);
    this.toastMessage = 'Provider ' + provider.name + ' deselected';
    setTimeout(() => {
      this.showToast = true;
    });
  }

  addNewProvider() {
    this.addProvider = true;
  }
}
