import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(
    private _http: HttpClient
  ) { }

  getGithubProfile(userName: string) {
    let url = `https://api.github.com/users/${userName}`
    return this._http.get(url);
  }

  getGithubUserRepos(userName: string) {
    let url = `https://api.github.com/users/${userName}/repos`
    return this._http.get(url);
  }
}
