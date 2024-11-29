## Visão Geral

Sistema **NSPSYS** trata-se de uma ferramenta opensource desenvolvida para apoiar as atividades de profissionais que atuam em unidades de saúde como parte integrante do Núcleo de Segurança do Paciente. O software é composto por uma integração com o Whatsapp através do qual qualquer indivíduo consegue realizar a notificação de um Evento de Saúde. Esta integração foi feita através da plataforma Twilio, onde os fluxos conversacionais foram modelados. Cada interação recebida através do Whatsapp é direcionada diretamente para o Google firebase, através de um webhook desenvolvido utilizando o firebase function. Além disso, o sistema possui uma interface visual desenvolvida para os profissionais do núcleo acompanharem e tratarem das notificações recebidas. Essa interface web foi desenvolvida usando VueJs3 com o Vite.

## PRÉ-REQUISITOS

Familiaridade com a linha de comando
Instalar a versão 18.3 ou superior da Node.js.
Ter o git instalado

PASSOS

Por uma questão de organização, crie um diretório _projetos_:

`mkdir ~/projetos`

dentro dessa pasta, crie uma outra pasta exclusiva para o sistema _nspsys_:

`mkdir ~/projetos/nspsys`

entre no diretório:

`cd ~/projetos/nspsys`

faça o clone do projeto:

`git clone git@github.com:nspsys/frontend.git`

entre no diretório frontend:

`cd ~/projetos/nspsys/frontend`

crie o arquivo .env utilizando como base o .env.example:

`mv ~/projetos/nspsys/frontend/.env.example ~/projetos/nspsys/frontend/.env`

E preencha com suas credenciais de acesso ao firebase:

`VUE_APP_API_KEY="INFORMAR_SUA_API_KEY"
 VUE_APP_KEY_AUTH_DOMAIN="INFORMAR_SEU_KEY_AUTH_DOMAIN"
 VUE_APP_PROJECT_ID="INFORMAR_SEU_PROJECT_ID"
 VUE_APP_STORAGE_BUCKET="INFORMAR_SEU_STORAGE_BUCKET"
 VUE_APP_MESSAGING_SENDER_ID="INFORMAR_SEU_MESSAGING_SENDER_ID"
 VUE_APP_ID="INFORMAR_SEU_APP_ID"
 JWT_PRIVATE_KEY="INFORMAR_SUA_PRIVATE_KEY"
`

instalar as dependências:

`npm i`

rodar a aplicação:

`npm run dev`
