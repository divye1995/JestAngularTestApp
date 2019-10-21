import { TestBed, inject } from '@angular/core/testing';

import { ListingService } from './listing-service.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule, HttpRequest } from '@angular/common/http';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { outputArray } from './mocks';


describe('ListingServiceService', () => {
  let service: ListingService;
  let backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [
        ListingService
      ],
      schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
    });
    backend = TestBed.get(HttpTestingController);
    service = TestBed.get(ListingService);
  });

  afterEach(inject(
    [HttpTestingController],
    (_backend: HttpTestingController) => {
      _backend.verify();
    }
  ));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  const url = 'http://example.com/users';
  test('should fetch a list of users',done=>{
    service.getList()
    .subscribe(data=>{
      expect(data).toEqual(outputArray)
      done()
    })
    backend.expectOne((req: HttpRequest<any>) => {
        return req.url === url && req.method === 'GET';
      }, `GET all list data from ${url}`)
      .flush(outputArray);
  })
});
