import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {AbstractComponent} from '../abstract-coming-soon.component';

@Component({
    selector: 'page-coming-soon-company',
    templateUrl: './page_coming_soon.html'
})
export class PageComingCompanySoon extends AbstractComponent{

    constructor(private router: Router) { 
        super();
    }

    becomeTraveller() {
        this.router.navigateByUrl("");
    }

    register() {
        this.errorMsg = null;
        this.loading = true;
        try {

            
            let obj = {
                name: this.companyName,
                email: this.companyEmail,
                country: this.companyCountry,
                sector: this.companySector
            }
            console.log(obj);
            
            this.validateFields();
            console.log("Registering");

            this.loading = false;
            this.registered = true;

        } catch (err) {
            this.errorMsg = err.message;
            this.loading = false;
        }
    }

    showRegisterConfirmation() {
        console.log("Registered!");
    }

    validateFields() {
        if (this.companyName == "" || this.companyName == null || this.companyName.length == 0)
            throw Error("Company name cannot be empty");

        if (this.companyEmail == "" || this.companyEmail == null)
            throw Error("Company emai canot be empty");
        if (!this.validEmail(this.companyEmail))
            throw Error("Enter a valid e-mail");

        if (this.companyCountry == "")
            throw Error("Select your company's country");

        if (this.companySector == "")
            throw Error("Select your company's sector");
    }

    companyName = null;
    companyEmail = null;
    companyCountry = "";
    companySector = "";

    sectors: Array<Object> = [
        { name: "Hostel / Hotel", icon: "" },
        { name: "Food & Drinks", icon: "" },
        { name: "Store", icon: ""},
        { name: "Events", icon: "" },
        { name: "Night life", icon: "" },
        { name: "Other", icon: ""}
    ]

    

}