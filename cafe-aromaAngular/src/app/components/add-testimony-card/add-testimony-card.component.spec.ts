import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestimonyCardComponent } from './add-testimony-card.component';

describe('AddTestimonyCardComponent', () => {
  let component: AddTestimonyCardComponent;
  let fixture: ComponentFixture<AddTestimonyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTestimonyCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTestimonyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
