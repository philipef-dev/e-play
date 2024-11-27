import Button from '../../components/Button'
import Card from '../../components/Card'
import { InputGroup, Row } from './styles'


const Checkout = () => (
    <div className="container">
        <Card title="Dados de entrega" >
            <>
                <Row>
                    <InputGroup>
                        <label htmlFor="fullName"> Nome completo</label>
                        <input type="text" id="fullName" />
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
            <div>
                <p>
                    Ao optar por essa forma de pagamento, é importante lembrar que a confirmação pode levar até 3 dias úteis, devido aos prazos estabelecidos pelas instituições financeiras. Portanto, a liberação do código de ativação do jogo adquirido ocorrerá somente após a aprovação do pagamento do boleto.
                </p>
            </div>
        </Card>

        <Button
            type='button'
            title='Botão de finalizar compra'
        >
            Finalizar compra
        </Button>

    </div>
)

export default Checkout