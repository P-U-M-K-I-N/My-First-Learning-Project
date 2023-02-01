const express = require('express');
const path = require('path');


const router = express.Router()
const app = express();
const port = 3000;
const indexPage = path.join(__dirname,'index.html');


// app.get("/",(req,res)=>{
//   res.status(200);
//   res.type('text/html')
//   res.sendFile(indexPage);

// })
router.get("/",(req,res)=>{
  res.status(200);
  res.type('text/html')
  res.sendFile(indexPage);

})

app.use(router)

app.listen(port, ()=>{
  console.log('Express กำลังทำงานที่ port : '+ port);
  
})

