import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCarListComponent } from './page-car-list.component';

describe('PageCarListComponent', () => {
  let component: PageCarListComponent;
  let fixture: ComponentFixture<PageCarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCarListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
