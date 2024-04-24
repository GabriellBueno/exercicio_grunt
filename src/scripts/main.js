document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('somador').addEventListener('submit', function(refresh_off){
        refresh_off.preventDefault();

        
        function soma_de_valor(){
            let numero_1 = document.getElementById('primero_numero').value;
            let numero_2 = document.getElementById('segundo_numero').value;
            
            let resultado_soma = numero_1 + numero_2
            alert(resultado_soma)
        }
    })
})