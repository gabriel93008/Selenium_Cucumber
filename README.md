# Simple_Selenium_with_CucumberJS
Simple Selenium with CucumberJS for Studies

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

Repositório sobre como automatizar testes com CucumberJS, Selenium e HTML Reports.

1 - Criar um arquivo Json e baixar as dependências, segue abaixo os comandos para baixar no PowerShell ou qualquer outro terminal de sua preferência:

> npm init

> npm install --save-dev @cucumber/pretty-formatter @cucumber/cucumber

> npm install selenium-webdriver assert

> npm install chromedriver geckodriver 

2 - Colocar esse comando no arquivo Json: 

> "scripts": {
    "test": "cucumber-js -f @cucumber/pretty-formatter features/* --format html:cucumber-report.html "
    
3 - Criar uma pasta features onde ficara nossos arquivos para efetuar os testes, como visto na imagem também criaremos uma pasta dentro de features chamada steps-definitions que é onde vai nosso código e criara esses 2 arquivos como descrito na imagem:

![Feature](https://user-images.githubusercontent.com/111756886/214191230-2029121c-f519-4411-b067-73f6256a84a2.png)
