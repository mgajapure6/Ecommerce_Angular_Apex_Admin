import { Component, ViewChild, Inject, OnInit } from '@angular/core';
import { NgForm,NgModel } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {RestWebServiceUrlService} from '../../../rest-web-service-url.service';
import {WsReponse} from '../../../shared/models/wsResponse';
import {UserData} from '../../../shared/models/userData';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],

})

export class LoginPageComponent implements OnInit {


    public sessionUserData:UserData;

    //@ViewChild('loginForm') loginForm: NgForm;

    constructor(private router : Router,
        private route : ActivatedRoute,
        private restWebServiceUrlService : RestWebServiceUrlService,
        private httpClient: HttpClient,
    ) {}

    ngOnInit() {
        this.sessionUserData = JSON.parse(localStorage.getItem("userData")) as UserData;
        if(this.sessionUserData!=null){
            this.router.navigateByUrl('/dashboard/dashboard1');
        }
    }

    // On submit button click    
    onSubmit(loginForm: NgForm) {
        console.log(loginForm.value);
        console.log("login ok");
        let url = this.restWebServiceUrlService.getLoginUrl();//'http://192.168.43.188:7070/ecom_api/user_api/userLogin';
        let httpHeader = new HttpHeaders();
        httpHeader.append("Content-Type","application/json");
        this.httpClient.post<WsReponse>(url,loginForm.value,{headers : httpHeader}).subscribe(
            data => {
                console.log("status code :"+data.statusCode);
                if(data.statusCode == 200){
                    let userData = data.object as UserData;
                    console.log("User Email :"+userData.userEmail);
                    localStorage.setItem("userData", JSON.stringify(userData));
                    $('#msgDiv').attr('style','color:white;').html("Success");
                }else{
                    $('#msgDiv').attr('style','color:Red;').html("Invalid Username Or Password");
                }
                $('#msgDiv').fadeOut('slow').delay(3000).hide(4000);
                //setTimeout($('#msgDiv').hide,3000);
                //return true;
            },
            error => {
                console.log(error);
                console.error("Error getting userData!");
                //return false;
            }
        );
        loginForm.reset();
    }
    // On Forgot password link click
    onForgotPassword() {
        this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
    }
    // On registration link click
    onRegister() {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    }

}