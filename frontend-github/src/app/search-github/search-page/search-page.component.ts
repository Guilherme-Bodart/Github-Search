import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GithubProfile, ProfileRepos } from 'src/app/models/github';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent {
  userName = '';
  textError = false;
  userProfile: GithubProfile = new GithubProfile({});
  profileRepos: Array<ProfileRepos> = [];

  constructor(private _githubService: GithubService, private _router: Router) {}

  searchUserProfile() {
    if (this.userName) {
      this._githubService.getGithubProfile(this.userName).subscribe(
        (res) => {
          this._router.navigate(['/perfil'], {
            queryParams: { username: this.userName },
          });
        },
        (error) => {
          this.textError = true;
        }
      );
    }
  }
}
