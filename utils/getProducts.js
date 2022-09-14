const products = [
    {
        id: 1,
        title: "Fumetsu no atari",
        price: 600,
        description: "Mangaka emocional sobre la vida de una evolucion prisma",
        category: "drama",
        rating: {
            rate: 9.2,
            count:23
        }
    },

    {
        id: 2,
        title: "Kimetsu",
        price: 600,
        description: "Shonen tipico de peleas",
        category: "shonen",
        rating: {
            rate: 7.2,
            count:23
        }
    },
]

const getList= () => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(products);
        }, 2000);
    })
 }

export default getList;