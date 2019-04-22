import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ArticleService} from "../services/article.service";
import {Article} from "../models/article";


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input()
  article : Article;

  constructor(private articleService: ArticleService, private route: ActivatedRoute){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id !=null) {
        this.articleService.getArticle(params.id).subscribe(article => {
          this.article = article;
        });
      }
    })
  }


}
