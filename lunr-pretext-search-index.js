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
  "id": "ch-grading",
  "level": "1",
  "url": "ch-grading.html",
  "type": "Chapter",
  "number": "3",
  "title": "Grading Student Work",
  "body": " Grading Student Work  TO COMPLETE.  "
},
{
  "id": "ch-classmanage1",
  "level": "1",
  "url": "ch-classmanage1.html",
  "type": "Chapter",
  "number": "4",
  "title": "Classroom Management, Part I",
  "body": " Classroom Management, Part I  TO COMPLETE.  "
},
{
  "id": "ch-policies",
  "level": "1",
  "url": "ch-policies.html",
  "type": "Chapter",
  "number": "5",
  "title": "UK Policies, Syllabi, TA Evals",
  "body": " UK Policies, Syllabi, TA Evals  TO COMPLETE.  "
},
{
  "id": "ch-assessment",
  "level": "1",
  "url": "ch-assessment.html",
  "type": "Chapter",
  "number": "6",
  "title": "Assessment",
  "body": " Assessment  TO COMPLETE.  "
},
{
  "id": "ch-createhomework",
  "level": "1",
  "url": "ch-createhomework.html",
  "type": "Chapter",
  "number": "7",
  "title": "Creating and Selecting Homework and Exams",
  "body": " Creating and Selecting Homework and Exams  TO COMPLETE.  "
},
{
  "id": "ch-classmanage2",
  "level": "1",
  "url": "ch-classmanage2.html",
  "type": "Chapter",
  "number": "8",
  "title": "Classroom Management, Part II",
  "body": " Classroom Management, Part II  TO COMPLETE.  "
},
{
  "id": "ch-mckt",
  "level": "1",
  "url": "ch-mckt.html",
  "type": "Chapter",
  "number": "9",
  "title": "Mathematical Content Knowledge for Teaching",
  "body": " Mathematical Content Knowledge for Teaching  TO COMPLETE.  "
},
{
  "id": "ch-ai",
  "level": "1",
  "url": "ch-ai.html",
  "type": "Chapter",
  "number": "10",
  "title": "AI and Mathematics",
  "body": " AI and Mathematics  TO COMPLETE.  "
},
{
  "id": "ch-supportiveclassrooms",
  "level": "1",
  "url": "ch-supportiveclassrooms.html",
  "type": "Chapter",
  "number": "11",
  "title": "Creating Supportive Classrooms",
  "body": " Creating Supportive Classrooms  TO COMPLETE.  "
},
{
  "id": "ch-teachingstatements",
  "level": "1",
  "url": "ch-teachingstatements.html",
  "type": "Chapter",
  "number": "12",
  "title": "Teaching Statements",
  "body": " Teaching Statements  TO COMPLETE.  "
},
{
  "id": "ch-statementworkshop",
  "level": "1",
  "url": "ch-statementworkshop.html",
  "type": "Chapter",
  "number": "13",
  "title": "Teaching Statement Workshop",
  "body": " Teaching Statement Workshop  TO COMPLETE.  "
},
{
  "id": "ch-finaldiscussion",
  "level": "1",
  "url": "ch-finaldiscussion.html",
  "type": "Chapter",
  "number": "14",
  "title": "Final Discussion Day",
  "body": " Final Discussion Day  TO COMPLETE.  "
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
