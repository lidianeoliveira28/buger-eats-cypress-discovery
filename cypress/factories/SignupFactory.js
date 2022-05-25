var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
                name: `${firstName} ${lastName}`,
                cpf: cpf.generate(),
                email: faker.internet.email(firstName),
                whatsapp:'61 999999999',
                address: {
                postalcode:'71687540',
                    street:'Quadra QC 10 Rua D',
                    number:'34',
                    details:'casa',
                    district:'Jardins Mangueiral (Jardim Botânico)',
                    city_state:'Brasília/DF'
                },
                delivery_method: 'Moto',
                cnh: 'cnh-digital.jpg'
        }
    return data
    }
}