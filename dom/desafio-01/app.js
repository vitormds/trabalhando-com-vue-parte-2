new Vue({
    el: '#desafio',
    data:{
        nome: "Vitor Souza",
        idade: 23,
        imagem: 'https://miro.medium.com/max/1400/1*goSuHxAHqRR8alv_h_3nCw.png'
    }, 
    methods:{
        idade3Vezes(){
            return this.idade * 3
        },
        random(){
            return Math.random()
        }
    }
})