import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AppComponent } from 'src/app/app.component';
import { RouterModule } from 'src/app/router/router.module';
import { WishService } from './services/wish.service';
import { MessageModule } from './components/message/message.module';
import { MessageService } from './services/message.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    MessageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [WishService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
