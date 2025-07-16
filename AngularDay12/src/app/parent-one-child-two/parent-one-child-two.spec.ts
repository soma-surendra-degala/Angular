import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOneChildTwo } from './parent-one-child-two';

describe('ParentOneChildTwo', () => {
  let component: ParentOneChildTwo;
  let fixture: ComponentFixture<ParentOneChildTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentOneChildTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentOneChildTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
