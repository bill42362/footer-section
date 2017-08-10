// index.js
'use strict';
import Express from 'express';

const WEB_PORT = process.env.PORT || 3000;
const expressStaticRoutes = [
    {path: '/fonts/', serverPath: '/dist/fonts'},
    {path: '/img/', serverPath: '/dist/img'},
    {path: '/css/', serverPath: '/dist/css'},
    {path: '/js/', serverPath: '/dist/js'},
];
const renderApp = `
    <!doctype html>
    <html>
        <head>
            <title>footer-section</title>
            <link rel="stylesheet" href="/css/index.css">
        </head>
        <body>
            <div id="app-root"></div>
            <script type='text/javascript' src="/js/index.js" ></script>
        </body>
    </html>
`;
const app = Express();

app.get('/', (req, res) => { res.send(renderApp); })
expressStaticRoutes.forEach(function(route) {
    app.use(route.path, Express.static(__dirname + route.serverPath));
});
app.listen(WEB_PORT);
