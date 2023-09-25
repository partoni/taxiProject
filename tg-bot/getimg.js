var file_id  = (msg.photo[msg.photo.length-1].file_id);




  var downloadDir = './images';
  let something = ''
  var https = require('https')
  bot.getFileLink(fileId).then( async (fileUri) => {
    var base64Img = require('base64-img');

      let time = process.hrtime();
      let extension = fileUri.split('.').pop();
      let newName = `${time[0]}${time[1]}.${extension}`;
      let file = fs.createWriteStream(`${downloadDir}/${newName}`);
      let request = await https.get(fileUri, (response) => {
         response.pipe(file);

        });
        file.on('finish', () =>{
          console.log('msg.text ='/images/'+newName')
         })
      //

  });


  //-------------second example--------------//

  bot.on('message', async (msg) => {
    if (msg.photo && msg.photo[0]) {
        const image = await bot.getFile({ file_id: msg.photo[0].file_id });
        console.log(image);
    }
});