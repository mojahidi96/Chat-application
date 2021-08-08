import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material/material.module';

import { ChatComponent } from './chat.component';
import { SocketService } from './shared/services/socket.service';
import { DialogUserComponent } from './dialog-user/dialog-user.component';
import { StoreUserService } from './shared/services/store-user.service';
import { MapComponent } from '../map/map.component';
import { AgmCoreModule } from '@agm/core';

// Import your AvatarModule
import { AvatarModule } from 'ngx-avatar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AvatarModule,
    AgmCoreModule.forRoot({
      apiKey: 'API_KEY'
    })
  ],
  declarations: [ChatComponent, DialogUserComponent, MapComponent],
  providers: [SocketService, StoreUserService],
  entryComponents: [DialogUserComponent]
})
export class ChatModule { }
