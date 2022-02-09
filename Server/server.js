const express=require('express')
const app=express()
const PORT=3001
const db=require('./config/db')
const cors=require('cors')
app.use(express.json())
app.use(cors())
app.get('/' ,(req,res)=> {
    res.send("Hello world")
});
app.get('/api/getFromID/:id',(req,res)=>{
    const id=req.params.id
    console.log(req.params.id)
    db.query("SELECT * from posts WHERE id = ?",id,(err,result)=>{
        if(err){
            console.log(err);
        }
        console.log(result)
        res.send(result);
    })
})
app.post('/api/update',(req,res)=>{
    const id=req.body.id
    const title=req.body.title
    const descp=req.body.descp
    const createdby=req.body.createdby
    db.query("update posts set title=?,descp=?,createdby=? where id=?",[title,descp,createdby,id],(err,result)=>{
        if(err){
            console.log(err)
        }
        console.log(result)
    })

})
app.get('/api/delete/:id',(req,res)=>{
    console.log("in delete")
    const id=req.params.id
    console.log(id)
    db.query("delete from posts where id=?",id,(err,result)=>{
        if(err){
            console.log(err)
        }
        console.log(result)
    })
})
app.get('/api/get',(req,res)=>{
    db.query("SELECT * from posts",(err,result)=>{
        if(err){
            console.log(err)
        }
        //console.log(result)
        res.send(result)
    })
})
app.post('/api/create', (req,res)=>{
    const title=req.body.title
    const descp=req.body.desc
    const createdby=req.body.createdby
    //console.log(title+desc+createdby)
    db.query("INSERT INTO posts (title,descp,createdby) VALUES (?,?,?)",[title,descp,createdby],(err,result)=>{
        if(err){
            console.log(err)
        }
        console.log(result)
    })
});
app.listen(PORT,()=>{
    console.log('Server running on port',PORT)
});