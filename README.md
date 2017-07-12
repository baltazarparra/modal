# Modal
Modal de compra em React, com checkout.

# Start

yarn install

yarn start

# Test

yarn test

# Considerações Finais

Tomei liberdade de usar algumas propriedades e valores recentes no CSS,
visto que não havia uma especificação rígida quanto a suporte a navegadores.
Todas propriedades usadas já oferecem um bom suporte nos navegadores atuais,
mas ainda não estão totalmente implementadas em navegadores antigos.

Implementei alguns conceitos das Progressive Web Apps,
conseguindo um resultado considerável no Lighthouse:

Progressive Web App 82
Accessibility 97
Best Practices 92

Acessando a página pelo Android algumas vezes, o google já libera o banner para adicionar a homescreen,
caso queiram simular, é só acessar o menu do navegador Android, e clicar em Adicionar a tela inicial.

Fiz alguns testes bem simples apenas pra validar renderização de componentes,
comecei a estudar testes unitários com Jest e Enzyne para implementar neste teste.

Rodando os testes, mesmo dando verde, o Jest joga uns warnings, procurei no repo official,
e vi algumas reclamações sobre isso, mas nada resolvido ainda por parte da equipe.
