import { AngelSoloPage } from './AngelSoloPage'
const angel = new AngelSoloPage()


test('sign in', async () => {
    await angel.navigate()
    await angel.click(angel.signIn)
    await angel.setInput(angel.username, 'toangelc@yahoo.com.tw')
    await angel.setInput(angel.password, 'Angel10@9')
    await angel.driver.sleep(1000);
    angel.driver.takeScreenshot().then(
        function (image) {
            require('fs').writeFileSync('logIn.screenshot.png', image, 'base64')
        });
    await angel.click(angel.signInBtn)
})

test('search by selecting a category', async () => {
    await angel.navigate()
    await angel.click(angel.shopProducts)
    await angel.click(angel.furniture)
    await angel.click(angel.sofaAndSectionals)
    await angel.click(angel.velvetSofa)
    await angel.driver.sleep(1000);
    angel.driver.takeScreenshot().then(
        function (image) {
            require('fs').writeFileSync('search.screenshot.png', image, 'base64')
        });
})

test('get ideas', async () => {
    await angel.navigate()
    await angel.click(angel.getIdeas)
    await angel.click(angel.living)
    await angel.click(angel.modern)
    await angel.click(angel.builtInMedia)
    await angel.driver.sleep(1000);
    angel.driver.takeScreenshot().then(
        function (image) {
            require('fs').writeFileSync('builtInMedia.screenshot.png', image, 'base64')
        });

})

test('get professionals', async () => {
    await angel.navigate()    
    
    await angel.click(angel.findProfessionals)
    await angel.click(angel.homeRemodeling)
    await angel.click(angel.deMarco)
    await angel.driver.sleep(1000);
    angel.driver.takeScreenshot().then(
        function (image) {
            require('fs').writeFileSync('getprofessionals.screenshot.png', image, 'base64')
        });
    await angel.click(angel.sendMessage)
    await angel.driver.quit()
})

