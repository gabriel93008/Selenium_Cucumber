const {Given, Then, When, Before, After} = require('@cucumber/cucumber')
const webdriver = require('selenium-webdriver');
const assert = require('assert');

//SETUP CHROME DRIVER
var chrome = require('Selenium-webdriver/chrome');
const chromeDriver = require('chromeDriver');
const {By} = require('selenium-webdriver');
var options   = new chrome.Options().headless();

let driver = new webdriver.Builder()
.forBrowser('chrome')
  .withCapabilities(webdriver.Capabilities.chrome())
  .setChromeOptions(options)
  .build(); 

    
  Given('acesso o site ultima', {timeout: 15 * 1000}, async () => {
    await driver.get("https://ultima.school/")
    await driver.manage().window().setRect({ width: 1920, height: 1050 })
    assert(await driver.findElement(By.linkText("Log In")).getText() == "Log In")
  })

  When('acesso a pagina de login', {timeout: 15 * 1000}, async () => {
    await driver.findElement(By.linkText("Log In")).click()
    await driver.findElement(By.id("wp-submit")).sendKeys("KC2bw9Ju")
  })

  Then('devo visualizar botao conecte', {timeout: 15 * 1000}, async () => {
    await driver.close()
    
  })