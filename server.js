const express = require("express"); // express 패키지 import

const app = express();

// API Key를 별도 관리 : dot(.)env 활용, .env라는 파일이 key를 보관하고, dotenv가 .env파일을 활용해서, process.env 객체에 포함시킴.
const dotenv = require('dotenv');
dotenv.config();

const clientIid = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET

// condejs 서버가 또 다른 client가 되어 Naver 서버에 요청을 보내기 위해 사용.
const request = require('request');

// express의 static 미들웨어 활용
app.use(express.static('public'))