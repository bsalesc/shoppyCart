import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { HeaderComponent } from 'src/app/features/header/header.component';
import { FooterComponent } from 'src/app/features/footer/footer.component';
import { AppComponent } from 'src/app/app.component';
import { RouterModule } from 'src/app/router/router.module';
import { WishService } from './services/wish.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAobgCwkY8-yiFsYRfKzLqKQgZsw5Lgo3M',
      authDomain: 'shopping-list-5666c.firebaseapp.com',
      databaseURL: 'https://shopping-list-5666c.firebaseio.com',
      projectId: 'shopping-list-5666c',
      storageBucket: 'shopping-list-5666c.appspot.com',
      messagingSenderId: '679304626110'
    }),
    AngularFireDatabaseModule
  ],
  providers: [WishService],
  bootstrap: [AppComponent]
})
export class AppModule {}
