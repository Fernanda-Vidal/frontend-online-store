# Projeto Front-End Online Store!


  Neste projeto você criará uma versão simplificada, sem persistência no banco de dados, de uma **loja online**, desenvolvendo em grupo suas funcionalidades de acordo com demandas definidas em um quadro _Kanban_, em um cenário mais próximo ao do mercado de trabalho.
  
  A partir dessas demandas, teremos uma aplicação onde os usuários poderão:
  - Buscar produtos por termos e categorias a partir da _API do Mercado Livre_;
  - Interagir com os produtos buscados de modo a adicioná-los e removê-los de um carrinho de compras em diferentes quantidades;
  - Visualizar detalhes e avaliações prévias de um produto, bem como criar novas avaliações;
  - E por fim, finalizar a compra (simulada) dos itens selecionados.



  Nesse projeto, você será capaz de:

  * Entender o que são Métodos Ágeis
  * Entender o que é Kanban
  * Entender o que é Scrum
  * Trabalhar em equipes utilizando Kanban ou Scrum de maneira eficaz
  * Praticar todas as habilidades desenvolvidas até agora no módulo de Front-End



:busts_in_silhouette: Trello como ferramenta Kanban

  Uma forma para seu grupo organizar as atividades e dividir as tarefas é através de um modelo de kanban. A Trybe disponibiliza um [board pré-configurado para vocês](https://trello.com/b/9mjukxCq/frontend-online-store) duplicarem no [Trello](https://trello.com/).


:convenience_store: Desenvolvimento 

  Neste projeto você criará uma versão simplificada, sem persistência no banco de dados, de uma **loja online**, desenvolvendo em grupo suas funcionalidades de acordo com demandas definidas em um quadro _Kanban_, em um cenário mais próximo ao do mercado de trabalho. 
  
  A partir dessas demandas, teremos uma aplicação onde a pessoa usuária poderá:
  - Buscar produtos por termos e categorias a partir da _API do Mercado Livre_;
  - Interagir com os produtos buscados de modo a adicioná-los e removê-los de um carrinho de compras em diferentes quantidades;
  - Visualizar detalhes e avaliações prévias de um produto, bem como criar novas avaliações;
  - E por fim, finalizar a compra (simulada) dos itens selecionados.

  ### Documentação da API do Mercado Livre

  Sua página _web_ irá consumir os dados da API do _Mercado Livre_ para realizar a busca de itens da sua loja online. Para realizar essas buscas, vocês precisarão consultar os seguintes _endpoints_:

  - Para listar as categorias disponíveis:
    - Endpoint: https://api.mercadolibre.com/sites/MLB/categories
  - Para buscar por itens por termo:
    - Parâmetro de busca $QUERY (este parâmetro deve ser substituído pelo valor do campo de busca)
    - Endpoint: https://api.mercadolibre.com/sites/MLB/search?q=$QUERY
  - Para buscar itens por categoria:
    - Parâmetro de busca $CATEGORY_ID (este parâmetro deve ser substituído pelo ID da categoria selecionada)
    - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID
  - Para buscar itens de uma categoria por termo (vale ressaltar, que este endpoint não necessariamente precisa receber ambos os parâmetros para funcionar):
    - Parâmetro de busca $QUERY (este parâmetro deve ser substituído pelo valor do campo de busca)
    - Parâmetro de busca $CATEGORY_ID (este parâmetro deve ser substituído pelo ID da categoria selecionada)
    - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY
  - Para buscar detalhes de um item especifico:
    - Parâmetro de busca $PRODUCT_ID (este parâmetro deve ser substituído pelo valor do campo de busca)
    - Endpoint: https://api.mercadolibre.com/items/$PRODUCT_ID



  ### Organização do grupo de trabalho

  É de suma importância que o grupo se organize utilizando o kanban para maior eficiência e para que se minimizem os conflitos que a união de vários códigos trará.

  Além disso, você verá que os requisitos do projeto tem, além das observações técnicas e do que será validado, descrições tais quais se veriam em um projeto real. É **muito importante** ser capaz de ler descrições como essa e transformá-las em produtos ou, se houver dúvida, **saber tirar tais dúvidas!** Seguimos à disposição no Slack para isso.

  ⚠ **PULL REQUESTS COM ERROS DE LINTER NÃO SERÃO AVALIADAS. ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠

  ### Grupos de prioridade dos requisitos

  Os requisitos são organizados por grupos de prioridade. **Demandas de um grupo de prioridade podem ser realizadas em paralelo, e são pré-requisito para as demandas do grupo de prioridade seguinte.** Por exemplo:

  - **Requisitos 1 e 2:** Prioridade 0 (Deve ser feito PRIMEIRO)
  - **Requisitos 3 a 5:** Prioridade 1 (Devem ser feitos APÓS OS REQUISITO 1 E 2, mas podem ser feitos em paralelo)
  - **Requisitos 5 a 7:** Prioridade 2 (Devem ser feitos APÓS OS REQUISITO 3 A 5, mas podem ser feitos em paralelo)
  ...

  Se você não seguir a ordem de prioridades terá que lidar com mais **conflitos de merge** e **demandas concorrentes**, onde o avanço de uma depende, necessariamente, do avanço de outra para poder acontecer.

  ### Requisitos Bônus

  **Saiba priorizar tarefas e priorize o essencial antes de partir para os extras!** Você se deparará com inúmeras situações no trabalho em que precisará priorizar, então este é um exercício muito importante de se praticar.
</details>


# Requisitos


### 1. Implemente o módulo de acesso à api do Mercado Livre

**PRIORIDADE 0** 


### 2. Crie uma página de listagem de produtos vazia

**PRIORIDADE 0** 



### 3. Crie a página do carrinho de compras

**PRIORIDADE 1**



### 4. Liste as categorias de produtos disponíveis via API na página principal

**PRIORIDADE 1**



### 5. Liste os produtos buscados por termos, com os dados resumidos, associados a esses termos

**PRIORIDADE 1**



### 6. Selecione uma categoria e mostre somente os produtos daquela categoria

**PRIORIDADE 2** 



### 7. Redirecione para uma tela com a exibição detalhada ao clicar na exibição resumida de um produto

**PRIORIDADE 3**



### 8. Adicione produtos ao carrinho a partir da tela de listagem de produtos

**PRIORIDADE 3**



### 9. Adicione um produto ao carrinho a partir de sua tela de exibição detalhada

**PRIORIDADE 3**



### 10. Visualize a lista de produtos adicionados ao carrinho em sua página e permita a manipulação da sua quantidade

**PRIORIDADE 3**


### 11. Avalie e comente acerca de um produto em sua tela de exibição detalhada

**PRIORIDADE 3** 



### 12. Finalize a compra vendo um resumo dela, preenchendo os seus dados e escolhendo a forma de pagamento

**PRIORIDADE 4** 



## Requisitos Bônus

### 13. Mostre junto ao ícone do carrinho a quantidade de produtos dentro dele, em todas as telas em que ele aparece

**PRIORIDADE 4**



### 14. Limite a quantidade de produtos adicionados ao carrinho pela quantidade disponível em estoque

**PRIORIDADE 4** - 



### 15. Mostre quais produtos tem o frete grátis

**PRIORIDADE 4**



## Requisitos não avaliativos

### 16. Faça um layout para o site

**PRIORIDADE 5** 


### 17. Faça um layout responsivo para o site

**PRIORIDADE 5**


### 18. Crie um seletor dropdown para ordenar a lista de produto por maior e menor preço

**PRIORIDADE 5**



### 19. Coloque uma animação no carrinho para quando um produto for adicionado

**PRIORIDADE 5** 



### 20. Crie um slider lateral para exibir o carrinho na tela principal

**PRIORIDADE 5**



### 21. Destaque, na tela principal, os produtos já adicionados ao carrinho

**PRIORIDADE 5** 

