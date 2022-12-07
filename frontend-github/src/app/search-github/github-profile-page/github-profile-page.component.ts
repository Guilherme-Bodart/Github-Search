import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubProfile, ProfileRepos } from 'src/app/models/github';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-github-profile-page',
  templateUrl: './github-profile-page.component.html',
  styleUrls: ['./github-profile-page.component.css'],
})
export class GithubProfilePageComponent implements OnInit {
  userName = '';
  textError = false;
  userProfile: GithubProfile = new GithubProfile({});
  profileRepos: Array<ProfileRepos> = [];
  limitTimeReq = true;

  constructor(
    private _githubService: GithubService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userName =
      this._activatedRoute.snapshot.queryParamMap.get('username') || '';
    this.searchUserProfile();
  }

  searchUserProfile() {
    if (this.userName && this.limitTimeReq) {
      this._githubService.getGithubProfile(this.userName).subscribe(
        (res) => {
          this.userProfile = new GithubProfile(res as GithubProfile);
          this._githubService
            .getGithubUserRepos(this.userName)
            .subscribe((res) => {
              this.profileRepos = res as Array<ProfileRepos>;
              this.profileRepos.sort((a, b) => {
                return a.stargazers_count > b.stargazers_count
                  ? -1
                  : a.stargazers_count < b.stargazers_count
                  ? 1
                  : 0;
              });
              this.textError = false;
              this.limitTimeReq = false;
              setTimeout(() => {
                this.limitTimeReq = true;
              }, 500);
              this._router.navigate(['/perfil'], {
                queryParams: { username: this.userName },
              });
            });
        },
        (error) => {
          this.textError = true;
        }
      );
    } else if (!this.userName) {
      this._router.navigate(['/home']);
    }
  }

  goToGithubProfile() {
    const url = 'https://github.com/' + this.userName;
    window.location.href = url;
  }

  goToGithubRepo(repo: ProfileRepos) {
    window.location.href = repo.html_url;
  }

  goToTwitterProfile() {
    const url = 'https://twitter.com/' + this.userProfile.twitter_username;
    window.location.href = url;
  }

  goToBlogProfile() {
    window.location.href = this.userProfile.blog;
  }
}
