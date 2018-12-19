module.exports = {
    host: 'localhost',
    port: 2500,

    dbHost: 'mongodb://localhost:27017/videos',

    staticFolder: 'ytt-app2',
    indexHtml: '/ytt-app2/index.html',
    
    session: {
        secret: 'subaru forester',
        key: 'sid',
        cookie: {
            httpOnly: true,
            maxAge: null//ms
        }
    }
}