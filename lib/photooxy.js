/*
	Photooxy By NaufalCream
*/
const fetch = require("node-fetch");
const fs = require('fs')
const chalk = require('chalk')
const cheerio = require("cheerio");
const cookie = require("cookie");
const axios = require("axios");
const FormData = require("form-data");
/**
 * Photooxy Scraper
 * @function
 * @param {String} url - Your phootoxy url, example https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html.
 * @param {String[]} text - Text (required). example ["text", "text 2 if any"]
 */


async function post(url, formdata = {}, cookies) {
  let encode = encodeURIComponent;
  let body = Object.keys(formdata)
    .map((key) => {
      let vals = formdata[key];
      let isArray = Array.isArray(vals);
      let keys = encode(key + (isArray ? "[]" : ""));
      if (!isArray) vals = [vals];
      let out = [];
      for (let valq of vals) out.push(keys + "=" + encode(valq));
      return out.join("&");
    })
    .join("&");
  return await fetch(`${url}?${body}`, {
    method: "GET",
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      Cookie: cookies,
    },
  });
}

async function maker(url, text) {
  if (!/^https:\/\/textpro\.me\/.+\.html$/.test(url))
    throw new Error("Url Salah!!");
  const geturl = await fetch(url, {
    method: "GET",
    headers: {
      "User-Agent": "GoogleBot",
    },
  });
  const caritoken = await geturl.text();
  let hasilcookie = geturl.headers
    .get("set-cookie")
    .split(",")
    .map((v) => cookie.parse(v))
    .reduce((a, c) => {
      return { ...a, ...c };
    }, {});
  hasilcookie = {
    __cfduid: hasilcookie.__cfduid,
    PHPSESSID: hasilcookie.PHPSESSID,
  };
  hasilcookie = Object.entries(hasilcookie)
    .map(([name, value]) => cookie.serialize(name, value))
    .join("; ");
  const $ = cheerio.load(caritoken);
  const token = $('input[name="token"]').attr("value");
  const form = new FormData();
  if (typeof text === "string") text = [text];
  for (let texts of text) form.append("text[]", texts);
  form.append("submit", "Go");
  form.append("token", token);
  form.append("build_server", "https://textpro.me");
  form.append("build_server_id", 1);
  const geturl2 = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      Cookie: hasilcookie,
      ...form.getHeaders(),
    },
    body: form.getBuffer(),
  });
  const caritoken2 = await geturl2.text();
  const token2 = /<div.*?id="form_value".+>(.*?)<\/div>/.exec(caritoken2);
  if (!token2) throw new Error("Token Tidak Ditemukan!!");
  const prosesimage = await post(
    "https://textpro.me/effect/create-image",
    JSON.parse(token2[1]),
    hasilcookie
  );
  const hasil = await prosesimage.json();
  return `https://textpro.me${hasil.fullsize_image}`;
}

async function photooxy(url, text) {
  if (!/^https:\/\/photooxy\.com\/.+\.html$/.test(url))
    throw new Error("Invalid URL");
  let nomor = 0;
  const form = new FormData();
  if (typeof text === "string") text = [text];
  for (let texts of text) {
    nomor += 1;
    form.append(`text_${nomor}`, texts);
  }
  form.append("login", "OK");
  let cari = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "/",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      ...form.getHeaders(),
    },
    body: form.getBuffer(),
  });
  let html = await cari.text();
  let $ = cheerio.load(html);
  const hasil = $('a[class="btn btn-primary"]').attr("href");
  return hasil;
}

function gaspost(url, form1, headers = {}) {
  let e = encodeURIComponent
  pormdata = form1.replace('{"radio":"', '"radio=').replace('"}', '"')
  tespor = 'radio0=radio=ok'
  const formdata = JSON.parse(form1)
  let body = Object.keys(formdata).map(key => {
    let vals = formdata[key]
    let isArray = Array.isArray(vals)
    let keyq = e(key + (isArray ? '[]' : ''))
    if (!isArray) vals = [vals]
    let out = []
    for (let valq of vals) out.push(keyq + '=' + e(valq))
    return out.join('&')
  }).join('&')
  body2 = body.split('radio0=%5Bobject%20Object%5D').join('radio0%5Bradio%5D='+formdata.radio0.radio)
  //console.log(formdata)
  return axios(url, {
    method: 'POST',
    headers: {
      accept: '/',
      'accept-language': "en-US,en;q=0.9",
      'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
      ...headers
    },
    data: body2
  })
}
async function ephoto(url, texts = ['text'], radio0) {
  if (!/^https:\/\/ephoto360\.com\/.+\.html$/.test(url)) throw new Error('Invalid URL')
  let res = await axios.get(url,{
    method: 'GET',
    headers: {
      accept: '/',
      'accept-language': "en-US,en;q=0.9",
      'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
    }})
  let html = res.data
  //console.log(res.headers)
  const cfuid = res.headers['set-cookie'][0].split(',').map(v => cookie.parse(v)).reduce((a, c) => { return {...a, ...c} }, {})
  //console.log('ini cfuid == ' + cfuid)
  const phpses = res.headers['set-cookie'][0].split(',').map(v => cookie.parse(v)).reduce((a, c) => { return {...a, ...c} }, {})
  cookies = {
    _cfduid: cfuid._cfduid,
    PHPSESSID: phpses.PHPSESSID,
  }
  let forms = {
    submit: 'Create a photo',
    token: /name="token".*value="(.+?)"/.exec(html)[1],
    build_server: 'https://s1.ephoto360.com/',
    build_server_id: 1,
    "radio0[radio]": radio0
  }
  let form = new FormData
  if (typeof texts === 'string') texts = [texts]
  for (let text of texts) form.append('text[]', text)
  for (let key in forms) form.append(key, forms[key])

  cookies = Object.entries(cookies).map(([ name, value ]) => cookie.serialize(name, value)).join('; ')
  //console.log(cookies)
  let res2 = await axios(url, {
    method: 'POST',
    headers: {
      accept: '/',
      'accept-language': "en-US,en;q=0.9",
      ...form.getHeaders(),
      cookie: cookies,
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
    },
    data: form.getBuffer()
  })
  let html2 = res2.data
   let form_value = /name="form_value_input".*value="(.+?)"/.exec(html2)
  if (!form_value) throw new Error('Token invalid? ' + /No token/i.test(html2))
   let tokenval = form_value[1].split('&quot;').join('"')
  let res3 = await gaspost('https://ephoto360.com/effect/create-image', tokenval, {
    cookie: cookies
  })
  return await res3.data
}

module.exports = { maker, photooxy, ephoto }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
