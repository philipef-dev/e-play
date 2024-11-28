import Button from '../../components/Button'
import Card from '../../components/Card'
import { BtnPagamento, InputGroup, Row } from './styles'
import boletoIcon from '../../assets/images/boletoIcon.png'
import cardIcon from '../../assets/images/cardIcon.png'
import { useState } from 'react'

const Checkout = () => {
    const [payWithCard, setpayWithCard] = useState(false)

    return (
        <div className="container">
            <Card title="Dados de entrega" >
                <>
                    <Row>
                        <InputGroup>
                            <label htmlFor="fullName">Nome completo</label>
                            <input type="text" id="fullName" />
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="email">E-mail</label>
                            <input type="text" id="email" />
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="cpf">CPF</label>
                            <input type="text" id="cpf" />
                        </InputGroup>
                    </Row>

                    <h3 className='margin'> Dados de entrega - conteúdo digital</h3>

                    <Row>
                        <InputGroup>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" />
                        </InputGroup>

                        <InputGroup>
                            <label htmlFor="email"> Confirme o e-mail</label>
                            <input type="email" id="email" />
                        </InputGroup>
                    </Row>
                </>
            </Card>

            <Card title="Pagamento" >
                <>
                    <Row>
                        <BtnPagamento
                            type='button'
                            isActive={!payWithCard}
                            onClick={() => setpayWithCard(false)}
                        >
                            <img src={boletoIcon} />
                            Boleto bancário
                        </BtnPagamento>
                        <BtnPagamento 
                        type='button' 
                        isActive={payWithCard}
                        onClick={() => setpayWithCard(true)}
                        >
                            <img src={cardIcon} />
                            Cartão de crédito
                        </BtnPagamento>
                    </Row>

                    {payWithCard ? (
                        <>
                            <Row className='margin'>
                                <InputGroup>
                                    <label htmlFor='cardHolderName'>Nome do titular do cartão</label>
                                    <input type="text" id='cardHolderName' />
                                </InputGroup>

                                <InputGroup>
                                    <label htmlFor='cpfHolderCard'>CPF do titular do cartão</label>
                                    <input type='text' id='cpfHolderCard' />
                                </InputGroup>
                            </Row>

                            <div className='margin'>
                                <Row>
                                    <InputGroup>
                                        <label htmlFor='nameOwnerCard'>Nome no cartão</label>
                                        <input type="text" id='nameOwnerCard' />
                                    </InputGroup>

                                    <InputGroup>
                                        <label htmlFor='numberCard'>Número do cartão</label>
                                        <input type="number" id='numberCard' />
                                    </InputGroup>

                                    <InputGroup maxWidth='123px'>
                                        <label htmlFor='dueMonth'>Mês do vencimento</label>
                                        <input type="text" id='dueMonth' />
                                    </InputGroup>

                                    <InputGroup maxWidth='123px'>
                                        <label htmlFor='expiryYear'>Ano de vencimento</label>
                                        <input type="text" id='expiryYear' />
                                    </InputGroup>

                                    <InputGroup maxWidth='48px'>
                                        <label htmlFor='expiryYear'>CVV</label>
                                        <input type="text" id='expiryYear' />
                                    </InputGroup>
                                </Row>
                            </div>
                        </>
                    ) : (
                        <p className='margin'>
                            Ao optar por essa forma de pagamento, é importante lembrar que a confirmação pode levar até 3 dias úteis, devido aos prazos estabelecidos pelas instituições financeiras. Portanto, a liberação do código de ativação do jogo adquirido ocorrerá somente após a aprovação do pagamento do boleto.
                        </p>
                    )}
                </>
            </Card>

            <Button type='button' title='Botão de finalizar compra'>
                Finalizar compra
            </Button>
        </div>
    )

}

export default Checkout