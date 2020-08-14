const express = require('express');
const server = express();
const nunjucks = require('nunjucks');
const { pageIndex, pageContacts } = require('./pages');

nunjucks
.configure('src/views', {
    express: server,
    noCache: true
});


server 
.get('/', pageIndex)
.get('/contatos', pageContacts)

.listen(5200);

