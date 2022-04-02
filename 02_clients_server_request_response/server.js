const http = require('http');
const fs = require('fs')

const server = http.createServer((req,res) => {
    console.log(req.url,req.method);

    //set header content type
    res.setHeader('Content-Type', 'text/html');
    // res.write('<p>Hello again</p>');
    // res.write('<p>Hello again</p>');
    //we want to read a html file and send the data from that file as a response to the browser

    let path = './views';
    switch(req.url){
        case '/':
            path += '/index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += '/about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', 'about');
            res.end();
            break;
        default:
            path += '/404.html'
            res.statusCode = 404;
            break;
    }


    //send an html file
    fs.readFile(path, (err,data) => {
        if(err){
            console.log(err);
            res.end();
        }else{
            // res.write(data)
            res.end(data)
        }
    })
});

server.listen(3001,'localhost', () =>{
    console.log('listening for requests on port 3001');
});