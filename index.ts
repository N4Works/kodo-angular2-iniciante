/// <reference path="typings/tsd.d.ts" />

// bootstra - responsável por "inicializar" nossos componentes
import {bootstrap} from 'angular2/angular2';

// HelloWorldCmp - nosso componente de hello world
import {HelloWorldCmp} from 'app/hello_world_cmp.js';

// inicialização do componente
bootstrap(HelloWorldCmp);