const botoes = document.querySelectorAll('.botoes')
const cards = document.querySelectorAll('.box')


var limiteCards = cards.length

var boxPrincipal = 0

botoes.forEach((botao) =>{
    botao.addEventListener('click', () =>{
        btnEsquerda = botao.classList.contains('esquerda')
        btnDireita = botao.classList.contains('direita')

        if(btnEsquerda){
            if(boxPrincipal == 0){

                boxPrincipal = limiteCards - 1
            }else{

                boxPrincipal -= 1
            }

        }

        if(btnDireita){
            if(boxPrincipal >= limiteCards - 1){
                boxPrincipal = 0
            }else{
                
                boxPrincipal += 1
            }


        }

        cards.forEach((card) =>{
            card.classList.remove('box-principal')
        })

        cards[boxPrincipal].scrollIntoView(
            {
                inline:'center',
                behavior: 'smooth'
            }
        )
        cards[boxPrincipal].classList.add('box-principal')

        
    })
})