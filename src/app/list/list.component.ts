import { Component, OnInit  } from '@angular/core';
import {ProviderListService} from '../services/provider-list.service';
import {ProviderObj} from '../models/providerModel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public selectedProviders: ProviderObj[] = [];
  public unselectedProviders: ProviderObj[];

  constructor(public providerListService: ProviderListService) {
    this.unselectedProviders = providerListService.getUnselectedProviders();
  }

  ngOnInit() {}

}
