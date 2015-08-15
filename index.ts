/// <reference path="typings/tsd.d.ts" />

// bootstra - responsavel por "inicializar" nossos componentes
import {bootstrap} from 'angular2/angular2';

// HelloWorldCmp - nosso componente de hello world
import {HelloWorldCmp} from 'app/hello_world_cmp.js';

// inicializacao do componente
bootstrap(HelloWorldCmp);
