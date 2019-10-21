import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { queryByTestId, getByTestId } from '@testing-library/dom';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { AppComponent } from './app.component';
import { ListingService } from './listing-service.service';
import { outputArray } from './mocks';
import { By } from '@angular/platform-browser';
import { ListRowComponentComponent } from './list-row-component/list-row-component.component';

class MockListService{
  getList(){
  }
}

describe('AppComponent', () => {
  let fixture : ComponentFixture<AppComponent>;
  let service : ListingService;
  let component : AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers:[
        {provide:ListingService,useClass:MockListService}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));
  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.debugElement.componentInstance;
    service = fixture.componentRef.injector.get(ListingService);
    fixture.detectChanges()
  })

  it('should create the app', () => {
   
    expect(component).toBeTruthy();
  });


  it('should render title in a h1 tag',() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(queryByTestId(compiled,'app-title')).not.toBeNull();
    expect(queryByTestId(compiled,'app-title').textContent).toEqual(component.title)
  });

  test('should fetch the user list from the listing service',async(()=>{
    const spy = jest.spyOn(service,'getList');
    var expectedObservable = cold('-a',{a:outputArray})
    spy.mockReturnValue(expectedObservable)
    component.ngOnInit()
    fixture.detectChanges()
    expect(spy).toHaveBeenCalled();
    expect(component.list$).toBeObservable(expectedObservable)
    getTestScheduler().flush()
    fixture.detectChanges()
    component.list$.subscribe((o)=>{
      fixture.detectChanges()
      var list = fixture.nativeElement.querySelectorAll('app-list-row-component')
      expect(list.length).toEqual(outputArray.length)
    })
    spy.mockRestore()
  }))

  test('should call onClicked when app-list-row-component is clicked',()=>{
    const spy = jest.spyOn(service,'getList');
    var expectedObservable = cold('a',{a:outputArray})
    spy.mockReturnValue(expectedObservable)
    component.initListService()
    getTestScheduler().flush()
    var onClicked = spyOn(component,'onClicked').and.callThrough();
    component.list$.subscribe((o)=>{
      fixture.detectChanges()
      var row0 = fixture.debugElement.query((el)=>{
        return el.properties['data-testid'] === 'row0'
      }).componentInstance as ListRowComponentComponent
      row0.rowClick.emit();
      expect(onClicked).toHaveBeenCalledWith(outputArray[0])
    })
  

  })


  // 
});
