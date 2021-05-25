import { Builder, Capabilities } from "selenium-webdriver"
const chromedriver = require('chromedriver')
import { myStore } from '../pageObjects/myStore'

const myDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

const myPage = new myStore (myDriver, 'http://automationpractice.com/index.php')

test('User can log into account',async () => {
await myPage.navigate()
await myPage.click(myPage.loginbutton)
await myPage.setInput(myPage.emailaddress,'Belinda.Rivas1@gmail.com')
await myPage.setInput(myPage.password, 'Miami305!')
await myPage.click(myPage.submitbutton)
})
