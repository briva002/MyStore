import { Builder, Capabilities } from "selenium-webdriver"
const chromedriver = require('chromedriver')
import { SuperCook } from './pageObjects/superCook'

const myDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

const myPage = new SuperCook (myDriver, 'https://www.supercook.com')

test('Opens Super Cook website', async () => {
    await myPage.navigate()
    await myPage.setInput(myPage.loginEmail, 'belinda.rivas1@gmail.com')
    await myPage.setInput(myPage.password, 'Miami305!')
    await myPage.click(myPage.submitButton)
})