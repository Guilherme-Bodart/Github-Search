export interface IRest {
    classname: string;

    Deserialize(data: any): any;
}

export class GithubProfile implements IRest {
    classname = 'Github User Profile';

    id!: string;
    login!: string;
    avatar_url!: string;
    url!: string;
    name!: string;
    company!: string;
    blog!: string;
    location!: string;
    email!: string;
    bio!: string;
    twitter_username!: string;
    public_repos!: number;
    followers!: number;
    following!: number;

    constructor(data?: any) {
        if (data) this.Deserialize(data);

    }

    Deserialize(data: any) {
        if (data) {
            this.id = data['id'] || '';
            this.login = data['login'] || '';
            this.avatar_url = data['avatar_url'] || '';
            this.url = data['url'] || '';
            this.name = data['name'] || '';
            this.company = data['company'] || '';
            this.blog = data['blog'] || '';
            this.location = data['location'] || '';
            this.email = data['email'] || '';
            this.bio = data['bio'] || '';
            this.twitter_username = data['twitter_username'] || '';
            this.public_repos = data['public_repos'] || 0;
            this.followers = data['followers'] || 0;
            this.following = data['following'] || 0;
        }
        return this;
    }
}

export class ProfileRepos {
    id!: string;
    name!: string;
    full_name!: string;
    html_url!: string;
    description!: string;
    stargazers_count!: number;
    watchers_count!: number;
    language!: string;
    updated_at!: Date;
    created_at!: Date;

    constructor(id: string, name: string,
        full_name: string, html_url: string,
        description: string, stargazers_count: number,
        watchers_count: number, language: string,
        updated_at: Date, created_at: Date) {

        this.id = id || '';
        this.name = name || '';
        this.full_name = full_name || '';
        this.html_url = html_url || '';
        this.description = description || '';
        this.stargazers_count = stargazers_count || 0;
        this.watchers_count = watchers_count || 0;
        this.language = language || '';
        this.updated_at = updated_at || new Date();
        this.created_at = created_at || new Date();
    }
}