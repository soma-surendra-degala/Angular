import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOneChildOne } from './parent-one-child-one';

describe('ParentOneChildOne', () => {
  let component: ParentOneChildOne;
  let fixture: ComponentFixture<ParentOneChildOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentOneChildOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentOneChildOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
