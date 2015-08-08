/// <reference path="../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'hello-world'
})
@View({
    template: `
        <h1>Hello world!</h1>
    `
})

export class HelloWorldCmp {
    constructor() {
        console.log('olá mundo');
    }
}