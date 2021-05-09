import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// import firebase module
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlayerService } from './players/player.service';
import { SliderComponent } from './home/slider/slider.component';
import { AboutComponent } from './home/about/about.component';
import { PlayersComponent } from './players/players.component';
import { CoachesComponent } from './coaches/coaches.component';
import { CoachDetailsComponent } from './coaches/coach-details/coach-details.component';
import { CoachesListComponent } from './coaches/coaches-list/coaches-list.component';
import { PlayerDetailsComponent } from './players/player-details/player-details.component';
import { PlayerItemComponent } from './players/players-list/player-item/player-item.component';
import { PlayersListComponent } from './players/players-list/players-list.component';
import { CoachItemComponent } from './coaches/coaches-list/coach-item/coach-item.component';
import { SupportComponent } from './support/support.component';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './home/header/header.component';
import { TeamComponent } from './team/team.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    HomeComponent,
    CoachesComponent,
    CoachDetailsComponent,
    CoachesListComponent,
    PlayerDetailsComponent,
    PlayerItemComponent,
    PlayersListComponent,
    CoachItemComponent,
    SupportComponent,
    AboutComponent,
    SliderComponent,
    HeaderComponent,
    TeamComponent,
    LoginComponent,
    RegistrationComponent,
    AuthComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    LayoutModule,
    SidebarModule,
    ButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
