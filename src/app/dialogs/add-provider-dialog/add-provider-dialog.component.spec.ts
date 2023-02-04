import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProviderDialogComponent } from './add-provider-dialog.component';

describe('AddProviderDialogComponent', () => {
  let component: AddProviderDialogComponent;
  let fixture: ComponentFixture<AddProviderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProviderDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProviderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
