import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Article} from "../models/article";

@Injectable()
export class ArticleService {
  constructor(private http : HttpClient) { }
  baseUrl : string = "http://localhost:3000/articles";

  getArticles() : Observable<Article[]> {
    return this.http.get<Article[]>(this.baseUrl);
  }

  deleteArticle(id:string):Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  addArticle(newArticle : Article): Observable<any> {
    return this.http.post<void>(this.baseUrl, newArticle);
  }

  getArticle(id: string) : Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  filterArticles(searchText : string) : Observable<Article[]> {
    return this.http.get<Article[]>(`${this.baseUrl}/?q=${searchText}`);
  }
}
