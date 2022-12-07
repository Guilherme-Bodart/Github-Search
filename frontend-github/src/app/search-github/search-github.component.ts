import { Component, OnInit } from '@angular/core';
import { GithubProfile, ProfileRepos } from '../models/github';
import { GithubProfilePageComponent } from './github-profile-page/github-profile-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

@Component({
  selector: 'app-search-github',
  templateUrl: './search-github.component.html',
  styleUrls: ['./search-github.component.css'],
})
export class SearchGithubComponent {
  constructor() {}
}
