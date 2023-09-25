const TelegramApi = require('node-telegram-bot-api');
const fs = require('fs');
const fetch = require('node-fetch');

const db = require('./db')

// const client = new Client()
const token ="5132221550:AAGrAEANR_sbB9hSj6OE1VVc5Hq80Obg52s"

const bot = new TelegramApi(token,{polling:true})

const photos=[]

bot.on('message', async (msg) => {
        // await db.authenticate()
        // await db.sync()
        // if(msg.text==='/start'){
        //     bot.sendMessage(msg.from.id,`Привет ${msg.from.first_name}`,{
        //         reply_markup: JSON.stringify({
        //             inline_keyboard:[[{text:'Заявка',callback_data:'/job'},{text:'Добавить фото',callback_data:'/photo'}]]
        //         })
        //         })
        // }
        if(msg.text==='/start'){
            console.log('menu');
            bot.sendMessage(msg.from.id,`Привет ${msg.from.first_name}`,{
                reply_markup: JSON.stringify({
                    keyboard:[
                        [{text:'Заявка'},{text:'Добавить фото'}],
                        [{text:'Актуальная информация'}]
                    ],
                resize_keyboard: true

                })
                })
        }
        const driver = await db.query('SELECT * from drivers')
       

    if (msg.photo && msg.photo[0]) {
        // console.log('___photo___----',msg.photo);
        // console.log('___AmouNT---photo___----',msg.photo.length);

        const image = await bot.getFile( msg.photo[3].file_id );
        await fetch('http://localhost:8080/api/bot/photo',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
              body:JSON.stringify({path:image.file_path,driver:msg.chat.id})
        }).then(data=>data.json())
        .then(driver=>bot.sendMessage(msg.from.id,`ваш авто${driver.auto}`))
        //  request(`https://api.telegram.org/file/bot${token}/${image.file_path}`, function (error, response, body) {
        //     console.error('error:', error); // Print the error if one occurred
        //     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //     console.log('body:', body); // Print the HTML for the Google homepage.
        //   });
        // await db.query("UPDATE drivers set phone=$1 where id=$2",[image.file_path,msg.from.id])need to send with msg.from.id!!!!
    //    await fetch(`https://api.telegram.org/file/bot${token}/${image.file_path}`)
    //    .then(res =>
		// res.body.pipe(fs.createWriteStream('./photo/image.jpg')))
        // https://api.telegram.org/file/bot<token>/<file_path>
        bot.sendMessage(msg.chat.id,'Спасибо')
    }
   if(msg.text==='Добавить фото'){
    bot.sendMessage(msg.chat.id,'Пожалуйста загрузите фотографии')
   }
   if(msg.text==='Актуальная информация'){
    bot.sendMessage(msg.chat.id,'Информация для сотрудничества')
   }
   if(msg.text==='Добавить фото'){
    console.log('добавить фото');
   }
});

bot.on('callback_query', async msg => {
    const data = msg.data;
    const chatId = msg.message.chat.id;
    if (data === '/photo') {
        bot.sendMessage(chatId,'пожалуйста добавьте фото')
    }
    if (data === '/info') {
        bot.sendMessage(chatId,'Информация для устройства!!!!!')
    }
    
})
// bot.on('message',(msg)=>{
//     let url = ()=>  fetch(`https://api.telegram.org/bot${token}/getFile?file_id=${msg.photo.file_id}`)
//     url().then(data=>console.log('all is working',data))
    
// })

// bot.on("photo",(img)=>{
//     console.log(img);
// })