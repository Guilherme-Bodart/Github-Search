import { Component } from '@angular/core';
import { GithubProfile, ProfileRepos } from 'src/app/models/github';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {

  userName = '';

  userProfile: GithubProfile = new GithubProfile({});
  profileRepos: Array<ProfileRepos> = [];

  constructor(private _githubService: GithubService) { }


  searchUserProfile() {
    this._githubService.getGithubProfile(this.userName).subscribe((res) => {
      this.userProfile = new GithubProfile(res as GithubProfile);
    })

    this._githubService.getGithubUserRepos(this.userName).subscribe((res) => {
      this.profileRepos = res as Array<ProfileRepos>;
    })
  }
}
