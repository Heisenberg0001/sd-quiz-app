import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { APIService } from "../services/api.service";

@Injectable({
  providedIn: 'root'
})
export class QuizGuard implements CanActivate{
  constructor(private _apiService: APIService) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{

    return !!this._apiService.getQuizQuestions().getValue();
  }
}
