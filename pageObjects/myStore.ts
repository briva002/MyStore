import { By } from 'selenium-webdriver'
import {BasePage} from './basePage'

export class myStore extends BasePage {
    constructor (driver, url) {
        super(driver, url)
    }
    emailaddress: By = By.id('email')
    password: By = By.id('passwd')
    loginbutton:By = By.className('login')
    emailinput: By = By.className('is_required validate account_input form-control')
    submitbutton: By = By.className('icon-lock left')
    
}