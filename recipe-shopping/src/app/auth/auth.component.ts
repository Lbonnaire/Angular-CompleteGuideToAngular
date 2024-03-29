import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from "@angular/core";
import {  NgForm } from "@angular/forms";
import { AuthResponseData, AuthService } from "./auth.service";
import { Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";

@Component({
    selector:'app-auth',
    templateUrl:'./auth.component.html'
})
export class AuthComponent implements OnDestroy{
    
    isLoginMode=true;
    isLoading=false;
    error:string =null;
    private componentSub:Subscription;
    @ViewChild(PlaceholderDirective, {static:false}) alertHost: PlaceholderDirective;

    constructor(private authService:AuthService,private router:Router,
        private componentFactoryResolver:ComponentFactoryResolver){

    }

    onSwitchMode(){
        this.isLoginMode=!this.isLoginMode;
    }

    onSubmit(form:NgForm){
        if(!form.valid){
            return;
        }
        const email:string = form.value.email;
        const password:string = form.value.password;
        let authObs:Observable<AuthResponseData>;
    
        this.isLoading=true;
        console.log(this.isLoginMode);
        if (this.isLoginMode){
            authObs= this.authService.login(email,password);
        }else{
            authObs=this.authService.signUp(email,password)
        }

        authObs.subscribe(
            respData=>{
                console.log(respData);
                this.isLoading=false;
                this.router.navigate(['./recipes']);
            }, 
            errorMessage=>{
                console.log(errorMessage);
                
                this.error=errorMessage;
                this.showErrorAlert(errorMessage);
                this.isLoading=false;
            }
        );
        
        form.reset();
    }
    onHandleError(){
        this.error=null;
    }
    private showErrorAlert(message:string){
        const alertCmpFactory =this.componentFactoryResolver.resolveComponentFactory(AlertComponent);

        const hostViewContainerRef =this.alertHost.viewContainerRef;
        hostViewContainerRef.clear();

        const componentRef =hostViewContainerRef.createComponent(alertCmpFactory);
        componentRef.instance.message=message;
        this.componentSub =componentRef.instance.close.subscribe(()=>{
            this.componentSub.unsubscribe();
            hostViewContainerRef.clear();
        });
    }

    ngOnDestroy(): void {
        if(this.componentSub){
            this.componentSub.unsubscribe();
        }
    }
}