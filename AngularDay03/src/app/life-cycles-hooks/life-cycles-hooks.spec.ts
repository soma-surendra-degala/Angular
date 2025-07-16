import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCyclesHooks } from './life-cycles-hooks';

describe('LifeCyclesHooks', () => {
  let component: LifeCyclesHooks;
  let fixture: ComponentFixture<LifeCyclesHooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeCyclesHooks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeCyclesHooks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
