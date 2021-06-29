require('dotenv').config()

const express = require('express')
const jwt = require('jsonwebtoken')
const adyen1 = require('node-adyen-encrypt')(18)
const adyen2 = require('node-adyen-encrypt')(22)
const adyen3 = require('node-adyen-encrypt')(23)
const adyen4 = require('node-adyen-encrypt')(24)
const adyen5 = require('node-adyen-encrypt')(25)
const path = require('path');

const app = express()

app.use(express.static(__dirname + '/public')); 

app.use(express.json())

const PORT = 3001
app.listen(PORT)

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'));



app.get('/', function (req, res) {
    //res.set('Link', '<views/style.css>; rel=stylesheet')
    //res.set('Refresh', '5; url=https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    res.render('index')
})

app.get('/auth', (req, res) => {
    const secretKey = req.query.secretKey
    console.log(secretKey)
    const secret = {
        secret: secretKey
    }
    const authToken = jwt.sign(secret, process.env.SECRET_TOKEN)
    if (secretKey == 'nope') {
        //const authToken = jwt.sign(secretJson, process.env.SECRET_TOKEN)
        res.json({
            token: authToken
        })
    } else {
        res.status(401).json({
            error: 'User Not Permitted',
            message: 'Feeling Lucky\? Contact Me For Access.',
            telegram: '\@zym1c'
        })
    }
})

const allowed = [{
        id: 1,
        username: 'lol'
    },
    {
        id: 2,
        username: 'bill'
    },
    {
        id: 3,
        username: 'ted'
    }
];

function userExists(username) {
    return allowed.some(function (el) {
        return el.username === username;
    });
}

