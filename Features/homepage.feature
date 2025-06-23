Feature: Validación de APIs de Mercadolibre

  Scenario: Validar configuración de sitios
    When consulto el endpoint de sitios
    Then debe responder con código 200 y contener el país "Argentina"

  Scenario: Validar monedas
    When consulto el endpoint de monedas
    Then debe contener la moneda "ARS"

  Scenario: Validar países
    When consulto el endpoint de países
    Then debe incluir el país "Argentina"
