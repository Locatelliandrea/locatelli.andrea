function calcola() {
    var km = document.getElementById("idKm").value;
    var temp = document.getElementById("posti");
    var persone = temp.options[temp.selectedIndex].text;
    var costo;
    if (document.getElementById("Prima").checked)
        costo = km * 0.43 * persone;
    else if (document.getElementById("Seconda").checked)
        costo = km * 0.20 * persone;
    document.getElementById("ris").innerHTML = "Costo:" + costo.toFixed(2) + " €";
}