import { By } from 'selenium-webdriver'
import {BasePage} from './basePage'

export class myStore extends BasePage {
    constructor (driver, url) {
        super(driver, url)
    }
    emailaddress: By = By.id('email')

    emailcreate: By = By.name('email_create')
    submitnewemail:By = By.id('SubmitCreate')
    password: By = By.id('passwd')
    loginbutton:By = By.className('login')
    emailinput: By = By.className('is_required validate account_input form-control')
    submitbutton: By = By.className('icon-lock left')
    addtocartbutton: By = By.className('button ajax_add_to_cart_button btn btn-default')
    proceedtocheckout: By = By.className('icon-chevron-right right')
    shoppingcartbutton: By = By.className('shopping_cart')
    womens: By = By.className('sf-with-ul')
    account: By = By.className('account')
    orderhistory: By = By.className('icon-list-ol')
    contactus: By = By.id('contact-link')
    message: By = By.id('message')
    submitmessage: By = By.id("submitMessage")
    subjectheading: By = By.id('uniform-id_contact')
    newsletter: By = By.className('inputNew form-control grey newsletter-input')
    submitnewsletter: By = By.name('submitNewsletter')
    searchbox: By = By.className('search_query form-control ac_input')
    submitsearch: By = By.name('submit_search')

    

}