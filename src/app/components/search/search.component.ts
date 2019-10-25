import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { ActivatedRoute } from '@angular/router';
import { ItemsModel } from 'src/app/models/items.model';
import { ItemModel } from 'src/app/models/item.mode';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query: string;
  listItems: ItemModel[];
  listCategories: string[];

  constructor(private searchService: SearchService, private route: ActivatedRoute) { }


  ngOnInit() {

    // const query = this.route.snapshot.paramMap.search;
    // console.log(query)

    this.route.queryParams.subscribe(params => {
      this.query = params['search'];
      console.log(this.query);

      this.searchService.getItems(this.query)
        .subscribe((resp: ItemsModel) => {
          this.listItems = resp.items;
          this.listCategories = resp.categories;
          console.log(resp);
        });
    });

  }

}
