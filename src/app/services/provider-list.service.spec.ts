import { TestBed } from '@angular/core/testing';

import { ProviderListService } from './provider-list.service';
import {ProviderObj} from "../models/providerModel";

describe('ProviderListService', () => {
  let service: ProviderListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProviderListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('provider is added to selected list', () => {

    const listLength = service.getSelectedProviders().length;

    const mock: ProviderObj = {
      name: 'Mock',
      address: 'Mock',
      phone: 'Mock',
      id: 'Mock'
    }
    service.selectProvider(mock)

    expect(service.getSelectedProviders().length).toBeGreaterThan(listLength);

  })

  it('provider is removed from selected list', () => {

    const listLength = service.getSelectedProviders().length;

    const mock: ProviderObj = {
      name: 'Mock',
      address: 'Mock',
      phone: 'Mock',
      id: 'Mock'
    }
    service.removeProvider(mock)

    expect(service.getSelectedProviders().length).toBeLessThan(listLength);

  })

});
