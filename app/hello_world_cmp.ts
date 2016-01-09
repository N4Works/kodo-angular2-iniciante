// Componente - responsável por amarrar as dependências de regra de negócio que ficarão em cada componente
import {Component} from 'angular2/core';

// Inicialização do componente - dando o nome do mesmo de 'hello-world'
@Component({
    selector: 'hello-world',
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
