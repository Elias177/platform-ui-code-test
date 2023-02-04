import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProviderListService} from '../../services/provider-list.service';
import {ProviderObj} from '../../models/providerModel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input('provider')
  provider: ProviderObj | any;

  @Output()
  cardState = new EventEmitter<string>;

  addProvider: boolean = false;

  constructor(private providerListService: ProviderListService) {
  }

  selectProvider(provider: ProviderObj) {

    this.providerListService.selectProvider(provider);
    this.cardState.emit('Provider ' + provider.name + ' selected');
  }

  removeProvider(provider: ProviderObj) {
    this.providerListService.removeProvider(provider);
    this.cardState.emit('Provider ' + provider.name + ' deselected');
  }

  addNewProvider() {
    this.addProvider = true;
  }
}
