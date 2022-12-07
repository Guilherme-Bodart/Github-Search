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
  userName = 'Guilherme-Bodart';
  textError = false;
  userProfile: GithubProfile = new GithubProfile({});
  profileRepos: Array<ProfileRepos> = [];
  limitTime = true;

  constructor(
    private _githubService: GithubService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.userName =
    //   this._activatedRoute.snapshot.queryParamMap.get('username') || '';
    // this.searchUserProfile();
  }

  searchUserProfile() {
    if (this.userName && this.limitTime) {
      this._githubService.getGithubProfile(this.userName).subscribe(
        (res) => {
          this.userProfile = new GithubProfile(res as GithubProfile);
          console.log(this.userProfile);

          this._githubService
            .getGithubUserRepos(this.userName)
            .subscribe((res) => {
              this.profileRepos = res as Array<ProfileRepos>;
              this.textError = false;
              this.limitTime = false;
              setTimeout(() => {
                this.limitTime = true;
              }, 4000);
              this._router.navigate(['/perfil'], {
                queryParams: { username: this.userName },
              });
            });
        },
        (error) => {
          this.textError = true;
        }
      );
    }
  }

  goToGithubProfile(){
    const url = 'https://github.com/' + this.userName;
    window.location.href = url;
  }
}
