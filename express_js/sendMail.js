import express from "express"
import mailer from "nodemailer"
const app = express()
const pass = '' //password
const from = ''//from email
const transporter = mailer.createTransport({
    service:"", //type
    auth:{
        user:from,
        pass: pass
    }
})

app.use(express.urlencoded({extended:false}))
app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    res.render('mailForm')
})

app.post('/sendMail',(req,res)=>{
    const mailOptions = {
        to:req.body.to,
        from: from,
        subject:req.body.subject,
        text: req.body.message
    }
    transporter.sendMail(mailOptions, (err,info)=>{
        if(err)
            res.send('error while sending mail')
        else
            res.send('Mail Sent')
    })
})

app.listen(3200)