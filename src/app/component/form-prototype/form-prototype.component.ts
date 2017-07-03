import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-form-prototype',
    templateUrl: './form-prototype.component.html',
    styleUrls: ['./form-prototype.component.css']
})
export class FormPrototypeComponent implements OnInit {
    animals: string[] = [
        "dog",
        "cat",
        "bird",
        "monkey"
    ];
    selectedAnimal = "";

    constructor() { }

    ngOnInit() {
    }

}
