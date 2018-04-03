import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { FilterPipe } from './filter.pipe';
import { ProfileComponent } from './profile/profile.component';
import { AppService } from './app.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    CardComponent,
    FilterPipe,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
