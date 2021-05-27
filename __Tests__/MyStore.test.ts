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
   
    await myPage.click(myPage.contactus)
    await myPage.click(myPage.subjectheading)
    await myPage.setInput(myPage.message, 'Your store is awesome')

})
test('User can register for newsletter', async () => {
    await myPage.setInput(myPage.newsletter,'belinda.rivas1@gmail.com')
    await myPage.click(myPage.submitnewsletter)
})
test('User can search for items', async () => {
    await myPage.setInput(myPage.searchbox, 'evening dress')
    await myPage.click(myPage.submitsearch)
    await myDriver.sleep(2000)
})  
    
    afterAll(async () => {
    await myDriver.quit();
});

