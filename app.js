const urlHome = 'http://homologa.leadsok.com.br/BOT/index.html';
const urlLogins = 'http://apihomologa.leadsok.com.br/candidato/buscalogin';
const puppeteer = require('puppeteer');
const request = require('request');


async function go() {

    let words = []

    //let logins = await requestLogs();

    // logins = JSON.parse(logins)

    let logins = [
        { email: 'paulo@gmail.com', senha: '51564321' },
        { email: 'fabiola@gmail.com', senha: '3542131' },
        { email: 'victor@gmail.com', senha: '23543212' },
        { email: 'pablo@gmail.com', senha: '35135' },
        { email: 'camila@gmail.com', senha: '213512' }
    ]

    let page = await configPage();

    for (let login of logins) {
        await getWords(login, page, words)
    }








}



async function getWords(login, page, words) {
    return new Promise(async (resolve, reject) => {

        await clickByAttr(page, 'name', 'email')
        await page.keyboard.type(login.email)
        await page.keyboard.press('Tab')
        await page.keyboard.type(login.senha)
        await sleep(1000)
        await clickByAttr(page, 'onclick', "ValidaLogin()")
        await sleep(5000)

        console.log(page)


    })
}


async function configPage() {
    return new Promise(async (resolve, reject) => {
        const browser = await puppeteer.connect({ browserURL: 'http://localhost:8001' })
        // const browser = await puppeteer.launch({headless: false})
        let page = await browser.pages()
        page = page[0]
        await page.goto(urlHome)
        await sleep(1000)
        resolve(page)
    })
}



async function requestLogs() {
    return new Promise(async (resolve, reject) => {
        request.get({
            method: "get",
            uri: urlLogins,
        },
            (error, res) => {
                if (error) {
                    reject()
                    return
                }
                resolve(res.body)
            }
        )
    })
}



async function clickByAttr(page, attr, value, number = 0) {
    return new Promise(async (resolve, reject) => {
        let el = await page.$x("//*[@" + attr + "='" + value + "']")
        if (el.length > 0) {
            resolve(await el[number].click())
        } else {
            resolve(console.log('não encontrado ' + attr))
        }
    })
}



async function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
}


go()