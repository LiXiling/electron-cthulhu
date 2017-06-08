var d3 = require('d3')

d3.xml("rect01.svg").mimeType("image/svg+xml").get(function (error, xml) {
    if (error) throw error;
    document.getElementById('body').appendChild(xml.documentElement);
});