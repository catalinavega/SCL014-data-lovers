# DATA LOVERS --> Pokémon Go: Pokédex

## Índice

* [1. Definición del Producto](#1-definicion-del-producto)
* [2. Perfil del Usuario](#2-perfil-del-usuario)
* [2. Historias de Usuario](#2-historias-de-usuario)
* [3. Prototipos](#3-prototipos)
* [4. Imagen Final del Proyecto](#4-imagen-final-del-proyecto)

***

## 1. DEFINICIÓN DEL PRODUCTO


## 1.1 ¿Qué es "Pokémon Go: Pokédex" y cuál es su finalidad?
"Pokémon Go: Pokédex" nace con la intención de brindar información relevante para los jugadores de Pokémon Go y ayudarles a tomar 
decisiones respecto a su estrategia de juego, basada en datos duros: información que puedan revisar desde cualquier dispositivo,
de fácil lectura e interpretación y que esté a mano de cualquier aficionado al juego.

## 1.2 ¿Cómo se origina "Pokémon Go: Pokédex"?
Previo a la creación del producto, se determinó que cierta data debía estar incluída a como diera lugar, por lo cual el presentar a todos los 
Pokémon por el orden de la Pokédex nos parecía fundamental (del #001 al #251). Tanto en la serie como en el juego, 
el orden ha sido un factor determinante a la hora de insertarse en el mundo de Pokémon. Sin importar el nivel de experiencia del jugador, siempre habrá 
tres pokémones clásicos identificables: Bulbasaur, Charmander y Squirtle, cada uno presentado junto a sus evoluciones, mostrando su imagen, breve descripción,
características físicas, tales como peso y estatura, y su tipo (planta, bicho, fuego, agua, tierra, etc.) y este orden es lo que el jugador espera.

## 2. PERFIL DEL USUARIO

* **¿Quiénes son los principales usuarios de producto?** 
La recabación de datos se realizó mediante _Google Forms_.
El rango etario de los usuarios que respondieron a nuestra encuesta va de los 19 a los 35 años, de los cuales el 66% está entre los 19 y 25 años.
En su mayoría viven con su familia, son de clase media, dada la situación actual muchos de ellos se encuentran desempleados o estudiando remoto.

![json-interfaz](https://i.imgur.com/SQYg0YR.png)

Son nativos digitales que destinan una parte importante de su tiempo al ocio y, para muchos de ellos, Pokémon Go es un juego que es parte de sus rutinas.
Para hacer una estimación, si un usuario utiliza un incienso para atraer pokémones, el efecto dura 1 hora; si el usuario deja un sebo en una pokeparada, 
el efecto dura 30 minutos; las incursiones ocurren en momentos específicos del día y requieren pases especiales.
En otras palabras, ser jugador de Pokémon Go exige disciplina para poder cumplir misiones, las cuales son premiadas con polvos estelares, pokebolas, bayas, 
pociones, medicina para revivir, huevos, entre otros, lo que motiva al usuario a conectarse incluso varias veces en un solo día.

![json-interfaz](https://i.imgur.com/KmQbvi6.png)

* **¿Cuáles son los objetivos de estos usuarios en relación con el producto?**
* **¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?**
Al momento de jugar Pokémon Go, nos damos cuenta de que en el momento de que un pokémon es capturado se despliega una ficha informativa, siendo aquella que gana en jerarquía el **Poder de Combate**. Esta información está sobre la imagen principal de cada pokémon. En nuestra encuesta, esto se corrobora, ya que es el dato más 
requerido por los jugadores:

![json-interfaz](https://i.imgur.com/NmF2SE5.png)

![json-interfaz](https://i.imgur.com/8bP09Rp.png)

* **¿Qué tipo de interfaz les gustaría a nuestros usuarios?**
De forma casi unánime, nuestros potenciales usuarios mencionaron que les gustaría una app que utilice los colores y que tenga la identidad gráfica del juego. 
En otras palabras, utilizar una gama de colores que va desde matices de verde al azul petróleo, ya que les da más confianza. 
Esto también afectaría las tonalidades a usar respecto a la presentación de las fichas de cada pokémon, ya que la pokédex para Kanto usa tonos azules y la 
pokédex de Johto, variedades de lila.
A continuación dejamos otros datos obtenidos que hemos considerado al momento de prototipar:
![json-interfaz](https://i.imgur.com/5FTcmL6.png)

![json-interfaz](https://i.imgur.com/LOym78I.png)

![json-interfaz](https://i.imgur.com/NWeUBXK.png)


* **¿Cuándo utilizan o utilizarían el producto?**
Nuestros potenciales usuarios harían uso de "Pokémon Go: Pokédex" en tiempos intermedios de ocio con fin de complementar sus conocimientos técnicos de Pokémon, 
pudiendo filtrar la información en orden ascendente o descendente, de modo que los guíe a determinar cuál de sus Pokémon capturados será más útil en 
una incursión (raid), cuáles les faltan para completar la Pokédex, qué Pokémon resistirá mejor en un gimnasio o en algún encuentro con el equipo Rocket 
en alguna de las pokeparadas.

* **Feedback adicional de los usuarios**
Dejamos a continuación algunos de los comentarios adicionales que recibimos de nuestros potenciales usuarios, esto a considerar para futuras mejoras 
al producto final y nuevas historias de usuario:

- "Me gustaría más información sobre la probabilidad de aparición variocolor de cada Pokémon" (en referencia al spawn de Pokémon Shiny)
- "Que haya más información sobre los ataques de los pokémones"
- "Que no ocupe mucha memoria en el celular"
- "Mejores ataques de los pokémon y si conviene o no agregar 2do ataque"

## 3. HISTORIAS DE USUARIO

A raíz de nuestra investigación, decidimos priorizar las siguientes Historias de Usuario:

1. "Yo como jugador de PG, quiero visualizar los 251 pokémon por el orden designado en la pokedex, para saber cuáles me faltan".
2. "Yo como jugador de PG, quiero conocer el poder de combate de un pokémon, para competir en gimnasios e incursiones".
3. "Yo como jugador de PG, quiero saber cuáles son las chances de spawn de un pokémon, para priorizar las capturas".
4. "Yo como jugador de PG, quiero conocer la tasa de captura base de un pokémon, para optimizar mis recursos (pokeballs, bayas, inciensos, etc.)"

  ## 4. PROTOTIPOS

  ### 4.1 Prototipo de Baja Fidelidad

* **Versión Desktop**
  ![json-interfaz](https://i.imgur.com/r8NoKx2.jpg)

  ![json-interfaz](https://i.imgur.com/unwTr39.jpg)

  ![json-interfaz](https://i.imgur.com/kvzPGrG.jpg)

* **Versión Mobile**
  ![json-interfaz](https://i.imgur.com/YEuo2pa.jpg)

  ![json-interfaz](https://i.imgur.com/78NErBq.jpg)

  ![json-interfaz](https://i.imgur.com/w08CWMG.jpg)

  ### 4.2 Prototipo de Alta Fidelidad

  ## 5. IMAGEN FINAL DEL PROYECTO