import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProviderDialogComponent } from './add-provider-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProviderListService} from "../../services/provider-list.service";


describe('AddProviderDialogComponent', () => {
  let component: AddProviderDialogComponent;
  let fixture: ComponentFixture<AddProviderDialogComponent>;
  let providerListService: ProviderListService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ AddProviderDialogComponent ],
      providers: [{provide: ProviderListService}]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddProviderDialogComponent);
    component = fixture.componentInstance;
    providerListService = TestBed.inject(ProviderListService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.providerForm.valid).toBeFalsy();
  });

  it('name field validity', () => {
    let errors: {};
    const name = component.providerForm.controls['name'];
    expect(name.valid).toBeFalsy();

    errors = name.errors || {};
    expect(errors['required']).toBeTruthy();

    name.setValue(' ');
    errors = name.errors || {};
    expect(errors['required']).toBeFalsy();

    name.setValue('Elias');
    errors = name.errors || {};
    expect(errors['required']).toBeFalsy();
  });

  it('address field validity', () => {
    let errors: {};
    const address = component.providerForm.controls['address'];
    expect(address.valid).toBeFalsy();

    errors = address.errors || {};
    expect(errors['required']).toBeTruthy();

    address.setValue(' ');
    errors = address.errors || {};
    expect(errors['required']).toBeFalsy();

    address.setValue('1308 Clark St');
    errors = address.errors || {};
    expect(errors['required']).toBeFalsy();
  });

  it('phone field validity', () => {
    let errors: {};
    const phone = component.providerForm.controls['phone'];
    expect(phone.valid).toBeFalsy();

    errors = phone.errors || {};
    expect(errors['required']).toBeTruthy();

    phone.setValue(' ');
    errors = phone.errors || {};
    expect(errors['required']).toBeFalsy();

    phone.setValue('3023136102');
    errors = phone.errors || {};
    expect(errors['required']).toBeFalsy();
  });

  it('should create a new provider and add to unselected list', () => {

    expect(component.providerForm.valid).toBeFalsy();
    component.providerForm.controls['name'].setValue('Elias');
    component.providerForm.controls['phone'].setValue("3023136102");
    component.providerForm.controls['address'].setValue("1308 Clark St");
    expect(component.providerForm.valid).toBeTruthy();

    const provider = component.providerForm.value
    component.createProvider()

    expect( providerListService.getUnselectedProviders()[providerListService.getUnselectedProviders().length - 1])
      .toBe(provider)

  });


});
