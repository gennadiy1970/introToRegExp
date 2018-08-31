const osmosis = require("osmosis");
const fs = require('fs');
const savedData = [];

osmosis
  .get("https://prom.ua/search?search_term=macbook")
  .find(".x-catalog-gallery__list")
  .find(".x-gallery-tile__content")
  .set(
      { 
        "name" : "span[itemprop='name']", 
        "price":".x-gallery-tile__price span",
        "presents": ".x-product-presence"
      }
     )
  .data(function(data) {
    savedData.push(data);
 })
  .done(function() {
    fs.writeFile(
      'data.json', 
      JSON.stringify( savedData, null, 4), 
      (err) => {
        if(err) {console.error(err);}
        else {console.log('Data Saved to data.json file');}
    })
 });
