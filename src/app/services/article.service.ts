import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class ArticleService {
  constructor(private http : HttpClient) { }
  baseUrl : string = "http://localhost:3000/articles";

  getArticles() : Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  deleteArticle(id:string):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  addArticle(newArticle : any): Observable<any> {
    return this.http.post<any>(this.baseUrl, newArticle);
  }

  getArticle(id: string) : Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
}
