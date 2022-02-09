const products = [
    { 
        id: "1", 
        image: 'https://res.cloudinary.com/dculr2szc/image/upload/v1643662848/D_NQ_NP_731407-MLA45732895074_042021-V_dit69r.jpg',
        title: "Play Station 5", 
        shortDescription: "La nueva consola",
        longDescription:'Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos. PlayStation renovó las expectativas del mundo virtual con esta nueva consola y su gran rendimiento. Cuenta con una interfaz de usuario más rápida y fácil de navegar que en anteriores modelos. Además, podrás jugar durante horas desafiando a millones de contrincantes alrededor del mundo que esperan nuevos retos. Se considera que esta consola es de las mejores dentro del mercado, dado que presenta una resolución de hasta 4K.', 
        price: 1500,
        category: 'gaming',
        stock: 10
     },
    { 
        id: "2", 
        image: 'https://res.cloudinary.com/dculr2szc/image/upload/v1643667996/awm15r3nt_cnb_00055lf110_wh.psd_mtiotm.webp',
        title: "Dell Alienware", 
        shortDescription: "Una Notebook muy potente",
        longDescription:"- Pantalla: 17.3 pulgadas FHD IPS Con retroiluminación LED (1920 x 1080 px). Intel Core i7-10870H 10a Generación 2.2 GHz - 5.0 GHz (Turbo Boost). NVIDIA GeForce RTX 3060 6GB GDDR6. Windows 10 Home. 16GB RAM DDR4 2933 MHz. 1TB SSD PCIe Ranura para tarjeta MicroSD ",
        price: 3500,
        category: 'tecnology',
        stock: 20 
    },
    { 
        id: "3", 
        image: 'https://res.cloudinary.com/dculr2szc/image/upload/v1643668765/samsung-smart-tv-ru7100_tajegy.jpg',
        title: "Samsung Smart TV 55'", 
        shortDescription: "Netflix & Chill",
        longDescription:'Con el Smart TV UN55AU7000G vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. Además, podés navegar por Internet, interactuar en redes sociales y divertirte con videojuegos. La cantidad de pixeles que ofrece es 4 veces mayor que la Full HD, ¿el resultado? Escenas mucho más realistas y con un nivel de detalle increíble. Ahora vas a conocer una aventura de inmersión que no va a dejar de sorprenderte. Vas a sentir que proviene desde todas las direcciones posibles, lo cual enriquece la percepción del mismo. Los diálogos de tus series de fin de semana o la música de tus cantantes preferidos van a cobrar otro significado. Más allá de ver televisión', 
        price: 1000,
        category: 'tecnology',
        stock: 30 
    },
    { 
        id: "4", 
        image: 'https://res.cloudinary.com/dculr2szc/image/upload/v1643668816/y0d_900_uyv4er.jpg',
        title: "Aire Acondicionado", 
        shortDescription: "El aire mas potente del mercado!!",
        longDescription:'Climatizar tus espacios a lo largo del año es sin duda algo importante para tu comodidad y la de tus seres queridos. Contar con un aire acondicionado con función frío/calor es la mejor decisión. Con este aire James conseguí una mejor relación costo-beneficio. El tipo de aire split es de bajo consumo energético, de fácil mantenimiento y sumamente silencioso ya que cuenta con una unidad exterior. El deshumidificador absorbe el agua del aire y disminuye la molesta humedad, creando un ambiente confortable y de calidad.La tecnología inverter mejora la eficiencia de tu equipo, potencia su capacidad de refrigeración y proporciona una temperatura más estable. Con su conexión Wi-Fi tenés la comodidad de manejar tu equipo de manera remota. Podés regular la temperatura y controlar el encendido y apagado con un solo click.',
        price: 350, 
        category: 'home',
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