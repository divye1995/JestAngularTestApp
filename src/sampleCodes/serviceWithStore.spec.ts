import { HttpClientModule, HttpRequest } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

const initialState = {};


describe('Service:StoreService', () => {
  let backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule, RouterTestingModule],
      providers: [
        provideMockStore({ initialState }),
      ],
      schemas:[NO_ERRORS_SCHEMA]
    });
    backend = TestBed.get(HttpTestingController);
  });

  afterEach(inject(
    [HttpTestingController],
    (_backend: HttpTestingController) => {
      _backend.verify();
    }
  ));

});
