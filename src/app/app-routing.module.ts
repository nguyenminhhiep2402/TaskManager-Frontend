import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthTabsComponent } from './components/auth-tabs/auth-tabs.component';
import { StreamsComponent } from './components/streams/streams.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthTabsComponent
  },
  {
    path: 'streams',
    component: StreamsComponent,
    canActivate:[AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
