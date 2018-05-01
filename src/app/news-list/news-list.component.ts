import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { GetnewsService } from '../getnews.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newsListService: GetnewsService;
  news: any;

  constructor(newsListService: GetnewsService) { 
    this.newsListService = newsListService;
  }

  ngOnInit() {
    this.showNews();
  }

  showNews(): void {
    this.newsListService.getNews()
      .subscribe(
        data => this.news = data,
        error => this.news = error)
  }

}
