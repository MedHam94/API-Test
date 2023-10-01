const express = require('express')
const app = express()
const PORT = 8000

const  rappers = {
    'savage 21' : {
        'age': 29,
        'birthName' : 'Shea Med',
        'location' : 'London, England'
    },
    'el grande toto' : {
        'age' : 29,
        'birthName' : 'Taha',
        'location' : 'Casablanca, Morocco'
    }, 
    'unknown' : {
        'age' : 0,
        'birthName' : 'unknown',
        'location' : 'unknown'
    } 
    
}





app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res)=> {
    let name = req.params.name.toLowerCase()
    
    if(rappers[name]){
        res.json(rappers[name])
    }else{
        res.json(rappers['unknown'])
    }
})

app.listen(PORT, ()=> {
    console.log(`the server is connected on ${PORT}`)
})