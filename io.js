"use strict"

let fs = require("fs")
let cf = require("./conf")

let mkDirs = (root) => {
    if (!fs.existsSync(root)) {
        fs.mkdirSync(root)
    }
    for (let symbol of cf.venues.keys()) {
        let symbolStr = symbol.replace("/", "-")
        fs.mkdirSync(root + "/" + symbolStr)
        for (let venue of cf.venues.get(symbol)) {
            fs.mkdirSync(root + "/" + symbolStr + "/" + venue)
        }
    }
}

exports.mkDirs = mkDirs