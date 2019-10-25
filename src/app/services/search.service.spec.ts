import { TestBed, inject } from '@angular/core/testing';

import { SearchService } from './search.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ItemsModel } from 'src/app/models/items.model';
import { ItemModel } from '../models/item.mode';
import { environment } from 'src/environments/environment';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

describe('SearchService', () => {
  let service: SearchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule,
      platformBrowserDynamicTesting());

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService]
    });
    service = TestBed.get(SearchService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('Should get items', () => {

    const dummyData: ItemsModel = {
      author: {
        name: '',
        lastname: ''
      },
      categories: ['Electronica', 'TV'],
      items: []
    };
    let dataItem: ItemModel = {
      id: 'MLA818030116',
      title: 'TV',
      address: 'Capital',
      picture: 'http://mla-s2-p.mlstatic.com/749705-MLA31522556603_072019-O.jpg',
      free_shipping: true,
      condition: 'new',
      sold_quantity: 0,
      description: '',
      price: {
        currency: 'ARS',
        amount: 12900,
        decimals: 0
      }
    };

    dummyData.items.push(dataItem);

    service.getItems('televisor').subscribe(resp => {
      console.log(resp);
      // expect(resp.categories).toBeGreaterThan(0);
      expect(resp).toEqual(jasmine.objectContaining(dummyData));
    });


    const request = httpMock.expectOne(`${environment.api_base}${environment.services_search_items}?query=televisor`);

    expect(request.request.method).toBe('GET');

    request.flush(jasmine.objectContaining(dummyData));
  });


});
