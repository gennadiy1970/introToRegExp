const util = require('util');
const fs = require('fs');

const readFile = util.promisify(fs.readFile)
readFile("data.json", "utf8")
    .then(data => JSON.parse(data).filter(el => {
        if( el.name && el.price && el.presents.search(/наличии/ig) > 0) {
            return ({
                "name":  el.name,
                "price": el.price,
                "presents": el.presents
            })
        }
    }))
    .then(data =>   data.map(el => ({
                            "name": el.name.replace(/(&quot;)|(-inch)/ig, "\""),
                            "price": el.price.replace(/\s/,""),
                            "presents":  el.presents
                        })
    ))
    .then(data =>  {
        fs.writeFile('data-ready.json', JSON.stringify( data, null, 4), function(err) {
          if(err) console.error(err);
          else console.log('Data Saved to data.json file');
        })
     })
    .catch(err => console.log(err));
    