$(document).ready(function(){
    $('a[name="hide1"]').hide();
    $('a[name="hide2"]').hide();
   $('#botao').click(function() {
        var valor1 = document.getElementById("teste").value;
            $.get( "https://coronavirus-19-api.herokuapp.com/countries/" + valor1, function(data) {
                if(valor1=="World"){
                    alert("Lave as mãos agora!\n\nMortes diárias e casos novos são zerados as 22:00 no horário de Brasília.");
                }
                if(data.totalTests == 0){
                    $('#testfeito').text("Sem dados");
                }
                else{   
                    $('#testfeito').text(data.totalTests);
                }
                $('#casos').text(data.cases);
                $('#casosnovos').text(data.todayCases);
                $('#ativos').text(data.active);
                $('#recu').text(data.recovered);
                $('#cspmil').text(data.casesPerOneMillion);
                $('#casecrit').text(data.critical);
                $('#mortehoje').text(data.todayDeaths).css("color","red");
                $('#mortes').text(data.deaths).css("color","red");
                $('a[name="hide1"]').show();
                $('a[name="hide2"]').show(500);
            });
        });
    });
    

