const { contatos } = require('./db');

function pageIndex(req, res){
    return res.render('index.html');
}

function pageContacts(req, res){
    return res.render('contacts.html', { contatos });
}

module.exports = { 
    pageIndex,
    pageContacts
}