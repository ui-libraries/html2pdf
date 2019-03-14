const fs = require('fs')
const pdf = require('html-pdf')
const options = { 
  format: 'Letter',
  "orientation": "portrait",
  "border": {
    "top": "0.5in",            // default is 0, units: mm, cm, in, px
    "right": "1in",
    "bottom": "2in",
    "left": "1.5in"
  },
}

const html = fs.readFileSync('./king-arthurs-tomb.html', 'utf8')

pdf.create(html, options).toFile('./king-arthurs-tomb.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
})

/*
const doc = new PDFDocument({
  layout: 'portrait',
  size: [563, 750],
  margin: 9
})

doc.pipe(fs.createWriteStream('test.pdf'))
doc.end()
*/