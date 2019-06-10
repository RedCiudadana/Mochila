import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        return [{
            title: 'Nuestra Elección',
            img: 'altoparlante',
            url: 'https://nuestraeleccion.gt',
            description: '¡Haz propuestas o apoyalas! Las propuestas serán entregadas a las candidaturas.'
        },
        {
            title: 'Candidatos gt',
            img: 'cuaderno',
            url: 'https://candidatos.gt',
            description: 'Consulta los datos y compara los perfiles de las candidaturas en estas elecciones.'
        },
        {
            title: '¿Por Quién Voto?',
            img: 'brujula',
            url: 'https://porquienvoto.org.gt/',
            description: '¡Conoce qué partido político comparte tu ideología!'
        },
        {
            title: '3 de 3',
            img: 'carnet',
            url: 'https://www.3de3.gt/',
            description: '¡Conoce quiénes son las candidaturas cabales que presentaron sus tres declaraciones: patrimonial, e intereses y fiscal!'
        },
        {
            title: 'Confirmado',
            img: 'lupa',
            url: 'https://www.confirmado.org/',
            description: '¡Conoce qué datos y noticias son verdaderos y cuáles falsos!'
        },
        {
            title: 'Yo voto Informado',
            img: 'lapiz',
            url: 'https://yovotoinformado.org/',
            description: '¿Seguro que tu candidato/a  comparte tu postura? ¡Descúbrelo aquí!'
        },
        {
            title: 'Elecciones Visibles',
            img: 'silbato',
            url: 'https://eleccionesvisibles.gt/',
            description: '¡Conviértete en un observador electoral! ¡Cuidemos las elecciones!'
        },
        {
            title: 'Mirador Electoral',
            img: 'binoculares',
            url: 'https://www.miradorelectoral.gt/',
            description: '¿Cómo vamos con las elecciones? Conoce los datos aquí.'
        },
        {
            title: 'Centro de votación',
            img: 'mapa',
            url: 'https://endondevotas.tse.org.gt/',
            description: '¿Ya sabes dónde te toca votar? Haz click aquí'
        }];
    }
});
