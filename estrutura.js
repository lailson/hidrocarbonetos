function estrutura(){
    var carbonos = document.getElementById('carbono').value
    var ligacao = document.getElementById('ligacao').value
    var carbonoligacao = document.getElementById('carbonoligacao').value
    var cadeia = document.getElementById('cadeia').value
    var pergunta = document.getElementById('pergunta').value
    var tipo = document.getElementById('tipo').value
    var ramificacao = document.getElementById('ramificacao').value
    

    var nom = ""
    var lig = ""
    var cic = ""
    var ramif = ""
    var pref = ""
    var inf = ""
    var perg = ""

    if (carbonos == '1') {
        nom = "met"
    }
    else if (carbonos == '2') {
        nom = "et"
    }
    else if (carbonos == 3) {
        nom = "prop"
    }
    else if ( carbonos == 4 ) { 
        nom = "but"
    }
    else if ( carbonos == 5 ) { 
        nom = "pent"
    }
    else if ( carbonos == 6 ) { 
        nom = "hex"
    }
    else if ( carbonos == 7 ) { 
        nom = "hept"
    }
    else if ( carbonos == 8 ) { 
        nom = "oct"
    }
    else if ( carbonos == 9 ) { 
        nom = "non"
    }
    else if ( carbonos == 10 ) {    
        nom = "dec"
    }
    else{
        console.log('Erro')
    }


    if (tipo == 1) {
        lig = "ano"
    }
    else if (tipo == 2){
        lig = "eno"
    }
    else if (tipo == 3){
        lig = "ino"
    }
    else {
        console.log('Erro')
    }

    
    if (cadeia == 1) {
        cic = " "
    }
    else if ( cadeia == 2 ) {
        cic = "ciclo"
    }
    else{
        console.log('Erro')
    }

    if (pergunta == '1') {
        perg = "benzeno"
    }
    else if ( pergunta == '2' ){
        console.log("")
    }
    else {
        console.log("Error")
    }



    if (tipo == 1){
        ramif = "metil-"
    }
    else if (tipo == 2){
        ramif = "etil-"
    }
    else if (tipo == 3){
        ramif = "propil-"
    }
    else if (tipo == 4){
        ramif = "isopropil-"
    }
    else if (tipo == 5){
        ramif = "butil-"
    }
    else if (tipo == 6){
        ramif = "sec-butil-"
    }
    else if (tipo == 7){
        ramif = "iso-butil-"
    }
    else if (tipo == 8){
        ramif = "terc-butil-"
    }
    else if (tipo == 9){
        ramif = " "
    }
    else {
        console.log('Erro')
    }


    if (ramificacao == 0){
        pref = ""
    }
    else if (ramificacao == 1){
        pref = "1-"
    }
    else if (ramificacao == 2){
        pref = "2-"
    }
    else if (ramificacao == 3){
        pref = "3-"
    }
    else if (ramificacao == 4){
        pref = "4-"
    }
    else if (ramificacao == 5){
        pref = "5-"
    }
    else if (ramificacao == 6){
        pref = "6-"
    }
    else if (ramificacao == 7){
        pref = "7-"
    }
    else if (ramificacao == 8){
        pref = "8-"
    }
    else if (ramificacao == 9){
        pref = "9-"
    }
    else if (ramificacao == 10){
        pref = "10-"
    }
    else{
        console.log('Erro')
    }



    if (carbonoligacao == 0) {
        inf = ""
    }
    else if (carbonoligacao == 1) {
        inf = "-1-"
    }
    else if (carbonoligacao == 2) {
        inf = "-2-"
    }
    else if (carbonoligacao == 3) {
        inf = "-3-"
    }
    else if (carbonoligacao == 4) {
        inf = "-4-"
    }
    else if (carbonoligacao == 5) {
        inf = "-5-"
    }
    else if (carbonoligacao == 6) {
        inf = "-6-"
    }
    else if (carbonoligacao == 7) {
        inf = "-7-"
    }
    else if (carbonoligacao == 8) {
        inf = "-8-"
    }
    else if (carbonoligacao == 9) {
        inf = "-9-"
    }
    else if (carbonoligacao == 10) {
        inf = "-10-"
    }
    else {
        console.log('Erro')
    }

    resultado = document.getElementById('resultado')
    resultado.textContent= perg+" "+pref+ramif+cic+nom+inf+lig
    console.log(pref+ramif+cic+nom+inf+lig)
}
