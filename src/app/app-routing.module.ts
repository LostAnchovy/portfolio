import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent} from './projects/projects.component';
import { LandingpageComponent} from './landingpage/landingpage.component';
import { AboutmeComponent} from './aboutme/aboutme.component';
import { IosComponent} from './ios/ios.component';
import { BlogComponent} from './blog/blog.component';
import { CarnivalComponent} from './carnival/carnival.component';
import { TestimonialsComponent} from './testimonials/testimonials.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent, pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/ios', component: IosComponent },
  { path: 'projects/carnival', component: CarnivalComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'testimonials', component: TestimonialsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
