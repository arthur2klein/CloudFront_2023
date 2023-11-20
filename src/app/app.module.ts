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
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

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
		provideFirebaseApp(
			() => initializeApp(
				{
					"projectId":"gestionnairesoiree",
					"appId":"1:500118593188:web:a9eed62f212438081f9031",
					"storageBucket":"gestionnairesoiree.appspot.com",
					"apiKey":"AIzaSyCHcgfmj6tPKkck2gEG9JUuQoSxj8PMCHQ",
					"authDomain":"gestionnairesoiree.firebaseapp.com",
					"messagingSenderId":"500118593188"
				}
			)
		),
		provideAuth(() => getAuth()),
		provideFirestore(() => getFirestore()),
		provideDatabase(() => getDatabase()),
		provideStorage(() => getStorage()),
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
