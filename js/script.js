$(function() {
    // Handler for .ready() called.
    $("#calcular").click(calcular);

    function calcular(){
        var timeinhours = Math.abs(Date.now() - new Date($("#time").val())) / 1000 / 60;
        var people = parseInt($('#people').val());
        var moneyinhours = parseInt($('#money').val()) / 160;
        var total = (timeinhours * people * moneyinhours).toLocaleString();
        $('#total').html(total + '€');
        //llamar en 10 segundos
        setTimeout(() => {
            calcular();
        }, 10000);
    }
  });