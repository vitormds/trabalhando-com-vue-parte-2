new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlert(){
            alert("Botão clicado!")
        },
        adicionarValor(e){
         this.valor = e.target.value;
        }
    }
})