import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { CollapseModule } from "ngx-bootstrap/collapse";
import { ToastrModule } from "ngx-toastr";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { MapsComponent } from "./pages/maps/maps.component";
import { NotificationsComponent } from "./pages/notifications/notifications.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth"
import { environment } from "../environments/environment";
import { LessonsManagerComponent } from "./pages/lessons-manager/lessons-manager.component";
import { QuestionsManagerComponent } from "./pages/questions-manager/questions-manager.component";
import { BonusManagerComponent } from "./pages/bonus-manager/bonus-manager.component";
import { UsersManagerComponent } from "./pages/users-manager/users-manager.component";
import { StaffsManagerComponent } from "./pages/staffs-manager/staffs-manager.component";
import { LevelsManagerComponent } from "./pages/levels-manager/levels-manager.component";
import { BonuslessonsManagerComponent } from "./pages/bonuslessons-manager/bonuslessons-manager.component";
import { LessonsListComponent } from "./pages/lessons-manager/lessons-list/lessons-list.component";
import { LessonsAddComponent } from "./pages/lessons-manager/lessons-add/lessons-add.component";
import { LessonsEditComponent } from "./pages/lessons-manager/lessons-edit/lessons-edit.component";
import { QuestionsListComponent } from "./pages/questions-manager/questions-list/questions-list.component";
import { QuestionsAddComponent } from "./pages/questions-manager/questions-add/questions-add.component";
import { QuestionsEditComponent } from "./pages/questions-manager/questions-edit/questions-edit.component";
import { LevelsAddComponent } from "./pages/levels-manager/levels-add/levels-add.component";
import { LevelsListComponent } from "./pages/levels-manager/levels-list/levels-list.component";
import { LevelsUpdateComponent } from "./pages/levels-manager/levels-update/levels-update.component";
import { StaffsListComponent } from './pages/staffs-manager/staffs-list/staffs-list.component';
import { StaffsEditComponent } from './pages/staffs-manager/staffs-edit/staffs-edit.component';
import { StaffsAddComponent } from './pages/staffs-manager/staffs-add/staffs-add.component';
import { UsersListComponent } from './pages/users-manager/users-list/users-list.component';
import { UsersAddComponent } from './pages/users-manager/users-add/users-add.component';
import { UsersEditComponent } from './pages/users-manager/users-edit/users-edit.component';
import { BnlsListComponent } from './pages/bonuslessons-manager/bnls-list/bnls-list.component';
import { BnlsAddComponent } from './pages/bonuslessons-manager/bnls-add/bnls-add.component';
import { BnlsEditComponent } from './pages/bonuslessons-manager/bnls-edit/bnls-edit.component';
import { from } from 'rxjs';
import { SigninComponent } from './components/signin/signin.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './helper/auth.guard';
import { BonusAddComponent } from './pages/bonus-manager/bonus-add/bonus-add.component';
import { BonusEditComponent } from './pages/bonus-manager/bonus-edit/bonus-edit.component';
import { BonusListComponent } from './pages/bonus-manager/bonus-list/bonus-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    MapsComponent,
    NotificationsComponent,
    LessonsManagerComponent,
    QuestionsManagerComponent,
    BonusManagerComponent,
    UsersManagerComponent,
    StaffsManagerComponent,
    LevelsManagerComponent,
    BonuslessonsManagerComponent,
    LessonsListComponent,
    LessonsAddComponent,
    LessonsEditComponent,
    QuestionsListComponent,
    QuestionsAddComponent,
    QuestionsEditComponent,
    LevelsAddComponent,
    LevelsListComponent,
    LevelsUpdateComponent,
    StaffsListComponent,
    StaffsEditComponent,
    StaffsAddComponent,
    UsersListComponent,
    UsersAddComponent,
    UsersEditComponent,
    BnlsListComponent,
    BnlsAddComponent,
    BnlsEditComponent,
    SigninComponent,
    BonusAddComponent,
    BonusEditComponent,
    BonusListComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [
    StaffsAddComponent,
    StaffsEditComponent,
    UsersAddComponent,
    UsersEditComponent,
    BnlsAddComponent,
    BnlsEditComponent,
    LevelsAddComponent,
    LevelsUpdateComponent,
    LessonsAddComponent,
    LessonsEditComponent,
    QuestionsEditComponent,
    QuestionsAddComponent,
  ],
})
export class AppModule {}
