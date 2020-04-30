import { SigninComponent } from "./components/signin/signin.component";
import { UsersManagerComponent } from "./pages/users-manager/users-manager.component";
import { BonuslessonsManagerComponent } from "./pages/bonuslessons-manager/bonuslessons-manager.component";
import { LevelsManagerComponent } from "./pages/levels-manager/levels-manager.component";
import { QuestionsManagerComponent } from "./pages/questions-manager/questions-manager.component";
import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { MapsComponent } from "./pages/maps/maps.component";
import { NotificationsComponent } from "./pages/notifications/notifications.component";
import { LessonsManagerComponent } from "./pages/lessons-manager/lessons-manager.component";
import { LessonsListComponent } from "./pages/lessons-manager/lessons-list/lessons-list.component";
import { QuestionsListComponent } from "./pages/questions-manager/questions-list/questions-list.component";
import { LevelsListComponent } from "./pages/levels-manager/levels-list/levels-list.component";
import { StaffsManagerComponent } from "./pages/staffs-manager/staffs-manager.component";
import { AuthGuard } from './helper/auth.guard';
const routes: Routes = [
  // { path: "home", component: HomeComponent },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent,},
  { path: "signin", component: SigninComponent },
  
  {
    path: "levels",
    component: LevelsManagerComponent,canActivate: [AuthGuard],
    children: [{ path: "", component: LevelsListComponent }],
  },
  {
    path: "lessons",
    component: LessonsManagerComponent,canActivate: [AuthGuard],
    children: [{ path: "", component: LessonsListComponent }],
  },
  {
    path: "questions",
    component: QuestionsManagerComponent,canActivate: [AuthGuard],
    children: [{ path: "", component: QuestionsListComponent }],
  },
  { path: "staffs", component: StaffsManagerComponent, canActivate: [AuthGuard] },
  { path: "users", component: UsersManagerComponent,canActivate: [AuthGuard] },
  { path: "bonuslessons", component: BonuslessonsManagerComponent,canActivate: [AuthGuard] },
  { path: "maps", component: MapsComponent,canActivate: [AuthGuard] },
  { path: "notifications", component: NotificationsComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
