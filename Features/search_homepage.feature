Feature: Búsqueda personalizada de Apple iPhone 13 (128 GB)

  Scenario: Búsqueda exitosa de iPhone 13 con 128 GB
    Given el usuario abre la página de inicio de Mercado Libre
    When el usuario busca "iPhone 13 128GB"
    Then los resultados deben incluir productos que contengan "iPhone 13"

  Scenario: Intento de compra sin estar logueado
    Given el usuario abre la página de inicio de Mercado Libre
    When el usuario busca "iPhone 13"
    And selecciona un producto de la lista
    Then el sitio debe solicitar iniciar sesión para continuar la compra

  Scenario: Búsqueda fallida de producto inexistente
    Given el usuario abre la página de inicio de Mercado Libre
    When el usuario busca "iPhone13modeloInexistente"
    Then no deben mostrarse resultados