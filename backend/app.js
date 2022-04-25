const express = require('express')
const cors = require('cors')

const bodyParser = require("body-parser")
const mongoose = require("mongoose")
// const  Gama = require('./model/data')
const methodOverride = require('method-override')
// const   Posts = require('./model/posts')
const Data = require('./model/userData')



const port = 5000




const app = express()
app.use(cors())
app.use(methodOverride())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send('Hello World!')
})



// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

const MONGO_URI = 'mongodb+srv://anshu:Anshu123456789@project1.eti09.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(process.env.MONGO_URI || MONGO_URI,{
    useNewUrlParser:true
})
    .then(()=>{console.log("Connected to database")}).catch((err)=>{
    console.log("Error")
});


// // ..............xxxx...search router.................
// app.post("/add",  async(req, res) => {
//   try {
      
//       await   Data.create({
//         title:req.body.title,
//         text :req.body.text,
//         discrption:req.body.discrption,
//         para:req.body.para,
//       })
//       return res.status(200).json({
//           status:"Success"
//       })
//   } catch (e) {
//       console.log(e);
//       return res.status(500).json({
//           status: "Failed"
//       })
//   }
// })
//.................. post router..........................
// app.post("/post",  async(req, res) => {
//   try {
      
//       await  Posts.create({
//         text :req.body.text,
//         discrption:req.body.discrption,
//         para:req.body.para,
//       })
//       return res.status(200).json({
//           status:"Success"
//       })
//   } catch (e) {
//       console.log(e);
//       return res.status(500).json({
//           status: "Failed"
//       })
//   }
// })



app.get('/data',async(req,res)=>{
  const posts = await Data.find({})
  console.log(posts)
  res.status(200).json({
      posts
  }) 
})

app.get('/data',async(req,res)=>{
  const { q } = req.query;
  const posts = await Data.find({
    title: { $regex: `^${q}`, $options: "$i" },
  });
  res.status(200).json({
      posts
  }) 
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})