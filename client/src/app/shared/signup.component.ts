import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  error: boolean = false;
  errorMessage: String = "Something went wrong with App";
  dataLoading: boolean = false;
  private querySubscription;
  savedChanges: boolean = false;

  constructor(private _backendService: BackendService, private _route: Router) { }

  ngOnInit() {
  }
  setUser(formData) {
    this.dataLoading = true;
    //observable metheod has 3 parameters res, error, after success
    this.querySubscription = this._backendService.setUser(formData).subscribe((res) => {
      if (res["errorCode"] > 0) {
          this.error = false;
          this.errorMessage = "";
          this.dataLoading = false;
          this.savedChanges = true;
      } else {
          this.error = true;
          this.errorMessage = res["errorMessage"];
          this.dataLoading = false;
      }
  },
      (error) => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
      },
      () => {
          this.dataLoading = false;
      });
}

  ngOnDestroy() {
    //removed observable 
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
  }
}
}
