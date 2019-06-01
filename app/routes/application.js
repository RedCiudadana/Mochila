import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [{
            title: 'Nuestra Elección',
            description: 'Nuestra Elección es una plataforma .....',
            img: '01.png',
            imgAlt: 'Lupa'
        },{
            title: 'Nuestra Elección',
            description: 'Nuestra Elección es una plataforma .....',
            img: '01.png',
            imgAlt: 'Lupa'
        }, {
            title: 'Nuestra Elección',
            description: 'Nuestra Elección es una plataforma .....',
            img: '01.png',
            imgAlt: 'Lupa'
        }];
    }
});
