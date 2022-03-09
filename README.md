# APOLON E-Commerce #

 -  *APOLON tiene como finalidad ofrecer productos de calidad a los usuarios y con los mejores precios del mercado.*
 -  *Con un diseño responsivo y adaptable tanto a su ordenador como a su smartphone, nos adentraremos a sus raíces y su funcionalidad en el siguiente documento.* 

### Levantando APOLON ###

#### Correr nuestra app ####

- *Para empezar, una vez descargado el proyecto escribimos el comando `npm install` para instalar todas las dependencias que APOLON requiere*
-  *Para correr nuestra app, es necesario escribir en la terminal el comando `npm start`*
-  *Abrirá el navegador con una URL [http://localhost:3000]*
-   *También contamos con un deploy en netlify con el la URL [https://apolon-ecommerce.netlify.app/] que cuenta con los últimos features disponibles*


### Aspecto visual de APOLON ###

- *APOLON visualmente fue trabajado con componentes de React-Bootstrap, tales como su barra de navegación o la presentación de los productos de forma individual*
- *Para entrar mas en detalle, también se utilizó clases de bootstrap dentro de div's con el fin de darle un toque mas personalizado*
- *Los colores utilizados, van de la mano de la tendencia mundial que existe con el* dark mode *y el background gradient que busca ponerle la atención a cada tarjeta de producto*
- *El diseño de las tarjetas de presentación de producto, fue pensado con la intención de restarle mérito al nombre del producto y así darle enfasis en la imagen del producto en sí*

### Alojamiento de los datos ###

- *APOLON trabaja directamente sobre Google Firebase, al tratarse de una app Serverless*
- *En futuras instancias, el procesamiento y alojamiento de datos de APOLON será mudado de Firebase para trabajar con el reconocido MERN stack*


### Breve resumen de su funcionamiento ###

#### Barra de navegación ####

- *Con un diseño simplificado, en ella podrás ver las categorías de prodcutos que APOLON ofrece, pudiendo filtrar por los mismos*
- *También tendrás la sección de carrito,que te permitirá ver todos los productos que selecciones, las cantidades correspondientes, y también finalizar la compra*
- *Nuestro logo, también minimalista, te permitirá volver al landing principal de todos los productos que APOLON tiene para ofrecerte*


#### Tarjetas de presentación de prodcuto ####

- *Las mismas son sencillas, minimalistas, le dan enfasis a la imagen y buscan dar pocos detalles reales del producto en sí*
- *Para ver mas detalles, podemos seleccionar el boton* detalle de producto  *que también es el siguiente paso para adquirirlo*

#### Detalle de producto ####

- *En esta sección, vamos a ver un texto mucho mas explicativo sobre el producto en si, chequear la disponibilidad de stock y agregarlo a nuestro carrito*
- *Sobre la sección de texto, veremos una descripción interesante sobre el producto, sus cualidades, etc*
- *En la esquina veremos si contamos con stock disponible*
- *Sobre el stock, vale aclarar que no se modifica hasta que se ejecuta la orden de compra, por lo tanto veremos la etiqueta verde de* Stock Disponible *, aunque ya hemos seleccionado la cantidad maxima para dicho producto.* *Continuando con la explicacion anterior, una vez agregado un producto al carrito con la cantidad seleccionada, no podremos agregarlo nuevamente, por lo que tocará eliminarlo del carrito y volver a agregarlo con la nueva cantidad deseada*
- *Sobre el Footer de la tarjeta, encontramos la posibildidad de elegir la cantidad y agregar la misma al carrito, que luego veremos en el cart widget ubicado en la barra de navegación*
-   *Al agregar un producto al carrito, podremos ver en el footer si queremos trasladarnos a terminar la compra o bien continuar comprando en nuestro landing principal*

#### Carrito ####

- *Diseño simple y acorde al resto de la pagina, en el podremos ver el una lista con todos los productos seleccionados y su valor*
- *Cuenta con un botón individual por cada producto seleccionado con la funcionalidad de eliminarlo de manera práctica*
- *Debajo encontraremos el total a pagar por la compra y la posibilidad de vaciar el carrito por cualquier eventualidad*
- *Al dar click en* Finalizar Compra *navegaremos hacia un formulario*


##### Formulario de finalización de compra #####

- *Ya al final de nuestro caso de uso, nos encontramos con un muy basico formulario, donde el usuario final dispuesto a comprar ingresará los correspondientes datos (Nombre, Email, Teléfono) para poder generar la orden de compra y entregarle su número de rastreo una vez completa el paso*
- *Este mencionado número de rastreo nos ayudará a nosotros a estar al pendientes de tu compra por cualquier eventualidad*
- *Ya tienes tu primer orden de compra generada en APOLON!!*

### APOLON en el futuro próximo ###

- *Nuevos features y posibildiades para que tu experiencia de compra de productos de calidad*
- *Distintas clases de usuarios, pasando por el comprador y la tienda oficial hasta el administrador*

###### APOLON fue creado y diseñado por Rodrigo Rizzi ######
###### por cualquier consulta dirigirse al (+598)98 939 512 o a ro.rizzi17@gmail.com ######
