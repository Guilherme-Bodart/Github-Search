import { Component } from '@angular/core';
import { GithubProfile, ProfileRepos } from 'src/app/models/github';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-github-profile-page',
  templateUrl: './github-profile-page.component.html',
  styleUrls: ['./github-profile-page.component.css']
})
export class GithubProfilePageComponent {
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
