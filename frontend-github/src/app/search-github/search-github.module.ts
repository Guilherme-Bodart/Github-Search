import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { GithubProfilePageComponent } from './github-profile-page/github-profile-page.component';
import { SearchGithubComponent } from './search-github.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routeConfig: Routes = [
  {
    path: 'home',
    component: SearchPageComponent,
  },
  {
    path: 'perfil',
    component: GithubProfilePageComponent,
  },
];

@NgModule({
  declarations: [
    SearchGithubComponent,
    SearchPageComponent,
    GithubProfilePageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routeConfig),
    FormsModule,
    InputTextModule,
    ButtonModule,
  ],
})
export class SearchGithubModule {}
