{
    "name": "amazon-clone",
    "version": "1.0.0",
    "description": "index.js",
    "scripts": {
        "start": "npm-run-all -p start:frontend start:backend",
        "start:frontend": "cross-env PORT=5000 npm --prefix client run dev",
        "start:backend": "npm --prefix server start",
        "postinstall": "npm i --prefix client && npm i --prefix admin-ui && npm i --prefix server"
    },
    "devDependencies": {
        "cross-env": "^7.0.3",
        "npm-run-all": "^4.1.5"
    }
}