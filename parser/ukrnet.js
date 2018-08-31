const osmosis = require("osmosis");


osmosis
    .get('www.ukr.net')
    .set({'Title': 'title'})   // or alternate: `.find('title').set('Title')`
    .data(console.log)  // will output {'Title': ''UKR.NET: Всі новини України, останні новини дня в Україні та Світі'}
