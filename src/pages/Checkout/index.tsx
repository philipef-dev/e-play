import Button from '../../components/Button'
import Card from '../../components/Card'
import { BtnPagamento, InputGroup, Installment, Row } from './styles'
import boletoIcon from '../../assets/images/boletoIcon.png'
import cardIcon from '../../assets/images/cardIcon.png'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Checkout = () => {
    const [payWithCard, setpayWithCard] = useState(false)

    const form = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            cpf: '',
            deliveryEmail: '',
            confirmDeliveryEmail: '',
            cardHolderName: '',
            cpfHolderCard: '',
            nameOwnerCard: '',
            numberCard: '',
            dueMonth: '',
            expiryYear: '',
            codeCard: '',
            installment: 1
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .min(5, 'O campo requer mais do que 5 caracteres')
                .required('Campo obrigatório'),
            email: Yup.string()
                .email('Digite um e-mail válido')
                .required('Campo obrigatório'),
            cpf: Yup.string()
                .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido')
                .required('Campo obrigatório'),
            deliveryEmail: Yup.string()
                .email('Digite um e-mail válido')
                .required('Campo obrigatório'),
            confirmDeliveryEmail: Yup.string()
                .oneOf([Yup.ref('deliveryEmail')], 'Os e-mails não coincidem')
                .required('Campo obrigatório'),
            cardHolderName: Yup.string()
                .min(5, 'O campo requer mais do que 5 caracteres')
                .required('Campo obrigatório'),
            cpfHolderCard: Yup.string()
                .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido')
                .required('Campo obrigatório'),
            nameOwnerCard: Yup.string()
                .required('Campo obrigatório'),
            numberCard: Yup.string()
                .matches(/^\d{13,16}$/, 'Número do cartão inválido')
                .required('Campo obrigatório'),
            dueMonth: Yup.number()
                .min(1, 'Mês inválido')
                .max(12, 'Mês inválido')
                .required('Campo obrigatório'),
            expiryYear: Yup.number()
                .min(new Date().getFullYear(), 'Ano inválido')
                .required('Campo obrigatório'),
            codeCard: Yup.string()
                .matches(/^\d{3,4}$/, 'CVV inválido')
                .required('Campo obrigatório'),
            installment: Yup.number()
                .positive('Número de parcelas inválido')
                .required('Campo obrigatório')
        }),

        onSubmit: (value) => {
            console.log(value)
        }
    })

    console.log(form)

    const getErrorMessage = (fieldName: string, message?: string) => {
        const estaAlterado = fieldName in form.touched
        const estaInvalido = fieldName in form.errors

        if (estaAlterado && estaInvalido) return message
        return ''
    }

    console.log('O que o campo form é', typeof form)
    
    return (
        <form className='container' onSubmit={form.handleSubmit}>
            <Card title="Dados de entrega" >
                <>
                    <Row>
                        <InputGroup>
                            <label htmlFor="fullName">Nome completo</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={form.values.fullName}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                            <small>{getErrorMessage('fullName', form.errors.fullName)}</small>

                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={form.values.email}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                            <small>{getErrorMessage('fullName', form.errors.email)}</small>
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="cpf">CPF</label>
                            <input
                                type="text"
                                id="cpf"
                                name="cpf"
                                value={form.values.cpf}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                            <small>{getErrorMessage('fullName', form.errors.cpf)}</small>
                        </InputGroup>
                    </Row>

                    <h3 className='margin'> Dados de entrega - conteúdo digital</h3>

                    <Row>
                        <InputGroup>
                            <label htmlFor="deliveryEmail">E-mail</label>
                            <input
                                type="email"
                                id="deliveryEmail"
                                name='deliveryEmail'
                                value={form.values.deliveryEmail}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                            <small>{getErrorMessage('fullName', form.errors.deliveryEmail)}</small>
                        </InputGroup>

                        <InputGroup>
                            <label htmlFor="confirmDeliveryEmail"> Confirme o e-mail</label>
                            <input
                                type="email"
                                id="confirmDeliveryEmail"
                                name="confirmDeliveryEmail"
                                value={form.values.confirmDeliveryEmail}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                            <small>{getErrorMessage('fullName', form.errors.confirmDeliveryEmail)}</small>
                        </InputGroup>
                    </Row>
                </>
            </Card>

            <Card title="Pagamento" >
                <>
                    <Row>
                        <BtnPagamento
                            type='button'
                            isactive={!payWithCard}
                            onClick={() => setpayWithCard(false)}
                        >
                            <img src={boletoIcon} />
                            Boleto bancário
                        </BtnPagamento>
                        <BtnPagamento
                            type='button'
                            isactive={payWithCard}
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
                                    <input
                                        type="text"
                                        id='cardHolderName'
                                        name='cardHolderName'
                                        value={form.values.cardHolderName}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                    />
                                    <small>{getErrorMessage('fullName', form.errors.cardHolderName)}</small>
                                </InputGroup>

                                <InputGroup>
                                    <label htmlFor='cpfHolderCard'>CPF do titular do cartão</label>
                                    <input
                                        type='text'
                                        id='cpfHolderCard'
                                        name="cpfHolderCard"
                                        value={form.values.cpfHolderCard}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                    />
                                    <small>{getErrorMessage('fullName', form.errors.cardHolderName)}</small>
                                </InputGroup>
                            </Row>

                            <div className='margin'>
                                <Row>
                                    <InputGroup>
                                        <label htmlFor='nameOwnerCard'>Nome no cartão</label>
                                        <input
                                            type="text"
                                            id='nameOwnerCard'
                                            name="nameOwnerCard"
                                            value={form.values.nameOwnerCard}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                        />
                                        <small>{getErrorMessage('fullName', form.errors.nameOwnerCard)}</small>
                                    </InputGroup>

                                    <InputGroup>
                                        <label htmlFor='numberCard'>Número do cartão</label>
                                        <input
                                            type="number"
                                            id='numberCard'
                                            name="numberCard"
                                            value={form.values.numberCard}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                        />
                                        <small>{getErrorMessage('fullName', form.errors.numberCard)}</small>
                                    </InputGroup>

                                    <InputGroup maxWidth='123px'>
                                        <label htmlFor='dueMonth'>Mês do vencimento</label>
                                        <input
                                            type="text"
                                            id='dueMonth'
                                            name="dueMonth"
                                            value={form.values.dueMonth}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                        />
                                        <small>{getErrorMessage('fullName', form.errors.dueMonth)}</small>
                                    </InputGroup>

                                    <InputGroup maxWidth='123px'>
                                        <label htmlFor='expiryYear'>Ano de vencimento</label>
                                        <input
                                            type="text"
                                            id='expiryYear'
                                            name="expiryYear"
                                            value={form.values.expiryYear}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                        />
                                    </InputGroup>

                                    <InputGroup maxWidth='48px'>
                                        <label htmlFor='codeCard'>CVV</label>
                                        <input
                                            type="text"
                                            id='codeCard'
                                            name='codeCard'
                                            value={form.values.codeCard}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                        />
                                        <small>{getErrorMessage('fullName', form.errors.codeCard)}</small>
                                    </InputGroup>
                                </Row>
                                <Row className='margin'>
                                    <Installment>
                                        <p>Parcelamento</p>
                                        <select
                                            name="installment"
                                            id="installment"
                                            value={form.values.installment}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                        >
                                            <option>1x de R$ 200,00</option>
                                            <option>2x de R$ 200,00</option>
                                            <option>3x de R$ 200,00</option>
                                        </select>
                                        <small>{getErrorMessage('fullName', form.errors.installment)}</small>
                                    </Installment>
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

            <Button type='submit' title='Botão de finalizar compra'>
                Finalizar compra
            </Button>
        </form>
    )
}

export default Checkout