import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelgeneralComponent } from './panelgeneral.component';

describe('PanelgeneralComponent', () => {
  let component: PanelgeneralComponent;
  let fixture: ComponentFixture<PanelgeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelgeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelgeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
