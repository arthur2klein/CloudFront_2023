import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './template/footer/footer.component';
import { MenuComponent } from './template/menu/menu.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { UsersComponent } from './pages/users/users.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { EvenementsComponent } from './pages/evenements/evenements.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { ErreurComponent } from './pages/erreur/erreur.component';
import { MentionsComponent } from './pages/mentions/mentions.component';
import { RgpdComponent } from './pages/rgpd/rgpd.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';
import { EventsPipe } from './shared/pipes/events.pipe';
import { HeaderComponent } from './template/header/header.component';
import { EvenementComponent } from './pages/evenement/evenement.component';
import { TokenInterceptor } from './shared/securite/token.interceptor';
import { Auth401Interceptor } from './shared/securite/auth401.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    AccueilComponent,
    UsersComponent,
    ProfilComponent,
    EvenementsComponent,
    InscriptionComponent,
    ConnexionComponent,
    ErreurComponent,
    MentionsComponent,
    RgpdComponent,
    ContactComponent,
    ErrorComponent,
    EventsPipe,
    HeaderComponent,
    EvenementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	HttpClientModule,
  ],
  providers: [
	  {
		  provide: HTTP_INTERCEPTORS,
		  useClass: Auth401Interceptor,
		  multi: true
	  },
	  {
		  provide: HTTP_INTERCEPTORS,
		  useClass: TokenInterceptor,
		  multi: true
	  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
