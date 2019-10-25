import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemsModel } from '../models/items.model';
import { ItemModel } from '../models/item.mode';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public urlBase = environment.api_base;
  constructor(private http: HttpClient) { }

  getItem(id: string): Observable<ItemsModel>  {
    const url = `${this.urlBase}${environment.services_search_item}/${id}`;
    return this.http.get<ItemsModel>(url);

  }

  getItems(query: string): Observable<ItemsModel> {
    const url = `${this.urlBase}${environment.services_search_items}?query=${query}`;
    return this.http.get<ItemsModel>(url);

  }
}
