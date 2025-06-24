Feature: Buscar iPhone 13 en MercadoLibre

  Scenario: El usuario busca un iPhone 13 y valida la información del producto
    Given el usuario navega a la página de inicio de MercadoLibre
    When busca "iPhone 13"
    Then se muestran resultados relacionados
    And selecciona el primer producto
    And el producto tiene un precio visible
    And el producto ofrece al menos un método de pago
    And el producto ofrece cuotas sin interés
    And el producto tiene envío gratis