import { Component } from '@angular/core';
import { GithubProfile, ProfileRepos } from '../models/github';
import { GithubProfilePageComponent } from './github-profile-page/github-profile-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

@Component({
  selector: 'app-search-github',
  templateUrl: './search-github.component.html',
  styleUrls: ['./search-github.component.css']
})

export class SearchGithubComponent {

  userName = '';
  userProfile: GithubProfile = new GithubProfile({});
  profileRepos: Array<ProfileRepos> = [];

  constructor() { }

  outletLoaded(component: any): void {
    if (component instanceof SearchPageComponent) {
      this.userProfile = component.userProfile;
      this.profileRepos = component.profileRepos;
      
    } else if (component instanceof GithubProfilePageComponent) {
      component.userProfile = this.userProfile;
      component.profileRepos = this.profileRepos;
    }
  }
}
