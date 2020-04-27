$(document).ready(function(){
   $('#botao').click(function() {
       alert("Lave as mãos agora!");
    var valor1 = document.getElementById("teste").value;
            $(document).ready(function(){
                $.get( "https://coronavirus-19-api.herokuapp.com/countries/" + valor1, function(data) {
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
                });
            });
        });
    });
    