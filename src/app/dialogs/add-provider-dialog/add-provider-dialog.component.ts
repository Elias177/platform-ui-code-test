import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProviderListService} from '../../services/provider-list.service';

@Component({
  selector: 'app-add-provider-dialog',
  templateUrl: './add-provider-dialog.component.html',
  styleUrls: ['./add-provider-dialog.component.css']
})
export class AddProviderDialogComponent {

  close = false;
  @Output() closing = new EventEmitter<boolean>;

  providerForm: FormGroup;

  showToast = false;
  toastMessage: string;

  constructor(private providerListService: ProviderListService) {

   this.providerForm = new FormGroup({
      id: new FormControl((this.providerListService.getUnselectedProviders().length + 1).toString()),
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10) ])
    });

  }

  closeDialog() {

    this.close = true;

    setTimeout(() => {
      this.closing.emit(true);
    }, 100);

  }

  createProvider() {
    this.showToast = true;
    this.toastMessage = 'Provider ' + this.providerForm.get('name').value + ' created';
    this.providerListService.createProvider(this.providerForm.value);
    this.providerForm.reset();
  }
}
