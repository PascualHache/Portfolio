import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';

const  routes:  Routes  = [
  {
    path:  'Projects',
    component:  ProjectsComponent
    },
  {
  path:  'Education',
  component:  EducationComponent
  },
  {
  path:  'Experience',
  component:  ExperienceComponent
  },
  {
  path:  'Contact',
  component:  ContactComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
