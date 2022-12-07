# Github Search

É preciso ter angular baixado no computador, rode `npm install -g @angular/cli` para o download.
Versões do node e npm:
  npm: '8.5.3',
  node: '18.12.1',
  
Rode `npm install` para download das bibliotecas utilizadas, foi utilizada a PrimeNG para o desenvolvimento, baixei o MaterialUI também, porém depois de ver algumas coisas no PrimeNG preferi esta, explicarei melhor depois.

Rode `ng serve` para criar o server de desenvolvimento, ficará em `http://localhost:4200/`, a aplicação cria o build na primeira vez, mas caso precise, rode `ng build`, projeto foi gerado com o angular versão 15.0.2.

Utilizei a libs PrimeNG, primeiramente utilizaria a MaterialUI, mas as cores não combinavam muito, ai fui ver a PrimeNG, tinha as cores e o melhor era o Input que conseguia por um icone dentro de maneira fácil, uma coisa chata que tem usar posição absoluta e outras coisas para se fazer, e os componentes era mais parecidos com o que pedia e pra mim mais agradáveis, usei os ícones do mesmo. 

O botão de voltar é apagar o texto, pode ser tanto na escrita como no X do input.

A estrutura do projeto tem a pasta models, onde coloquei uma parte do modelo do GET do github, as partes que achei que ia utilizar, algumas não utilizei. a pasta da página search-github, onde dentro tem a divisão das páginas home e perfil, com nome search-page e github-profile-page respectivamente, e por fim uma pasta services, onde eu chamo os serviços, endpoints, do github, e o App principal, que já é criado junto com o projeto.

Sobre responsividade, fiz de um jeito automático, mas não é um responsivo 100%, mas da pra usar em várias telas 
