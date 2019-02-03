module.exports = {
    host: 'localhost',
    port: 80,

    dbHost: 'mongodb://localhost:27017/videos',

    staticFolder: 'ytt-app2',
    indexHtml: '/ytt-app2/index.html',
    
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