let heroImages = () => ({default: ''});

try{
    heroImages = require.context('../assets/heroes', true);
    // otro recurso
}catch(error){}

export const loadImage = image => (heroImages(`./${image}`).default);
