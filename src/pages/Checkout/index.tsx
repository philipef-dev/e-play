import { Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { RootReducer } from '../../store'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { usePurchaseMutation } from '../../services/api'
import { getTotalPrice, parseToBrl } from '../../helpers/formatPrice'
import boletoIcon from '../../assets/images/boletoIcon.png'
import cardIcon from '../../assets/images/cardIcon.png'
import * as S from './styles'
// import { useDispatch, useSelector } from 'react-redux'
// import { clearCart } from '../../store/reducers/cart'

type Installment = {
    quantity: number
    amount: number
    formattedAmount: string
}

const Checkout = () => {
    // const dispatch = useDispatch()
    const [payWithCard, setPayWithCard] = useState(false)
    const [purchase, { isSuccess, data }] = usePurchaseMutation()
    const { items } = useSelector((state: RootReducer) => state.cart)
    const [installments, setInstallments] = useState<Installment[]>([])

    const totalPrice = getTotalPrice(items)

    useEffect(() => {
        const calculateInstallments = () => {
            const intallmentsArray: Installment[] = []

            for (let i = 1; i <= 6; i++) {
                intallmentsArray.push({
                    quantity: i,
                    amount: totalPrice / i,
                    formattedAmount: parseToBrl(totalPrice / i)
                })
            }

            return intallmentsArray
        }
        if (totalPrice > 0) {
            setInstallments(calculateInstallments())
        }

    }, [totalPrice])

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
            }),
            cpfHolderCard: Yup.string().when('payWithCard', {
                is: true,
                then: (schema) => schema.required('O campo é obrigatório'),
            }),
            nameCard: Yup.string().when('payWithCard', {
                is: true,
                then: (schema) => schema.required('O campo é obrigatório'),
            }),
            numberCard: Yup.string().when('payWithCard', {
                is: true,
                then: (schema) => schema.required('O campo é obrigatório'),
            }),
            dueMonth: Yup.string().when('payWithCard', {
                is: true,
                then: (schema) => schema.required('O campo é obrigatório'),
            }),
            expiryYear: Yup.string().when('payWithCard', {
                is: true,
                then: (schema) => schema.required('O campo é obrigatório'),
            }),
            codeCard: Yup.string().when('payWithCard', {
                is: true,
                then: (schema) => schema.required('O campo é obrigatório'),
            }),
        }),
        onSubmit: (values) => {
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
            }).then(() => {
                alert('Compra realizada com sucesso');
                // dispatch(clearCart())


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

    if (items.length === 0) {
        return <Navigate to="/" />
    }

    return (

        <form className='container' onSubmit={form.handleSubmit}>
            {isSuccess ? (
                <Card title='Muito obrigado'>
                    <>
                        <p>
                            É com satisfação que informamos que recebemos seu pedido com sucesso! <br />
                            Abaixo estão os detalhes da sua compra: <br />
                            Número do pedido: {data.orderId} <br />
                            Forma de pagamento: Boleto Bancário
                        </p> <br />

                        <p>
                            Caso tenha optado pelo pagamento via boleto bancário, lembre-se de que a confirmação pode levar até 3 dias úteis.
                            Após a aprovação do pagamento, enviaremos um e-mail contendo o código de ativação do jogo. <br />
                        </p> <br />

                        <p>
                            Se você optou pelo pagamento com cartão de crédito, a liberação do código de ativação ocorrerá após a aprovação da transação pela operadora do cartão. Você receberá o código no e-mail cadastrado em nossa loja. <br />
                        </p> <br />

                        <p>
                            Pedimos que verifique sua caixa de entrada e a pasta de spam para garantir que receba nossa comunicação.
                            Caso tenha alguma dúvida ou necessite de mais informações, por favor, entre em contato conosco através dos nossos canais de atendimento ao cliente. <br />
                        </p> <br />

                        <p>
                            Agradecemos por escolher a EPLAY e esperamos que desfrute do seu jogo!
                        </p>
                    </>
                </Card>
            ) : (
                <>
                    <Card title="Dados de entrega" >
                        <>
                            <S.Row>
                                <S.InputGroup>
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
                                </S.InputGroup>

                                <S.InputGroup>
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
                                </S.InputGroup>

                                <S.InputGroup>
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
                                </S.InputGroup>
                            </S.Row>

                            <h3 className='margin'> Dados de entrega - conteúdo digital</h3>

                            <S.Row>
                                <S.InputGroup>
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
                                </S.InputGroup>

                                <S.InputGroup>
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
                                </S.InputGroup>
                            </S.Row>
                        </>
                    </Card>

                    <Card title="Pagamento" >
                        <>
                            <S.Row>
                                <S.BtnPagamento
                                    type='button'
                                    isactive={!payWithCard}
                                    onClick={() => setPayWithCard(false)}
                                >
                                    <img src={boletoIcon} />
                                    Boleto bancário
                                </S.BtnPagamento>
                                <S.BtnPagamento
                                    type='button'
                                    isactive={payWithCard}
                                    onClick={() => setPayWithCard(true)}
                                >
                                    <img src={cardIcon} />
                                    Cartão de crédito
                                </S.BtnPagamento>
                            </S.Row>

                            {payWithCard ? (
                                <>
                                    <S.Row className='margin'>
                                        <S.InputGroup>
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
                                        </S.InputGroup>

                                        <S.InputGroup>
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
                                        </S.InputGroup>
                                    </S.Row>

                                    <div className='margin'>
                                        <S.Row>
                                            <S.InputGroup>
                                                <label htmlFor='nameCard'>Nome no cartão</label>
                                                <input
                                                    type="text"
                                                    id='nameCard'
                                                    name="nameCard"
                                                    value={form.values.nameCard}
                                                    onChange={form.handleChange}
                                                    onBlur={form.handleBlur}
                                                    className={checkInputHasError('nameCard') ? 'hasError' : ''}
                                                />
                                            </S.InputGroup>

                                            <S.InputGroup>
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
                                            </S.InputGroup>

                                            <S.InputGroup maxWidth='123px'>
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
                                            </S.InputGroup>

                                            <S.InputGroup maxWidth='123px'>
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
                                            </S.InputGroup>

                                            <S.InputGroup maxWidth='48px'>
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
                                            </S.InputGroup>
                                        </S.Row>
                                        <S.Row className='margin'>
                                            <S.InputGroup maxWidth='140px'>
                                                <label htmlFor="installment">Parcelamento</label>
                                                <select
                                                    name="installment"
                                                    id="installment"
                                                    value={form.values.installment}
                                                    onChange={form.handleChange}
                                                    onBlur={form.handleBlur}
                                                    className={checkInputHasError('installment') ? 'hasError' : ''}
                                                >
                                                    {installments.map((installment) => (
                                                        <option key={installment.quantity}>
                                                            {installment.quantity}x de
                                                            {installment.formattedAmount}
                                                        </option>
                                                    ))}
                                                </select>
                                            </S.InputGroup>
                                        </S.Row>
                                    </div>
                                </>
                            ) : (
                                <p className='margin'>
                                    Ao optar por essa forma de pagamento, é importante lembrar que a confirmação pode levar até 3 dias úteis, devido aos prazos estabelecidos pelas instituições financeiras. Portanto, a liberação do código de ativação do jogo adquirido ocorrerá somente após a aprovação do pagamento do boleto.
                                </p>
                            )}
                        </>
                    </Card>

                    <Button
                        type='submit'
                        title='Botão de finalizar compra'
                    >
                        Finalizar compra
                    </Button>
                </>
            )}
        </form>
    )
}

export default Checkout