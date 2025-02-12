const PLANS = [
    {
        title: '19.90',
        description: 'Básico',
        value: 'basic',
        benefits: [
            {
                has: true,
                label: 'Personalização Completa',
            },
            {
                has: false,
                label: 'Música Personalizada'
            },
            {
                has: false,
                label: '1 Ano de Acesso'
            }
        ]
    },
    {
        title: '29.90',
        description: 'Avançado',
        value: 'advanced',
        benefits: [
            {
                has: true,
                label: 'Personalização Completa',
            },
            {
                has: true,
                label: 'Música Personalizada'
            },
            {
                has: true,
                label: 'Pra Sempre'
            }
        ]
    },
]

const STEPS = [
    {
        step: 1,
        title: 'Crie uma Experiência Única',
        description: 'Compartilhe a data que marca o início da sua jornada juntos e escolha uma música do YouTube que represente esse momento especial. Com essas informações, vamos criar algo único, refletindo a história de vocês de maneira personalizada.'
    },
    {
        step: 2,
        title: 'Finalize o Seu Pedido',
        description: 'Conclua a criação da sua experiência personalizada com um pagamento rápido e seguro, garantindo que esse presente chegue de forma exclusiva e única.'
    },
    {
        step: 3,
        title: 'Acesso Imediato e QR Code',
        description: 'Após a confirmação do pagamento, você receberá um QR code no seu e-mail. Ao escanear o código, terá acesso imediato à sua experiência, personalizada e disponível online.'
    }
]

const FAQ = [
    { value: "a", question: "Quais são as formas de pagamento? Tem como parcelar?", answer: "No momento, aceitamos pagamentos por Pix, boleto e cartão de crédito até 2x" },
    { value: "b", question: "Quanto tempo demora para receber o QR Code no e-mail?", answer: "Após a confirmação do pagamento você receberá o QR Code na hora." },
    { value: "c", question: "O presente personalizado tem validade?", answer: "Não, seu presente personalizado estará disponível para você pelo resto da vida." },
    { value: "d", question: "Posso editar meu presente depois de criá-lo?", answer: "Não, após a finalização do processo de criação, o presente é gerado e não pode ser alterado. Mas você pode revisar todas as escolhas antes de confirmar o pagamento." },
    { value: "f", question: "Quanto tempo demora para receber o QR Code pagando por boleto bancário?", answer: "O pagamento via boleto bancário pode levar de 1 a 3 dias úteis para ser processado. Após a confirmação, você receberá o QR Code imediatamente." },
    { value: "e", question: "Como posso entrar em contato com o suporte ao cliente?", answer: "Você pode entrar em contato com nosso suporte ao cliente através do e-mail mlucas4330@gmail.com." }
]

module.exports = { PLANS, STEPS, FAQ }