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

Inicialmente estava alimentando a app com a nova api fetch() do javascript,
só que ela ainda não oferecer um método abort como o Ajax,
então optei por refatorar está parte, visto que,
sem o abort, cliques sequências nos botões de planos poderiam ter efeitos indesejados,
inclusive afetar a performance.

Implementei alguns conceitos das Progressive Web Apps,
conseguindo um resultado considerável no Lighthouse:

Progressive Web App 82
Accessibility 97
Best Practices 92

Fiz alguns testes bem simples apenas pra validar renderização de componentes,
comecei a estudar testes unitários com Jest e Enzyne para implementar neste teste.

Rodando os testes, mesmo dando verde, o Jest joga uns warnings, procurei no repo official,
e vi algumas reclamações sobre isso, mas nada resolvido ainda por parte da equipe.
