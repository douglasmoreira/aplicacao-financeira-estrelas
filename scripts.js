function obtemObjetivosDoBack(){
    $.getJSON( "http://localhost:8080/usuarios/1/objetivos", function( data ) {
        var item = [];

        console.log(data)

        $.each(data, function( key, val ){
           item.push( "<tr> " +
           "<td class='text-light' id = '" + key + "' >" + val.nome + "</td> " + 
           "<td class='text-light' id = '" + key + "' >" + val.valorTotal + "</td> " + 
           "<td class='text-light' id = '" + key + "' >" + val.numeroInvestimentos + "</td> " +
           "</tr>" )
        }) 
        
        $("<table/>", {
            "class": "my-new-line",
            html: item.join( "" )
        }).appendTo("body");
    })
}

function obtemAvaliacaoDoBack(){
    $.getJSON("http://localhost:8080/usuarios/avaliacoes", function( data ) {
        var itens = []

        console.log( data )

        $.each( data, function(key, val) {
            itens.push("<tr> " +
            "<td class='text-light' id = '" + key + "'>" + val.notaAvaliacao + "</td>" +
            "<td class='text-light' id = '" + key + "'>" + val.comentario +"</td>" +
            "</tr>")
        })

        $("<table/>", {
            "class": "my-new-line",
            html: itens.join( "" ) 
        }).appendTo( "body" )
    })
}

function obtemDespesasDoBack() {
    $.getJSON("http://localhost:8080/usuarios/1/despesas", function( data ) {
        var itens = []

        console.log(data)

        $.each( data, function( key, val) {
            itens.push("<tr> " +
            "<td class='text-light' id = '"+ key + "'> " + val.idDespesa + "</td> "+
            "<td class='text-light' id = '"+ key + "'> " + val.valor +" </td>" + 
            "<td class='text-light' id = '" + key + "'> " + val.vencimento + " </td>" +
            "<td class='text-light' id = '" + key + "'> " + val.tipoDespesa + " </td>" +
            " </tr>")
        })

        $("<table/>", {
            "class": "my-new-line",
            html: itens.join( "" )
        }).appendTo( "body" )
    })
}

function obtemDependentesDoBack() {
    $.getJSON("http://localhost:8080/usuarios/1/dependentes", function (data ) {
        var itens = []

        console.log( data )

        $.each(data, function(key, val) {
            itens.push( "<tr>" +
            "<td class='text-light' id = '" + key + "'> " + val.nome +" </td>" + 
            "<td class='text-light' id = '" + key + "'> " + val.parentesco + " </td>" +
            "<td class='text-light' id = '" + key + "'> " + val.renda + " </td>" +
            " </tr>")
        })

        $("<table/>", {
            "class": "my-new-line",
            html: itens.join( "" )
        }).appendTo("body")
    })
}

function obtemSugestoesDoBack() {
    $.getJSON("http://localhost:8080/sugestoes", function( data ) {
        var itens = []

        console.log( data )

        $.each(data, function(key, val) {
            itens.push( "<tr> " +
            "<td class='text-light' id = '" + key + "'> " + val.idSugestao + "</td> "+
            "<td class='text-light' id = '" + key + "'> " + val.titulo +" </td>" + 
            "<td class='text-light' id = '" + key + "'> " + val.descricao + " </td>" +
            "<td class='text-light' id = '" + key + "'> " + val.tipoSugestao + " </td>" +
            "</tr>")
        })

        $("<table/>", {
            "class": "my-new-line",
            html: itens.join( "" )
        }).appendTo("body")
    })
}