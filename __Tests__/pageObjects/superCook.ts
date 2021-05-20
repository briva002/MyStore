import { By } from 'selenium-webdriver'
import {BasePage} from './basePage'

export class SuperCook extends BasePage {
    constructor (driver, url) {
        super(driver, url)
    }
    loginEmail: By = By.id('loginEmail')
    password: By = By.id('loginPassword')
    loginButton: By = By.id('loginModalLabel')
    submitButton: By = By.className('btn btn-primary')
}