import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './list/card/card.component';
import { SidebarComponent } from './navbar/sidebar/sidebar.component';
import { FormatPhonePipe } from './pipes/format-phone.pipe';
import { ToastNotificationComponent } from './toast-notification/toast-notification.component';
import { AddProviderDialogComponent } from './dialogs/add-provider-dialog/add-provider-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavbarComponent,
    CardComponent,
    SidebarComponent,
    FormatPhonePipe,
    ToastNotificationComponent,
    AddProviderDialogComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
