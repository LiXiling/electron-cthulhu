const { ipcRenderer } = require('electron')
const d3 = require('d3')
const fs = require('fs');

let svg;

var c = ipcRenderer.sendSync('get-c-data', 'ping')
read();

function read() {
    fs.readFile('app/img/template.svg', 'utf8', function (err, data) {
        if (err) throw err;

        var keys = Object.keys(c);

        svg = data;
        $('body').append(svg);

        for (var property in c) {
            console.log(property);
            d3.select('#ct_' + property).text(c[property]);
        }
        /**
        d3.select('#ct_name').text(c.name);
        d3.select('#ct_job').text(c.job);
        d3.select('#ct_age').text(c.age);
        d3.select('#ct_origin').text(c.origin);
        d3.select('#ct_str_b').text(c.str_b);
        d3.select('#ct_str_2').text(c.str_2);
        d3.select('#ct_str_5').text(c.str_5);
         */
        var svgEdit = document.getElementById("svg_charsheet");
        var serializer = new XMLSerializer();
        var source = serializer.serializeToString(svgEdit);
        source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

        fs.writeFile("app/test.svg", source, function (err) {
            if (err) throw err;
        });
    });
}

