module.exports = {
    host: 'localhost',
    port: 80,

    dbHost: 'mongodb://localhost:27017/videos',

    staticFolder: __dirname + '/public/angular',
    indexHtml: __dirname + '/public/angular/index.html',
    
    session: {
        secret: 'subaru forester',
        key: 'sid',
        saveUninitialized: true,
        cookie: {
            httpOnly: true,
            maxAge: 10 * 60 * 60 * 1000
        }
    }
}