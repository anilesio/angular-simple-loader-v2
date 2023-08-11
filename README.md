<p align="center">
    <img width="150px" src="https://angular.io/assets/images/logos/angular/angular.png" align="center" alt="Angular logo" />
    <h2 align="center">
        Angular Simple Loader v2 🔥
    </h2>
    <p align="center">
        O presente projecto, refere-se a um componente loading feito com angular. Um componente loading é um elemento que é exibido enquanto a informação desejada não é carregada, algo no estilo placeholder
    </p>
</p>

<p align="center">
  <img src="https://media.giphy.com/media/chzz1FQgqhytWRWbp3/giphy.gif" width="300px">
</p>



## O que foi utilizado
- Angular +12
- Node 14+
- NPM 8+

Instalação do Angular 12

code:: node
    
    npm install -g @angular/cli@12

## Chamada do componente

code:: node

    <app-simple-loading [text]="'Carregando'" [show]="true" [type]="1"></app-simple-loading>

| Propriedade               | Tipo                                                                         | Descrição                             | Obs
| ------------------------- | ---------------------------------------------------------------------------- | ------------------------------------- | ----------------------------------------------------------------------------------------|
| `text`                    | String                                                                       | Mensagem a apresentar no carregamento |                                                                                         |
| `show`                    | Boolean                                                                      | `true` ou `false`                     |                                                                                         |
| `type`                    | Number                                                                       | 1 à 4                                 | Informando um valor inválido, o códido assume um tema aleatório a casa `load` da página |
    
<p>O componente está dentro de um módulo <b>shared.module.ts.ts</b>, que por sua vez é instanciado no <b>app.module.ts</b></p>

<p>Por fim, temos o resultado 😎</p>

<p aling="center">
    <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDlxMDlxb3VmZ3Z5cjV5NmNscGt1N3Y2dHpmN2k3MHltaTEycXk5MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4Jx08tWsBUi7DBIIK6/giphy.gif" width="100%">
</p>
