import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchGithubComponent } from './search-github.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { GithubProfilePageComponent } from './github-profile-page/github-profile-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext'
import { ButtonModule } from 'primeng/button'

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
    RouterModule.forChild(routeConfig),
    FormsModule,
    InputTextModule,
    ButtonModule,
  ]
})
export class SearchGithubModule { }
