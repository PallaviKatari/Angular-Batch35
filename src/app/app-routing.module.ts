import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//ANGULAR BASICS
import { HomeComponent } from './home/home.component';

//BINDING AND CUSTOM DIRECTIVE
import { CourseComponent } from './course/course.component';

//CONDITIONAL RENDERING AND COMPONENT REUSABILITY
import { CareerComponent } from './career/career.component';

//PARENT-CHILD/CHILD-PARENT COMMUNICATION
import { TutoriallistComponent } from './tutoriallist/tutoriallist.component';

//TEMPLATE DRIVEN FORMS
import { SignupComponent } from './signup/signup.component';

//REACTIVE FORMS
import { SigninComponent } from './signin/signin.component';

//ROUTE PARAMETERS
import { CoursedetailComponent } from './coursedetail/coursedetail.component';

//QUERY PARAMETERS/STRINGS
import { CourselistComponent } from './courselist/courselist.component';

//CHILD ROUTES/NESTED ROUTING
import { CurrenttrainingComponent } from './currenttraining/currenttraining.component';
import { AngularComponent } from './currenttraining/angular/angular.component';
import { ReactComponent } from './currenttraining/react/react.component';
import { VueComponent } from './currenttraining/vue/vue.component';
import { UpcomingtrainingComponent } from './upcomingtraining/upcomingtraining.component';
import { DotnetComponent } from './upcomingtraining/dotnet/dotnet.component';
import { OpensourceComponent } from './upcomingtraining/opensource/opensource.component';
import { ReactjsComponent } from './currenttraining/react/reactjs/reactjs.component';
import { ReactnativeComponent } from './currenttraining/react/reactnative/reactnative.component';
//PRODUCTS COMPONENT
import { ViewProductComponent } from './products/view-product/view-product.component';
import { ProductsComponent } from './products/products.component';
//Observable
import { TraineedetailsComponent } from './traineedetails/traineedetails.component';
//Addtocart
import { CoursecartitemComponent } from './coursecartitem/coursecartitem.component';
//Lazy Loading

const routes: Routes = [
  //Lazy Loading ( first 2 )
  { path: 'a', loadChildren: () => import('./modulea/modulea.module').then(m => m.ModuleaModule) },
  { path: 'b', loadChildren: () => import('./moduleb/moduleb.module').then(m => m.ModulebModule) },
  { path: '', component: HomeComponent },
  { path: 'career', component: CareerComponent },
  { path: 'course', component: CourseComponent },
  { path: 'coursedetail/:id', component: CoursedetailComponent },
  { path: 'courselist', component: CourselistComponent },
  { path: 'tutorial', component: TutoriallistComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  //PRODUCTS COMPONENT
  {path:'products',component:ProductsComponent},
  {path:"viewProduct/:id",component:ViewProductComponent},
  //OBSERVABLES
  {path:'trainees',component:TraineedetailsComponent},
  //Add to Cart
  {path:'cartitem',component:CoursecartitemComponent},
  //CHILD ROUTES/NESTED ROUTING
  {
    path: 'current',component:CurrenttrainingComponent, 
    children: [
      {path: 'angular', component: AngularComponent},
      {path: 'react', component: ReactComponent,
    children:[
      {path: 'reactjs', component: ReactjsComponent},
      {path: 'reactnative', component: ReactnativeComponent}
    ]},
      {path: 'vue', component: VueComponent}
    ]  
  },
  {
    path: 'upcoming', 
    children: [
      {path: '', component: UpcomingtrainingComponent},
      {path: 'dotnet', component: DotnetComponent},
      {path: 'open', component: OpensourceComponent}
    ]  
  },
  { path: 'a', loadChildren: () => import('./modulea/modulea.module').then(m => m.ModuleaModule) },
  { path: 'b', loadChildren: () => import('./moduleb/moduleb.module').then(m => m.ModulebModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
