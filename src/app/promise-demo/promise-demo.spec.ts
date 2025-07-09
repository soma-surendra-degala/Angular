import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseDemo } from './promise-demo';

describe('PromiseDemo', () => {
  let component: PromiseDemo;
  let fixture: ComponentFixture<PromiseDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromiseDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromiseDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
