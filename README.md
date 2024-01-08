### Visão geral

Este é um módulo de um sistema de vendas que, recebe uma determinada demanda referente a estocagem (adição, remoção, acerto, fechamento periódico, etc.).

**RESPONSES**

| HTTP Status Quote | Description |
| --- | --- |
| 200 | Successfully processed request. |

### Error Codes

Error responses contain more detail about the error in the response body, in the `"code"` and `"message"`properties.

| HTTP Status Quote | code | message |
| --- | --- | --- |
| 400 | invalid_json | The request body could not be decoded as JSON |
| 404 | invalid_request_url | This request URL is not valid. |
| 403 | invalid_request | This request is not supported. |
| 401 | unauthorized | The bearer token is not valid. |

### Modelo Entidade Relacional (MER)

[Link to MER](https://app.diagrams.net/#G13DMQ32g2t8Q24Z9YnpiTiwR7XISI6AHM#%7B%22pageId%22%3A%22i2DTU47HNJiyPH9dUcqL%22%7D)

### Técnologias

- Javascript
- RabbitMQ
- MySQL

### Patterns

- SOLID
- MVC
- RESTFul

  # Endpoints

## [GET] - List all stock 
  ### Route
    /api/v1/stock

  Retorna a listagem de itens inseridos no banco de dados conforme a limitação de page_size
  
## [GET] - Retrieve a item
  ### Route
    api/v1/stock/{id}

  Retorna apenas o Item informado pelo parâmetro do id 

## [POST] - Insert a item
  ### Route
    api/v1/product

  Insere um produto no banco de dados inicialmente com o estoque de amount = 1 a menos que seja informada no corpo da requisição a quantidade correta.

## [PATCH] - Change a item
  ### Route
    api/v1/stock/{id}

  Solicita a alteração cadastral de um item no banco de dados.

## [POST] - Stock Adjustment
  ### Route
    api/v1/stock/{id}/adjust

  Informa no corpo da requisição a quantidade a ser ajustada no estoque em seu body, informando a quantidade a ser algerada amount = x e operation = sub (ou add)

## [DELETE] - Remove a item
  ### Route
    api/v1/stock/{id}/remove

  Remove um item do banco contanto que este item esteja com estoque zerado. caso contrário é necessário realizar um ajuste de estoque antes da remoção.
