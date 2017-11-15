import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AbstractComponent} from '../abstract-coming-soon.component';

@Component({
    selector: 'page-coming-soon-traveller',
    templateUrl: './page_coming_soon.html'
})
export class PageComingTravellerSoon extends AbstractComponent{

    traveller = {
        name: null,
        email: null,
        country: ""    
    }


    constructor(private router:Router){
        super();
    }

    becomePartner(){
        this.router.navigateByUrl("/business");
    }

    register(){

        this.errorMsg = null;

        try{

            console.log("Registering")
            console.log(this.traveller);

            this.validateFields();
            this.loading = false;
            this.registered = true;

        }catch(err){
            this.errorMsg = err.message;
            this.loading = false;
        }

    }

    reset(){
        this.traveller.name = null;
        this.traveller.email = null;
        this.traveller.country = "";
    }

    validateFields(){
        if(this.traveller.name == null || this.traveller.name == "" || this.traveller.name.length == 0)
            throw Error("Your name cannot be empty");
        if(this.traveller.email == null)
            throw Error("Your e-mail cannot be empty");
        if(!this.validEmail(this.traveller.email))
            throw Error("Enter a valid e-mail");
        if(this.traveller.country == "")
            throw Error("Select your country");
    }

}