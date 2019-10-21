import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { getByTestId } from '@testing-library/dom'
 
import { ListRowComponentComponent } from './list-row-component.component';
import { DebugElement } from '@angular/core';
import { simulateClick } from '../testing/event.helper';


describe('ListRowComponentComponent', () => {
  let component: ListRowComponentComponent;
  let fixture: ComponentFixture<ListRowComponentComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRowComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRowComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the component with blue color class',()=>{
    component.firstName = 'James'
    component.lastName = 'Bond'
    component.gender = 'male'
    fixture.detectChanges()

    expect(fixture).toMatchSnapshot();
  })
  it('should render the component with green color class',()=>{
    component.firstName = 'James'
    component.lastName = 'Bond'
    component.gender = 'female'
    fixture.detectChanges()

    expect(fixture).toMatchSnapshot();
  })

  it('should emit events onClick',done=>{
    let buttonClicked = false
    component.rowClick.subscribe(()=>{
      buttonClicked =true;
      expect(buttonClicked).toBeTruthy()
      done();
    })
    var btn = getByTestId(fixture.nativeElement,'row-click');
    simulateClick(btn);
  })
});
