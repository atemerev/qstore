"use strict"

let fs = require("fs")

let conf = JSON.parse(fs.readFileSync("./conf.json", "utf8"))
let symbols = new Map() // symbol -> Set[Venue]
let venues = new Map() // venue -> Set[Symbol]

for (let venue of Object.keys(conf.symbols)) {
    venues.set(venue, new Set(conf.symbols[venue]))
    for (let symbol in symbols) {
        if (!symbols.has(symbol)) {
            symbols.set(symbol, new Set())
        }
        let venueSet = symbols.get(symbol)
        venueSet.add(venue)
    }
}

// Export

exports.conf = conf
exports.symbols = symbols
exports.venues = venues