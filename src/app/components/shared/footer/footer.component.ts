import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { AuthorModel } from '../../../models/author.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  author: string;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.getAuthor()
        .subscribe((resp: AuthorModel) => {
          this.author = `${resp.author.name} ${resp.author.lastname}`;
          console.log(resp);
        });
  }

}
