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
Podemos inferir que de toda la data disponible, las siguientes nos permiten ofrecer una experiencia distinta al usuario: tasa de huida base, tasa de captura base, oportunidad de spawn, resistencia base (stamina), poder de combate y salud (máximo).

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
pociones, medicina para revivir, huevos, entre otros, lo que motiva al usuario a conectarse incluso varias veces en un solo día: el usuario está pendiente 
de su progreso en el juego y ***la posibilidad de jugar en comunidad con sus amigos estimula su platea externa, lo cual también ayuda a mejorar su rendimiento*** ***en el juego.***

![json-interfaz](https://i.imgur.com/KmQbvi6.png)

* **¿Cuáles son los objetivos de estos usuarios en relación con el producto?**

Queremos que nuestros potenciales usuarios confíen en nuestra aplicación y sientan que junto a ella pueden mejorar su rendimiento en el juego.
La confianza es primordial, considerando que una gran cantidad de aplicaciones relacionadas a Pokémon Go pueden terminar en el baneo de sus cuentas, 
al hacer uso de data que se considera "tramposa". Para ello, la implementación de la identidad gráfica es primordial.
Nuestro usuario es analítico y quiere hacer comparaciones entre pokémones, desea comprender la jerarquía entre ellos y apreciar sus características, 
para hacer uso de esa data cuando tenga la posibilidad de ingresar al juego.

* **¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?**

Al momento de jugar Pokémon Go, nos damos cuenta de que en el momento de que un pokémon es capturado se despliega una ficha informativa, siendo aquella que gana en jerarquía el **Poder de Combate**. Esta información está sobre la imagen principal de cada pokémon. En nuestra encuesta, esto se corrobora, ya que es el dato más 
requerido por los jugadores:

![json-interfaz](https://i.imgur.com/NmF2SE5.png)

![json-interfaz](https://i.imgur.com/8bP09Rp.png)

* **¿Qué tipo de interfaz les gustaría a nuestros usuarios?**

De forma casi unánime, nuestros potenciales usuarios mencionaron que les gustaría una app que utilice los colores y que tenga la identidad gráfica del juego. 
En otras palabras, utilizar una gama de colores que va desde matices de verde al azul petróleo, ya que les da más confianza. 
Esto también afectaría las tonalidades a usar respecto a la presentación de las fichas de cada pokémon, ya que la pokédex para Kanto usa tonos lila y la 
pokédex de Johto, matices de azul.
A continuación dejamos otros datos obtenidos que hemos considerado al momento de prototipar:

![json-interfaz](https://i.imgur.com/5FTcmL6.png)

![json-interfaz](https://i.imgur.com/LOym78I.png)

![json-interfaz](https://i.imgur.com/NWeUBXK.png)


* **¿Cuándo utilizan o utilizarían el producto?**

Nuestros potenciales usuarios harían uso de "Pokémon Go: Pokédex" en tiempos intermedios de ocio con fin de complementar sus conocimientos técnicos de Pokémon, 
pudiendo ordenar la información en orden ascendente o descendente, filtrar por tipo de Pokémon, de modo que los guíe a determinar cuál de sus Pokémon capturados será más útil en una incursión (raid), cuáles les faltan para completar la Pokédex, qué Pokémon resistirá mejor en un gimnasio o en algún encuentro con el equipo Rocket en alguna de las pokeparadas.

## 3. HISTORIAS DE USUARIO

A raíz de nuestra investigación, decidimos priorizar las siguientes Historias de Usuario:

**HU1.** _"Yo como jugador de PG, quiero visualizar los 251 pokémon por el orden designado en la pokédex, para saber cuáles me faltan"._

C.A.:
- [x] El usuario puede ver los 251 pokémon desde el inicio
- [x] Los 251 pokémon están ordenados (primero Kanto, luego Johto)
- [x] Cada pokémon tiene su número, nombre, imagen y tipo identificado en la ficha visible
- [x] color de fondo de los pokémon corresponde también a la pokédex de la generación a la cual pertenecen

D.T.: 
- [x] Se respeta el diseño de prototipado
- [x] El diseño está hecho con flexbox
- [x] Se está trabajando con selectores de clase en CSS
- [x] Se utiliza html semántico
- [x] Se utiliza html dinámico
- [x] El código ha sido hecho en pair-programming
- [x] El código está utilizando arrays y objects
- [x] Se implementa función para mostrar a los 251 pokémon
- [x] El código está en el repositorio actualizado

**HU2** _"Yo como jugador de PG, quiero conocer el poder de combate de un pokémon, para competir en gimnasios e incursiones"._

C.A.:
- [x] Cada Pokémon tiene visible su máximo PC en la ficha
- [x] El usuario puede ordenar los pokémon según su poder de combate (ascendente)
- [x] El usuario puede ordenar los pokémon según su poder de combate (descendente)

D.T.:
- [x] Se respeta el diseño de prototipado
- [x] Se utiliza html semántico
- [x] Se utiliza html dinámico
- [x] Se trabaja en pair-programming
- [x] El código utiliza arrays (sort, reverse) y objects
- [x] El código está actualizado en el repositorio
- [x] Se implementa función para ordenar a los 251 pokémon según PC

3. _"Yo como jugador de PG, quiero clickear en las fichas y que se den vuelta como cartas para ver la información adicional de cada pokémon"._

C.A.:
- [ ] Cuando el usuario elige a un Pokémon, la ficha se da vuelta como una carta y muestra información adicional
- [ ] La transición del giro de la ficha es suave
- [ ] El color del reverso es el mismo que el frontal (correspondiente a cada generación)

D.T.:
- [ ] Se respeta el diseño de prototipado
- [ ] Se utiliza html semántico
- [ ] Se utiliza html dinámico
- [ ] Se trabaja en pair-programming
- [ ] La transición se crea con CSS en stylesheet
- [ ] El código está actualizado en el repositorio
- [ ] Se implementa función para obtener la información adicional de cada pokémon
- [ ] El código está en el repositorio actualizado

4. _"Yo como jugador de PG, quiero saber cuáles son las chances de spawn de un pokémon, para priorizar las capturas"._

C.A.:
- [ ] Cuando el usuario elige a un Pokémon, las chances de spawn son mostradas al reverso de la ficha.
- [ ] La información es entregada de forma clara y concisa

D.T.:
- [ ] Se respeta el diseño de prototipado
- [ ] Se utiliza html semántico
- [ ] Se utiliza html dinámico
- [ ] Se trabaja en pair-programming
- [ ] El código está actualizado en el repositorio
- [ ] El código está en el repositorio actualizado

5. _"Yo como jugador de PG, quiero conocer la tasa de captura base de un pokémon, para optimizar mis recursos (pokeballs, bayas, inciensos, etc.)"_

C.A.:
- [ ] Cuando el usuario elige a un Pokémon, la tasa de captura base es mostradas al reverso de la ficha.
- [ ] La información es entregada de forma clara y concisa
 
D.T.:
- [ ] Se respeta el diseño de prototipado
- [ ] Se utiliza html semántico
- [ ] Se utiliza html dinámico
- [ ] Se trabaja en pair-programming
- [ ] El código está actualizado en el repositorio
- [ ] El código está en el repositorio actualizado
- [ ] Se realiza test de usabilidad al menos a 5 usuarios(*)

* **Planificación**

Link a Trello: https://trello.com/b/qhvhu0vq/data-lovers

* **Adicional a Historias de Usuario**

A) Para proveer una navegación personalizada, hemos creado una sección de login al momento de ingresar a la aplicación, solicitando un username y password.
B) Se crearon opciones para que el usuario pueda organizar la Pokédex con los siguientes criterios: A-Z, Z-A, n° menor (primero), n° mayor (primero).
C) Se crean filtros para que el usuario pueda elegir un tipo de Pokémon específico y la Pokédex retorne solo aquellos que cumplan con la condición.

* **Feedback adicional de los usuarios**

Dejamos a continuación algunos de los comentarios adicionales que recibimos de nuestros potenciales usuarios, esto a considerar para futuras mejoras 
al producto final y nuevas historias de usuario:

1. "Me gustaría más información sobre la probabilidad de aparición variocolor de cada Pokémon" (en referencia al spawn de Pokémon Shiny)
2. "Que haya más información sobre los ataques de los pokémones"
3. "Que no ocupe mucha memoria en el celular"
4. "Mostrar los mejores ataques de los pokémon y si conviene o no agregar 2do ataque"


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

* **Primera Versión**

![json-interfaz](https://imgur.com/6VIcUKv)

![json-interfaz](https://imgur.com/xqCYf4n)

![json-interfaz](https://imgur.com/pIZ1PQK)

## 5. IMAGEN FINAL DEL PROYECTO