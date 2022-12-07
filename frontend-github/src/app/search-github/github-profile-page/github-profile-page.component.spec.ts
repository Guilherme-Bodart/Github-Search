import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubProfilePageComponent } from './github-profile-page.component';

describe('GithubProfilePageComponent', () => {
  let component: GithubProfilePageComponent;
  let fixture: ComponentFixture<GithubProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GithubProfilePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GithubProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
