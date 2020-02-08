if (typeof window === 'undefined') {
    global.window = {};
}

const fs = require('fs');
const path = require('path');
const express = require('express');
const { renderToString } = require('react-dom/server');
const SSR = require('../dist/search-server');
let template = fs.readFileSync(path.join(__dirname, '../dist/search.html'), 'utf-8');

const renderMarkup = (str) => {
    return template.replace('<!--template-->', str);
}

const server = (port) => {
    const app = express();

    app.use(express.static('dist'));

    app.get('/search', (req, res) => {
        const html = renderMarkup(renderToString(SSR));
        res.status(200).send(html);
    });

    app.listen(port, () => {
        console.log('Server is running on potr:' + port);
    });
};

server(process.env.PORT || 3000);