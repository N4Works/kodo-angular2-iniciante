/// <reference path="typings/tsd.d.ts" />

// bootstra - respons�vel por "inicializar" nossos componentes
import {bootstrap} from 'angular2/angular2';

// HelloWorldCmp - nosso componente de hello world
import {HelloWorldCmp} from 'app/hello_world_cmp.js';

// inicializa��o do componente
bootstrap(HelloWorldCmp);