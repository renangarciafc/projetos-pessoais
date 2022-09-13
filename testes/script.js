
var a = 7;

switch (a) {
    case 1:
        alert("B é maior que A.");
        break;
    case 2:
        alert("A é maior que B.");
        break;
}
/*
window.onload = function() {
    var pessoa = {}

    pessoa.nome = "Renan"
    pessoa.sobrenome = "Garcia"
    pessoa.idade = 19
    pessoa.sexo = "Masculino"

    if (pessoa.nome == "Renan") {
        document.write(`Seu nome é ${pessoa.nome}, você têm ${pessoa.idade} anos e seu sexo é ${pessoa.sexo}, além disso você têm ${pessoa.sobrenome.length} propriedades correto?`);
    }

}
*/
/*
 var nome = prompt("Insira seu nome", "escreva aqui!");
alert(nome);
confirm(`Seu nome é ${nome}?`);
*/

function person(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
}

var renan = new person('renan', 19, 'masculino');

function consoleDate() {
    data = new Date();
    console.log(data);
}

//var txt = document.createTextNode('testando!');
//console.log(a);
//
//var paragraph = document.createElement('p');
//paragraph.appendChild(txt);
//var c = document.getElementsByTagName('form');
//var body = document.getElementsByTagName('body');

//c[0].appendChild(paragraph);

//body[0].insertBefore(paragraph, c[0]);

//c[0].insertAdjacentElement("beforebegin", paragraph);
//c[0].insertAdjacentElement("afterbegin", paragraph);
//c[0].insertAdjacentElement("beforeend", paragraph);
//c[0].insertAdjacentElement("afterend", paragraph);

//var fieldset = document.getElementsByTagName('fieldset');
//fieldset[0].parentNode.removeChild(paragraph);

var body = document.getElementsByTagName('body');
var form = document.getElementsByTagName('form');

//body.classList.add()

//botao = document.getElementsByTagName('button');
//botao[0].addEventListener('click', show);

function testando() {
    $('nome').val();
}

function bota() {
        $('fieldset').fadeOut('slow');
        var nome = $('#nome').val();
        var email = $('#email').val();
        //validando o campo nome
        if(nome.split(' ').length >= 2) {
            var nome_separado = nome.split(' ');
            alert(`${nome_separado[0].toUpperCase().substring(0,1) + nome_separado[0].substring(1,nome_separado[0].length)}, campo nome válidado com sucesso!`);
        }
        else{alert('Informe o nome completo por gentileza!')
        $('#nome').css('border', '2px solid red');
        $('#nome').css('color', 'red');
        $('#nome').val('Nome inválido!');
        $('#nome').css('font-weight', 'bold');
        $('#nome').data('inválido', 'true');
        resetar();
        };
        //validando email
        if (email != "") {
            to_validation = email.toString();
            if(email.match(/^([a-z0-9-_]{1,})+@+([a-z]{1,})+.+([a-z]{1,})$/) == null) {
                alert('Favor informar um email válido!');
                $('#email').css('border', '2px solid red');
                $('#email').css('color', 'red');
                $('#email').val('email inválido!');
                $('#email').css('font-weight', 'bold');
                $('#email').data('inválido', 'true');
                resetar();
            }
            else{alert('Campo email válidado com sucesso!')}
        }
        else {alert('Campo email obrigatório!')}
        setTimeout($('fieldset').fadeIn('slow'),2000);

}

function resetar() {
    $('#nome').click(function() {
        $(this).css('color', 'black');
        $(this).css('font-weight', 'normal');
        $(this).val('');
        $(this).unbind('click', resetar());
    });
    $('#email').click(function() {
        $(this).css('color', 'black');
        $(this).css('font-weight', 'normal');
        $(this).val('');
        $(this).unbind('click', resetar());
    });
    $('#nome').change(function() {
        $(this).css('border', '1px solid rgb(100, 100, 255)');
        $(this).css('color', 'black');
        $(this).css('font-weight', 'normal');
    });
    $('#email').change(function () {
        $(this).css('border', '1px solid rgb(100, 100, 255)');
        $(this).css('color', 'black');
        $(this).css('font-weight', 'normal');
    })
}

function show() {
    $('fieldset').animate({width: '300px'},2000);
    testando();
}

function e_mail() {
    $('#email').animate({width: '400px', height: '50px'}, 2000);
    }

$(function() {
    $('a').click(function() {
        var href = $(this).attr("href");
        $.ajax({
            url: href
        })
    })
})
