import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserSiteComponent } from './update-user-site.component';

describe('UpdateUserSiteComponent', () => {
  let component: UpdateUserSiteComponent;
  let fixture: ComponentFixture<UpdateUserSiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateUserSiteComponent]
    });
    fixture = TestBed.createComponent(UpdateUserSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
