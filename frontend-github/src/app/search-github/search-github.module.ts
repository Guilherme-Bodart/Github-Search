import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchGithubComponent } from './search-github.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { GithubProfilePageComponent } from './github-profile-page/github-profile-page.component';
import { RouterModule, Routes } from '@angular/router';

const routeConfig: Routes = [
  {
    path: 'home',
    component: SearchPageComponent,
  },
  {
    path: 'perfil',
    component: GithubProfilePageComponent,
  },
]

@NgModule({
  declarations: [
    SearchGithubComponent,
    SearchPageComponent,
    GithubProfilePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routeConfig)
  ]
})
export class SearchGithubModule { }
