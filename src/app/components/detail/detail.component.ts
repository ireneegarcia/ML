import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { ActivatedRoute } from '@angular/router';
import { ItemsModel } from 'src/app/models/items.model';
import { ItemModel } from 'src/app/models/item.mode';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  listCategories: string[];
  listItems: ItemModel[];

  constructor(private searchService: SearchService, private route: ActivatedRoute) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.searchService.getItem(id)
      .subscribe((resp: ItemsModel) => {
        this.listCategories = resp.categories;
        this.listItems = resp.items;
      });
  }

}
