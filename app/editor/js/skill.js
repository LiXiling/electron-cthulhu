var skills = [
    "Archäologie (01%)",
    "Charme (15%)",
    "Einschüchtern (15%)",
    "Elektrotechnik (07%)",
    "Erste Hilfe (30%)",
    "Fahren (20%)",
    "Fingerfertigkeit (10%)",
    "Geschichte (05%)",
    "Klettern (20%)",
    "Lauschen (20%)",
    "Mechanik (10%)",
    "Medizin (01%)"
];

for (var i = 1; i <= skills.length; i++) {
    var s = skills[i - 1];

    $('#form_sk1').append(
        "<div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">" +
        "<input class=\"mdl-textfield__input\" type=\"text\" pattern=\"-?[0-9]*(\.[0-9]+)?\" id=\"tf_sk" + i + "\">" +
        "<label class=\"mdl-textfield__label\" for=\"tf_sk" + i + "\">" + s + "</label>" +
        "<span class=\"mdl-textfield__error\">Input is not a number!</span>" +
        "</div>"
    )

    componentHandler.upgradeDom();
}