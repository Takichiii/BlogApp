import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ArticleService} from "../services/article.service";

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {

  articleForm : FormGroup;

  constructor(private fb: FormBuilder, private articleService: ArticleService) {
    this.articleForm = this.fb.group({
      title: ['Fake Title', Validators.required ],
      content : ['Fake Content', Validators.required ],
      authors : ['Fake Author', Validators.required ],
    });
  }

  createArticle() {
    const formModel = this.articleForm.value;
    const newArticle: any = {
      title : formModel.title,
      content : formModel.content,
      authors : formModel.authors
    };
    this.articleService.addArticle(newArticle).subscribe();
  }

  ngOnInit() {
  }
}
