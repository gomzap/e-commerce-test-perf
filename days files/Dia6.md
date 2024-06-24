# Dia 6 💻

Após a dinâmica do dia anterior, foi realizado um mapa mental sob o exercício feito em grupo pelo discord.

<img src="/assets/mapa_mental.jpg">
NOTAS: "Ajuda e documentação claras" e "feedback dos usuários" se classificam em funcionais.
Garantia de testes de integração é muito relevante em um sistema bancário. 
Testes E2E também é importante e o mais próximo da experiência real do usuário.

##

E dando continuidade a trilha da primeira sprint, reforçando que o ciclo de desenvolvimento de software deve estar alinhado com o ciclo de testes em suas etapas para garantir a qualidade do produto, finalizando os fundamentos de testes de software com o conteúdo referente a piramides de testes e em quantos e que tipo de testes deveria se ter.

### A pirâmide de teste

A função da pirâmide de testes é basicamente definir níveis de testes e te dar um norte quanto à quantidade de testes que você deveria ter em cada um desses níveis. No topo da pirâmide, temos os testes de ponta a ponta (end to end ou e2e, pra resumir). O objetivo deles é imitar o comportamento do usuário final nas nossas aplicações (seja ele uma pessoa, uma api, ou qualquer outro tipo de cliente).
Na base, temos os testes de unidade, onde verificamos o funcionamento da menor unidade de código testável da nossa aplicação.
Entre essas duas camadas, temos os testes de integração. A ideia deles é verificar se um conjunto de unidades se comporta da maneira correta, só que de forma menos abrangente do que os testes de ponta a ponta.

<div align="center">
    <img src="/assets/piramidetest">
</div>

##

Pude também praticar mais boas práticas em repositórios e Git durante o dia.

Material complementar para introdução ao Git com os principais comandos:

- https://petcomputacaoufrgs.github.io/intro-ao-git/o-que-eh.html
