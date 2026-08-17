var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "ch-intro",
  "level": "1",
  "url": "ch-intro.html",
  "type": "Chapter",
  "number": "1",
  "title": "Intro",
  "body": " Intro  TO COMPLETE.  "
},
{
  "id": "ch-responding",
  "level": "1",
  "url": "ch-responding.html",
  "type": "Chapter",
  "number": "2",
  "title": "Responding to Student Questions",
  "body": " Responding to Student Questions  TO COMPLETE.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
