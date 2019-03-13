const fs = require('fs')
const pdf = require('html-pdf')
const options = { format: 'Letter' }
const mkdirp = require('mkdirp')

const _ = require('lodash')
const PDFDocument = require('pdfkit')

const html = fs.readFileSync('./defence.html', 'utf8')

pdf.create(html, options).toFile('./defence.pdf', function(err, res) {
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