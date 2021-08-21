const urlHome = 'http://homologa.leadsok.com.br/BOT/index.html';
const urlLogins = 'http://apihomologa.leadsok.com.br/candidato/buscalogin';
const puppeteer = require('puppeteer');
const request = require('request');


async function go() {

    let words = []

    let logins = await requestLogs();

    logins = JSON.parse(logins)


    let page = await configPage();

    for (let login of logins) {
        await getWords(login, page, words)
    }

    await postMensage(words)

    console.log('processo concluído')
}


async function postMensage(words) {
    return new Promise(async (resolve, reject) => {
        request.post(
            'http://apihomologa.leadsok.com.br/candidato/enviarfrase',
            {
                json: {
                    frase: words.join(' '),
                },
            },
            (error, res, body) => {
                if (error) {
                    console.error(error)
                    return
                }
                resolve()
            }   
        )
    })
}



async function getWords(login, page, words) {
    return new Promise(async (resolve, reject) => {
        page.on("console", msg => {
            if (msg._args[0]) {
                if (!words.includes(msg._args[0]._remoteObject.preview.properties[1].value)) {
                    words.push(msg._args[0]._remoteObject.preview.properties[1].value)
                }
            }
        });

        await clickByAttr(page, 'name', 'email')
        await backspace(page, 25)
        await page.keyboard.type(login.email)
        await sleep(1000)
        await page.keyboard.press('Tab')
        await backspace(page, 25)
        await sleep(1000)
        await page.keyboard.type(login.senha)
        await sleep(1000)
        await clickByAttr(page, 'onclick', "ValidaLogin()")
        await sleep(2000)

        await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
        await sleep(2000)
        resolve(page)
    })
}


async function configPage() {
    return new Promise(async (resolve, reject) => {
        const browser = await puppeteer.launch({ headless: false, dumpio: true })
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



async function backspace(page, quant) {
    return new Promise(async (resolve, reject) => {
        for (let i = 0; i < quant; i++) {
            await page.keyboard.press('Backspace')
        }
        resolve()
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