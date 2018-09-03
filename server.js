"use strict"

let ccxt = require("ccxt")
let cf = require("./conf")
let fs = require("fs")
let io = require("./io")

let dataDir = cf.conf.dataDir

if (!fs.existsSync(dataDir)) {
    io.mkDirs(dataDir)

}

for (let venue of cf.venues.keys()) {
    console.log(cf.venues.get(venue))
}

