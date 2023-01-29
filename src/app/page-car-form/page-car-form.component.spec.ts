import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCarFormComponent } from './page-car-form.component';

describe('PageCarFormComponent', () => {
  let component: PageCarFormComponent;
  let fixture: ComponentFixture<PageCarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCarFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
