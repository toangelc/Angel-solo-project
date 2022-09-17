import {BasePage} from './basePage'
import {By} from 'selenium-webdriver'

export class AngelSoloPage extends BasePage {

    signIn: By = By.xpath('//*[@id="hz-primary-header-container"]/div/div/div[3]/div/div[2]/div/a/span[2]')
    username: By = By.id('username')
    password: By = By.id('password')
    signInBtn: By = By.id('signIn')
    userProfile: By = By.xpath('//*[@id="hz-primary-header-container"]/div/div/div[3]/div/div[4]/div/a/span')
    forgotPassword: By = By.xpath('//*[@id="signinForm"]/div[6]/a')
    emailAddress: By = By.xpath('//*[@id="hz-page-content-wrapper"]/div/div/div/form/div')
    continueBtn: By = By.xpath('//*[@id="hz-page-content-wrapper"]/div/div/div/form/button')
    signOut: By = By.xpath('//*[@id="hz-primary-header-container"]/div/div/div[3]/div/div[4]/div/div/span/button')
    
    shopProducts: By = By.xpath('//*[@id="hz-primary-header-container"]/div/div/div[1]/span[3]/div/a')
    furniture: By = By.xpath('//*[@id="hz-page-content-wrapper"]/div/div[2]/div/div/div[1]/div/div/div[1]/div/ul/li[1]/a/span')
    sofaAndSectionals: By = By.xpath('//*[@id="hz-page-content-wrapper"]/div[2]/div[1]/div/div/div[1]/ul/li[1]/a/span')
    searchBar: By = By.xpath('//*[@id="hz-primary-header-container"]/div/div/div[3]/div/form/div/div[1]/div')
    results: By = By.id('rso')
    velvetSofa: By = By.xpath('//*[@id="hz-br__result-set-root"]/div[1]/div[3]/div/div[3]/div/div[1]/div/div[2]/div/a')
    save: By = By.xpath('//*[@id="hz-page-content-wrapper"]/div/div/div/div[2]/div[2]/div[2]/div[6]/div[2]/button[1]')
    ideaBook: By = By.xpath('//*[@id="react-autowhatever-1-section-0-item-0"]/div/div[1]/svg')
    addToCart: By = By.xpath('//*[@id="hz-page-content-wrapper"]/div/div/div/div[2]/div[2]/div[2]/div[6]/div[2]/button[2]')
    shoppingCart: By = By.xpath('//*[@id="hz-primary-header-container"]/div/div/div[4]/div/div[3]/a')
    proceedToCheckOut: By = By.xpath('//*[@id="hz-page-content-wrapper"]/section/div/div/article[2]/div/div[1]/div[2]/div/button')
    noThanks: By = By.css('body > div.hz-modal.add-to-cart-dialog.add-to-cart-dialog--responsive.add-to-cart-dialog--warranty-faq.hz-modal--dark > div.hz-trap-focus.hz-modal__container > div > div.hz-modal__body > div > div > div > div.add-to-cart-warranty-callout-details > div.hz-mulberry-offers-dropdown > div.mulberry-dropdown-children > div > a > span')
    checkOutNow: By = By.css('body > div.hz-modal.add-to-cart-dialog.add-to-cart-dialog--responsive.add-to-cart-dialog--warranty-added.hz-modal--dark > div.hz-trap-focus.hz-modal__container > div > div.hz-modal__body > div > div > div.hz-modal__controls.hz-modal__controls--center > button.btn.btn-primary.btn-lg.modal-close')
    getIdeas: By = By.xpath('//*[@id="hz-primary-header-container"]/div/div/div[1]/span[1]/div/a')
    living: By = By.xpath('//*[@id="hz-page-content-wrapper"]/div/div[1]/div[2]/div/ul/li[4]/div/div/a')
    modern: By = By.xpath('//*[@id="hz-page-content-wrapper"]/div/div[3]/div[1]/div/div[3]/section/div[1]/div/a[1]')
    builtInMedia: By = By.xpath('//*[@id="hz-page-content-wrapper"]/div/div[3]/div[1]/div/div[3]/section/div[1]/div/a[3]')
    findProfessionals: By = By.xpath('//*[@id="hz-primary-header-container"]/div/div/div[1]/span[2]/div/a')
    homeRemodeling: By = By.xpath('//*[@id="hz-page-content-wrapper"]/div/main/div[2]/section[1]/div/div[1]/div[2]/section/div[1]/div/div[1]/a/span/div/div/div')
    deMarco: By = By.xpath('//*[@id="hz-page-content-wrapper"]/div/main/div/div[3]/ul/li[3]/div[1]/a/div[2]/div[1]/div[1]/div[1]/div/div[2]/span')
    sendMessage: By = By.xpath('//*[@id="hz-page-content-wrapper"]/div/main/div/div[3]/ul/li[3]/div[1]/a/div[2]/div[2]/button')
    message: By = By.id('hz-label-input198')
    nextBtn: By = By.className('btn btn-primary btn-lg disabled')
    name: By = By.xpath('//*[@id="hz-label-input284"]')
    email: By = By.xpath('//*[@id="hz-label-input285"]')
    phone: By = By.xpath('//*[@id="hz-label-input286"]')
    send: By = By.xpath('/html/body/div[6]/div[2]/div/div[2]/form/div[2]')




    constructor() {
        super({url: "https://houzz.com"})
    }
   async search(searchTerm:string) {
    return this.setInput(this.searchBar, `${searchTerm}\n`)
   }
   async getResults() {
    return this.getText(this.results)
   }
   
}