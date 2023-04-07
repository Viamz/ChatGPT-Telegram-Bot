require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
const TAK = process.env.TAK;

const bot = new TelegramBot(TAK, { polling: true });

bot.onText(/\/bitcoin/, async (msg, match) => {
  const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/USD.json');
  const price = response.data.bpi.USD.rate;
  bot.sendMessage(msg.chat.id, `En este momento el Bitcoin esta cotizando a: ${price} USD`);
});

// bot.onText(/\/ethereum/, async (msg, match) => {
//     const response = await axios.get('https://api.coindesk.com/v1/epi/currentprice/USD.json');
//     const price = response.data.bpi.USD.rate;
//     bot.sendMessage(msg.chat.id, `En este momento el Bitcoin esta cotizando a: ${price} USD`);
//   });