import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from "../services/article.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  constructor(private articleService: ArticleService) {}
  articles: any[];
  @Input()
  id: string;
  @Input()
  searchText: string;

  loadArticles() {
    this.articleService.getArticles().subscribe(value => {
      this.articles = value;
    });
  }

  deleteArticle(id: string) {
    this.articleService.deleteArticle(id).subscribe(() => {
      this.articles.forEach((article, index) => {
        {
          if (article.id === id)
          {
            this.articles.splice(index, 1);
          }
        }
      });
    });
  }

  ngOnInit() {
    this.loadArticles();
  }

  onSearchChange(searchText : string) {
    this.articleService.filterArticles(searchText.replace(/ /g,"%20")).subscribe(value => {
      this.articles = value;
    });
  }
}
