const { ipcRenderer } = require('electron')
const d3 = require('d3')
const fs = require('fs');

let svg;

var c = ipcRenderer.sendSync('get-c-data', 'ping')
readSvg();

function readSvg() {
    fs.readFile('app/img/template.svg', 'utf8', function (err, data) {
        if (err) throw err;

        var keys = Object.keys(c);

        svg = data;
        $('body').append(svg);

        changeCharFields();
        writeSvgFile();
    });
}

function changeCharFields() {
    for (var property in c) {
        d3.select('#ct_' + property).text(c[property]);
    }
}

function writeSvgFile() {
    var svgEdit = document.getElementById("svg_charsheet");
    var serializer = new XMLSerializer();
    var source = serializer.serializeToString(svgEdit);
    source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

    fs.writeFile("out.svg", source, function (err) {
        if (err) throw err;
    });
}