//let adyenKey = []
app.post('/adyen', authenticate, (req, res) => {
    const adyenKey = req.body.key
    const adyenVersion = req.body.version
    const type = req.body.type
    const cc = req.body.card
    const cvc = req.body.cvc
    const month = req.body.month
    const year = req.body.year

    if (adyenVersion == "18") {
        const options = {};
        const cardData = {
            number: cc, // 'xxxx xxxx xxxx xxxx'
            cvc: cvc, //'xxx'
            holderName: "Jason Rott", // 'John Doe'
            expiryMonth: month, //'MM'
            expiryYear: year, // 'YYYY'
            generationtime: new Date().toISOString()
        };
        const cseInstance = adyen1.createEncryption(adyenKey, options);
        
        if (type == "I") {
            const encryptedCard = cseInstance.encrypt(cc);
            const encryptedCvc = cseInstance.encrypt(cvc);
            const encryptedMonth = cseInstance.encrypt(month);
            const encryptedYear = cseInstance.encrypt(year);
            res.json({
                encryptedCard: encryptedCard,
                encryptedCvc: encryptedCvc,
                encryptedMonth: encryptedMonth,
                encryptedYear: encryptedYear,
                creator: 'EXO\/Zymic'
            })
        }else{
            
            const dataEncrypted = cseInstance.encrypt(cardData);
            res.json({
                encryptedData: dataEncrypted,
                creator: 'EXO\/Zymic'    
        })
        }
    }
    else if (adyenVersion == "22") {
        const options = {};
        const cardData = {
            number: cc, // 'xxxx xxxx xxxx xxxx'
            cvc: cvc, //'xxx'
            holderName: "Jason Rott", // 'John Doe'
            expiryMonth: month, //'MM'
            expiryYear: year, // 'YYYY'
            generationtime: new Date().toISOString()
        };
        const cseInstance = adyen2.createEncryption(adyenKey, options);
        if (type == "I") {
            const encryptedCard = cseInstance.encrypt(cc);
            const encryptedCvc = cseInstance.encrypt(cvc);
            const encryptedMonth = cseInstance.encrypt(month);
            const encryptedYear = cseInstance.encrypt(year);
            res.json({
                encryptedCard: encryptedCard,
                encryptedCvc: encryptedCvc,
                encryptedMonth: encryptedMonth,
                encryptedYear: encryptedYear,
                creator: 'EXO\/Zymic'
            })
        }else{
            
            const dataEncrypted = cseInstance.encrypt(cardData);
            res.json({
                encryptedData: dataEncrypted,
                creator: 'EXO\/Zymic'    
        })
        }
    }
    else if (adyenVersion == "23") {
        const options = {};
        const cardData = {
            number: cc, // 'xxxx xxxx xxxx xxxx'
            cvc: cvc, //'xxx'
            holderName: "Jason Rott", // 'John Doe'
            expiryMonth: month, //'MM'
            expiryYear: year, // 'YYYY'
            generationtime: new Date().toISOString()
        };
        const cseInstance = adyen3.createEncryption(adyenKey, options);
        if (type == "I") {
            const encryptedCard = cseInstance.encrypt(cc);
            const encryptedCvc = cseInstance.encrypt(cvc);
            const encryptedMonth = cseInstance.encrypt(month);
            const encryptedYear = cseInstance.encrypt(year);
            res.json({
                encryptedCard: encryptedCard,
                encryptedCvc: encryptedCvc,
                encryptedMonth: encryptedMonth,
                encryptedYear: encryptedYear,
                creator: 'EXO\/Zymic'
            })
        }else{
            
            const dataEncrypted = cseInstance.encrypt(cardData);
            res.json({
                encryptedData: dataEncrypted,
                creator: 'EXO\/Zymic'    
        })
        }
    }
    else if (adyenVersion == "24") {
        const options = {};
        const cardData = {
            number: cc, // 'xxxx xxxx xxxx xxxx'
            cvc: cvc, //'xxx'
            holderName: "Jason Rott", // 'John Doe'
            expiryMonth: month, //'MM'
            expiryYear: year, // 'YYYY'
            generationtime: new Date().toISOString()
        };
        const cseInstance = adyen4.createEncryption(adyenKey, options);
        if (type == "I") {
            const encryptedCard = cseInstance.encrypt(cc);
            const encryptedCvc = cseInstance.encrypt(cvc);
            const encryptedMonth = cseInstance.encrypt(month);
            const encryptedYear = cseInstance.encrypt(year);
            res.json({
                encryptedCard: encryptedCard,
                encryptedCvc: encryptedCvc,
                encryptedMonth: encryptedMonth,
                encryptedYear: encryptedYear,
                creator: 'EXO\/Zymic'
            })
        }else{
            
            const dataEncrypted = cseInstance.encrypt(cardData);
            res.json({
                encryptedData: dataEncrypted,
                creator: 'EXO\/Zymic'    
        })
        }
    }
    else {
        const options = {};
        const cardData = {
            number: cc, // 'xxxx xxxx xxxx xxxx'
            cvc: cvc, //'xxx'
            holderName: "Jason Rott", // 'John Doe'
            expiryMonth: month, //'MM'
            expiryYear: year, // 'YYYY'
            generationtime: new Date().toISOString()
        };
        const cseInstance = adyen5.createEncryption(adyenKey, options);
        if (type == "I") {
            const encryptedCard = cseInstance.encrypt(cc);
            const encryptedCvc = cseInstance.encrypt(cvc);
            const encryptedMonth = cseInstance.encrypt(month);
            const encryptedYear = cseInstance.encrypt(year);
            res.json({
                encryptedCard: encryptedCard,
                encryptedCvc: encryptedCvc,
                encryptedMonth: encryptedMonth,
                encryptedYear: encryptedYear,
                creator: 'EXO\/Zymic'
            })
        }else{
            
            const dataEncrypted = cseInstance.encrypt(cardData);
            res.json({
                encryptedData: dataEncrypted,
                creator: 'EXO\/Zymic'    
        })
        }
        
    }
       
})


function authenticate(req, res, next) {
    const bearer = req.headers['authorization'] && req.headers['authorization'].split(' ')[1]
    if (bearer == null) return res.status(401).send('Not Authenticated')

    const verify = jwt.verify(bearer, process.env.SECRET_TOKEN, (err, secret) => {
        if (err) return res.status(403).send('Token could not be verified')
        req.secret = secret
        next()
    })
}
