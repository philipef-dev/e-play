import { Game } from "../pages/Home"

export const formatPrice = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(preco)
}

export const getTotalPrice = (items: Game[]) => {
    return items.reduce((acumulador, valorAtual) => {
        console.log('Verifica o valor atual', valorAtual)
        if (valorAtual.prices.current) {
            return (acumulador += valorAtual.prices.current)
        } return 0
    }, 0)
}