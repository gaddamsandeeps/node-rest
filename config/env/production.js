module.exports = {
    app: {
        description: "Production environment is up..."
    },
    restUrl: {
        host: 'http://192.168.6.191:8080/cds-rest/api/v1/', // here only the domain name        
        //port: '443',        
        contentType: {
            "Content-Type": "application/json"
        }
    },
    image: {
        rootPath: "./public/images/",
        path: "profile/"
    },
    db: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'cds'
    },
    logger: {
        logAppender: "file",
        logFilename: "/soft/nodeserver/logs/prod/CDS.log",
        logCategory: "CDS",
        logLevel: "ERROR",
        maxLogSize: "75MB",
        backups: 10
    }

};
