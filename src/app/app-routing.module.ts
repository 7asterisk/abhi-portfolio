import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  {path: '', redirectTo: 'about',pathMatch: 'full' },
  { path: 'about', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ExperienceComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
