import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelgeneralContentComponent } from './panelgeneral-content.component';

describe('PanelgeneralContentComponent', () => {
  let component: PanelgeneralContentComponent;
  let fixture: ComponentFixture<PanelgeneralContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelgeneralContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelgeneralContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
