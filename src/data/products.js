const products = [
    { 
        id: "1", 
        image: 'https://res.cloudinary.com/dculr2szc/image/upload/v1643662848/D_NQ_NP_731407-MLA45732895074_042021-V_dit69r.jpg',
        title: "Play Station 5", 
        description: "La nueva consola", 
        price: 1500,
        stock: 10
     },
    { 
        id: "2", 
        image: 'https://res.cloudinary.com/dculr2szc/image/upload/v1643667996/awm15r3nt_cnb_00055lf110_wh.psd_mtiotm.webp',
        title: "Dell Alienware", 
        description: "Una Notebook muy potente", 
        price: 3500,
        stock: 20 
    },
    { 
        id: "3", 
        image: 'https://res.cloudinary.com/dculr2szc/image/upload/v1643668765/samsung-smart-tv-ru7100_tajegy.jpg',
        title: "Samsung Smart TV 55'", 
        description: "Netflix & Chill", 
        price: 1000,
        stock: 30 
    },
    { 
        id: "4", 
        image: 'https://res.cloudinary.com/dculr2szc/image/upload/v1643668816/y0d_900_uyv4er.jpg',
        title: "Aire Acondicionado", 
        description: "Con 12000 BTU es el aire mas potente del mercado",
        price: 350, 
        stock: 40 
    },
];

export const getProds = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products)
    }, 2000);
}) 

export const getItems = async () => {
    return products;
}

