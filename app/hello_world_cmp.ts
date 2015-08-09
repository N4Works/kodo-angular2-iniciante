/// <reference path="../typings/tsd.d.ts" />

// Componente - responsável por amarrar as dependências de regra de negócio que ficarão em cada componente
// View - responsável pela parte visual do componente
import {Component, View} from 'angular2/angular2';

// Inicialização do componente - dando o nome do mesmo de 'hello-world'
@Component({
    selector: 'hello-world'
})

// Inicialização da View - dando um template à mesma
@View({
    template: `
        <h1>Hello world!</h1>
    `
})

// Exportação da classe HelloWorldCmp
export class HelloWorldCmp {
    constructor() {
        console.log('olá mundo');
    }
}