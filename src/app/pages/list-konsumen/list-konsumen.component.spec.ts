import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKonsumenComponent } from './list-konsumen.component';

describe('ListKonsumenComponent', () => {
  let component: ListKonsumenComponent;
  let fixture: ComponentFixture<ListKonsumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListKonsumenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListKonsumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
