const fs=require('fs')

const requestHandler=(req,res)=>{
     const url=req.url
     const method=req.method 
     var message;
     res.setHeader('content-Type','text/html')
     if(url=='/'){
     res.write('<!DOCTYPE html>')
     res.write('<html>');
     res.write('<head><title>Enter message</title></head>')
     res.write(`<body><h2 id="head">${message}</h2>
               <form action="/message" method="POST">
               <input type="text" name="message"/>
               <button type="submit">send</button>
               <script src="read.js"></script>
               </form> </body>`)
     res.write('</html')
     return res.end()
     }
     if(url==='/message' && method==='POST'){
     const body=[]
    req.on('data',(chunk)=>{
     body.push(chunk)
    });
     return req.on('end',()=>{
     const parsdBody = Buffer.concat(body).toString()
     message=parsdBody.split('=')[1]
     fs.writeFile('message.txt',message,err=>{
          res.statusCode=302
          res.setHeader('location','/')
          return res.end()
     })
     
 });
     } 
}
// module.exports=requestHandler
// module.exports={
//      handler:requestHandler,
//      text:'this is in routes'
// }
// module.exports.handler=requestHandler
// module.exports.text='this is in routes'

exports.handler=requestHandler
exports.text='this is in routes'