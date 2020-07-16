new Vue({
	el: '#desafio',
	data: {
		class1: 'destaque', 
		 perigo: true,
		 classe3: '',
		 classe4: '',
		 cor5: '',
		 estilo5:{
			width: '100px',
			height: '100px'
		 },
		 width: 0
	
	},
	computed:{
		
	},
	methods: {
		iniciarEfeito() {
			setInterval(()=>{
				this.class1 = this.class1 == 'destaque' ? 'encolher' : 'destaque'
			},1000)
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`; // template => String
				if(valor == 100)
				clearInterval(temporizador)
			}, 500)
		},
		setPerigo(event){
			console.log(event.target.value);
			   if(event.target.value == "true"){
				this.perigo = true
			   }else if(event.target.value == "false"){
				this.perigo = false
			   }
		}
	}
})