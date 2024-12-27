import Button from '../../components/Button'
import Card from '../../components/Card'
import { BtnPagamento, InputGroup, Row } from './styles'
import boletoIcon from '../../assets/images/boletoIcon.png'
import cardIcon from '../../assets/images/cardIcon.png'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Navigate } from 'react-router-dom'

const Checkout = () => {
    const [payWithCard, setPayWithCard] = useState(false)
    const [purchase] = usePurchaseMutation()

    const { items } = useSelector((state: RootReducer) => state.cart)

    if (items.length === 0) {
        Navigate({to: '/'})
    }

    const form = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            cpf: '',
            deliveryEmail: '',
            confirmDeliveryEmail: '',
            cardHolderName: '',
            cpfHolderCard: '',
            nameCard: '',
            numberCard: '',
            dueMonth: '',
            expiryYear: '',
            codeCard: '',
            installment: 1
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .min(5, 'O campo precisa ter pelo menos 5 caracteres')
                .required('O campo é obrigatório'),
            email: Yup.string()
                .min(5, 'O campo precisa ter pelo menos 5 caracteres')
                .required('O campo é obrigatório'),
            cpf: Yup.string()
                .min(11, 'O campo precisa ter pelo menos 11 caracteres')
                .max(11, 'O campo precisa ter um máximo de 11 caracteres ')
                .required('O campo é obrigatório'),
            deliveryEmail: Yup.string()
                .min(5, 'O campo precisa ter pelo menos 5 caracteres')
                .required('O campo é obrigatório'),
            confirmDeliveryEmail: Yup.string()
                .oneOf([Yup.ref('deliveryEmail')], 'Os e-mails são diferentes')
                .required('O campo é obrigatório'),
            cardHolderName: Yup.string().when('payWithCard', {
                is: true,
                then: (schema) => schema.required('O campo é obrigatório'),
                otherwise: (schema) => schema.required()
            }),
            cpfHolderCard: Yup.string().when('payWithCard', {
                is: true,
                then: (schema) => schema.required('O campo é obrigatório'),
                otherwise: (schema) => schema.required()
            }),
            nameCard: Yup.string().when('payWithCard', {
                is: true,
                then: (schema) => schema.required('O campo é obrigatório'),
                otherwise: (schema) => schema.required()
            }),
            numberCard: Yup.string().when('payWithCard', {
                is: true,
                then: (schema) => schema.required('O campo é obrigatório'),
                otherwise: (schema) => schema.required()
            }),
            dueMonth: Yup.string().when('payWithCard', {
                is: true,
                then: (schema) => schema.required('O campo é obrigatório'),
                otherwise: (schema) => schema.required()
            }),
            expiryYear: Yup.string().when('payWithCard', {
                is: true,
                then: (schema) => schema.required('O campo é obrigatório'),
                otherwise: (schema) => schema.required()
            }),
            codeCard: Yup.string().when('payWithCard', {
                is: true,
                then: (schema) => schema.required('O campo é obrigatório'),
                otherwise: (schema) => schema.required()
            }),
        }),
        onSubmit: (values) => {
            console.log('onSubmit foi chamado', values)
            alert('OnSubmit funcionando')
            purchase({
                billing: {
                    name: values.fullName,
                    email: values.email,
                    document: values.cpf
                },
                delivery: {
                    email: values.deliveryEmail
                },
                payment: {
                    installments: 1,
                    card: {
                        active: payWithCard,
                        code: Number(values.codeCard),
                        name: values.nameCard,
                        number: values.numberCard,
                        owner: {
                            name: values.cardHolderName,
                            document: values.cpfHolderCard
                        },
                        expires: {
                            month: 1,
                            year: 2025
                        },
                    },
                },
                products: [
                    {
                        id: 1,
                        price: 10
                    }
                ]
            }).then((response) => {
                console.log("Resposta da API:", response);
                alert('Compra realizada com sucesso');
            }).catch((error) => {
                console.error("Erro na API", error);
                alert('Ocorreu um erro ao processar a compra');
            });
        }
    })

    const checkInputHasError = (fieldName: string) => {
        const isTouched = fieldName in form.touched
        const isValid = fieldName in form.errors

        const hasError = isTouched && isValid

        return hasError
    }

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
                                className={checkInputHasError('fullName') ? 'hasError' : ''}
                            />
                        </InputGroup>

                        <InputGroup>
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.values.email}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className={checkInputHasError('email') ? 'hasError' : ''}
                            />
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
                                className={checkInputHasError('cpf') ? 'hasError' : ''}
                            />
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
                                className={checkInputHasError('deliveryEmail') ? 'hasError' : ''}
                            />
                        </InputGroup>

                        <InputGroup>
                            <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
                            <input
                                type="email"
                                id="confirmDeliveryEmail"
                                name="confirmDeliveryEmail"
                                value={form.values.confirmDeliveryEmail}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className={checkInputHasError('confirmDeliveryEmail') ? 'hasError' : ''}
                            />
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
                            onClick={() => setPayWithCard(false)}
                        >
                            <img src={boletoIcon} />
                            Boleto bancário
                        </BtnPagamento>
                        <BtnPagamento
                            type='button'
                            isactive={payWithCard}
                            onClick={() => setPayWithCard(true)}
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
                                        className={checkInputHasError('cardHolderName') ? 'hasError' : ''}
                                    />
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
                                        className={checkInputHasError('cpfHolderCard') ? 'hasError' : ''}
                                    />
                                </InputGroup>
                            </Row>

                            <div className='margin'>
                                <Row>
                                    <InputGroup>
                                        <label htmlFor='nameCard'>Nome no cartão XXX</label>
                                        <input
                                            type="text"
                                            id='nameCard'
                                            name="nameCard"
                                            value={form.values.nameCard}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            className={checkInputHasError('nameCard') ? 'hasError' : ''}
                                        />
                                    </InputGroup>

                                    <InputGroup>
                                        <label htmlFor='numberCard'>Número do cartão</label>
                                        <input
                                            type="string"
                                            id='numberCard'
                                            name="numberCard"
                                            value={form.values.numberCard}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            className={checkInputHasError('numberCard') ? 'hasError' : ''}
                                        />
                                    </InputGroup>

                                    <InputGroup maxWidth='123px'>
                                        <label htmlFor='dueMonth'>Mês do vencimento</label>
                                        <input
                                            type="number"
                                            id='dueMonth'
                                            name="dueMonth"
                                            value={form.values.dueMonth}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            className={checkInputHasError('dueMonth') ? 'hasError' : ''}
                                        />
                                    </InputGroup>

                                    <InputGroup maxWidth='123px'>
                                        <label htmlFor='expiryYear'>Ano de vencimento</label>
                                        <input
                                            type="number"
                                            id='expiryYear'
                                            name="expiryYear"
                                            value={form.values.expiryYear}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            className={checkInputHasError('expiryYear') ? 'hasError' : ''}
                                        />
                                    </InputGroup>

                                    <InputGroup maxWidth='48px'>
                                        <label htmlFor='codeCard'>CVV</label>
                                        <input
                                            type="number"
                                            id='codeCard'
                                            name='codeCard'
                                            value={form.values.codeCard}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            className={checkInputHasError('codeCard') ? 'hasError' : ''}
                                        />
                                    </InputGroup>
                                </Row>
                                <Row className='margin'>
                                    <InputGroup maxWidth='140px'>
                                        <label htmlFor="installment">Parcelamento</label>
                                        <select
                                            name="installment"
                                            id="installment"
                                            value={form.values.installment}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            className={checkInputHasError('installment') ? 'hasError' : ''}

                                        >
                                            <option>1x de R$ 200,00</option>
                                            <option>2x de R$ 200,00</option>
                                            <option>3x de R$ 200,00</option>
                                        </select>
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

            <Button type='submit' title='Botão de finalizar compra'>
                Finalizar compra
            </Button>
        </form>
    )
}

export default Checkout