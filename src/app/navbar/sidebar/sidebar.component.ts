import {Component, EventEmitter, Output} from '@angular/core';
import {ProviderListService} from '../../services/provider-list.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  closing = false;
  @Output() close = new EventEmitter<boolean>;

  expand = false;
  retract = false;

  constructor(public providerListService: ProviderListService) {
  }
  closeSide() {
    this.closing = true;


    setTimeout(() => {
      this.closing = false;
      this.close.emit(true);
    }, 500);

  }

  expandRetractbar() {

    if (this.expand) {

      this.retract = true;

      setTimeout(() => {
        this.expand = false;
      }, 300);

    } else {
      this.expand = true;
      this.retract = false;
    }

  }
}
