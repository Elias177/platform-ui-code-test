import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.css']
})
export class ToastNotificationComponent implements OnInit {


  @Input() message: string;
  @Output() fadedOut = new EventEmitter<boolean>;

  fading = true;

  fadeTimeout;

  ngOnInit(): void {
    this.fadeToast();
  }

  fadeToast() {
    this.fading = true;
    this.fadeTimeout = setTimeout(() => {
      this.fadedOut.emit(true);
    }, 3100);
  }

  cancelFade() {
    this.fading = false;
    clearTimeout(this.fadeTimeout);
  }

}
