const http = require('http');
const fs = require('fs');
const con = require("./DBConnection");
const express = require('express');
const app = express();
const path = require("path");
const port = '8081'


// API
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({ apikey: process.env.API_KEY }),
    serviceUrl: process.env.API_URL
});

//ROTAS
app.get('/', (req, res) => {
    res.sendFile("index.html")
});

/*
const server = http.createServer((req, res) => {
    if (req.method == 'GET' && req.url == '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./index.html').pipe(res);

    } else if (req.method == 'GET' && req.url == '/styles/customStyles.css') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream('./styles/customStyles.css').pipe(res);
    } else if (req.method == "GET" && req.url == '/home') {
        res.statusCode == 200;
        res.setHeader('Content-Type', 'application/json');

        var conn = con.getConnection();

        conn.query('SELECT * FROM comments.comments', function(error, results, fields) {
            if (error) throw error;

            var comments = JSON.stringify(results);

            res.end(comments);
        });

        conn.end();
    } else if (req.method == "POST" && req.url == "/insert") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');

        var content = '';
        req.on('data', function(data) {
            content += data;

            var obj = JSON.parse(content);

            console.log("The comment is: " + obj.message);
            var conn = con.getConnection();

            conn.query('INSERT INTO comments.comments (comments.comment) VALUES (?)', [obj.message], function(error, results, fields) {
                if (error) throw error;
                console.log("Success!");
            });

            conn.end();
            res.end("Success!");
        });
    } else if (req.method == "GET" && req.url == '/functions.js') {
        res.writeHead(200, { "Content-Type": "text/javascript" });
        fs.createReadStream("./functions.js").pipe(res);

    } else if (req.method == "POST" && req.url == "/audio") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'audio/x-wav');

        var content = '';
        console.log("OK! (2)");

        req.on('data', function(data) {
            content += data;

            var obj = JSON.parse(content);

            console.log(obj.message);

            const params = {
                text: obj.message,
                voice: 'en-US_AllisonVoice', // Optional voice
                accept: 'audio/wav'
            };

            textToSpeech
                .synthesize(params)
                .then(response => {
                    const audio = response.result;
                    return textToSpeech.repairWavHeaderStream(audio);
                })
                .then(repairedFile => {
                    fs.writeFileSync('audio' + obj.id + '.wav', repairedFile);
                    console.log('audio.wav written with a corrected wav header');
                    //res.write(repairedFile, 'binary');
                    fs.createReadStream('audio' + obj.id + '.wav').pipe(res);
                    res.end("finalizado!");
                })
                .catch(err => {
                    console.log(err);
                    res.end("Erro ao converter áudio!");
                });
        });

    }
});
*/
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})