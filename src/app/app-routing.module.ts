import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { CareerComponent } from './career/career.component';
import { TutoriallistComponent } from './tutoriallist/tutoriallist.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'career', component: CareerComponent },
  { path: 'course', component: CourseComponent },
  { path: 'tutorial', component: TutoriallistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
