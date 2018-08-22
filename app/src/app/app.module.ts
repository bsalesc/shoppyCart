import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AppComponent } from 'src/app/app.component';
import { RouterModule } from 'src/app/router/router.module';
import { WishService } from './services/wish.service';
import { MessageService } from './services/message.service';
import { environment } from '../environments/environment';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [WishService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
