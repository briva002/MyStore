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

test('adds items to cart', async () => {
await myPage.navigate()
await myPage.click(myPage.womens)
await myPage.click(myPage.addtocartbutton)
await myPage.click(myPage.shoppingcartbutton)

})

test('User can view order history', async () => {
    await myPage.navigate()
    await myPage.click(myPage.account)
    await myPage.click(myPage.orderhistory)
    await myDriver.sleep(2000)
      
})
test('User can fill out contact page', async () => {
    await myPage.navigate()
    await myPage.click(myPage.contactus)
    await myPage.click(myPage.subjectheading)
    await myPage.setInput(myPage.message, 'Your store is awesome')
    await myPage.click(myPage.submitmessage)
})
afterAll(async () => {
    await myDriver.quit();
});

