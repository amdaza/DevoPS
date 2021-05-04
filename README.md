# Prueba de código - Devo PS
La prueba de código consta de 2 ejercicios bien diferenciados; uno en Python y otro en
Javascript, cuyos enunciados se describen en este documento. Por otro lado para ver
los conocimientos de git, esta prueba de código se entregará en un repositorio de
github, bitbucket o similar, teniendo que entregar como resultado de la prueba de
código la URL del proyecto. Para esta prueba de código se deben de seguir los
siguientes pasos.
1. Crear un proyecto nuevo
2. Añade un README.md vacío haz un primer commit con el mensaje “primer
commit”.
3. Creamos una nueva rama llamada “ejercicio1” y en ella realizamos el Ejercicio
1. Creamos un directorio llamado “Ejercicio1” en el que estará el código
referente al ejercicio 1.
4. Al finalizar el ejercicio 1 se realizará un commit con el mensaje “fin del
ejercicio 1”. Previo a este commit se pueden realizar los commits que se
quieran con mensaje libre.
5. Volvemos a la rama master (sin hacer un merge) y creamos un directorio
llamado “Ejercicio2” en el que estará el código referente al ejercico 2.
6. Al finalizar el ejercicio 2 se realizará un commit con el mensaje “fin del
ejercicio 2”. Previo a este commit se pueden realizar los commits que se
quieran con mensaje libre.
7. Por último mergeamos la rama “ejercicio1” con master, teniendo como
resultado dos directorios “Ejercicio1” y “Ejercicio2”, a parte del README.md.
Cualquier comentario, explicación del código, documentación, etc. referente a la
prueba de código estará reflejada en el fichero README.md.
## Ejercicio 1
Crear una función en python que dada una lista de números indique para cada número
si es un número perfecto, abundante o defectivo.
• Un número perfecto es aquel que es igual a la suma de sus divisores
propios positivos, excluyéndose a sí mismo. Por ejemplo 6 = 1+2+3
• Un número abundante es aquel que la suma de los divisores propios es
mayor que el número.
• Un número defectivo es aquel que la suma de los divisores propios es
menor que el número.
Se deberá usar Python 3.5 o superior y no se permitirá el uso de librerías externas que
obtengan la clasificación del número. 
## Ejercicio 2
Dados 3 juegos de datos, se solicita que se cree una página web que mediante ajax
lea las 3 fuentes de datos y muestre 2 gráficas de highcharts, una gráfica de líneas
con la fecha en eje x y tantas series como categorías, y un pie chart por categoría
agrupando los datos totales (sumatorio de los valores de cada categoría).
Las fuentes tienen información temporal una fecha, categoría y un valor. Se deben
combinar las series de tal modo que si en más de una serie para una misma fecha y
categoría hay datos estos se sumarán. Las categorías deberán normalizarse para que
todas estén en mayúsculas, “Cat 1” y “cat 1” son equivalentes a “CAT 1”
La serie 1 tiene datos en el siguiente formato:
{"d":1435708800000,"cat":"Cat 1","value":832.803815816826}
donde d es la fecha en milisegundos, cat es la categoría y value el valor Está
accesible en http://s3.amazonaws.com/logtrust-static/test/test/data1.json
La serie 2 tiene datos en el siguiente formato:
{"myDate":"2015-06-02","categ":"CAT 1","val":46.300059172697175}
donde mydate es fecha en formato YYYY-MM-DD categ es la categoría y val el valor
Está accesible en http://s3.amazonaws.com/logtrust-static/test/test/data2.json
La serie 3 tiene datos en el siguiente formato:
{"raw":"9OHbc9 O1 WHTxiBPa auwZIVD6 j8jMWWVH UdB6hy 2015-06-18 XF
5xhcx15DD sbYFRPn dyoH1OOIF 6meHw pANknwa2h T imhs24gR5 #cat
1#","val":39.38690127513058}
donde raw contiene datos en raw con palabras la fecha en formato YYYY-MM-DD y la
categoría entre #, se deberá hacer un procesado del raw para sacar la categoría y la
fecha. val es el valor. En el ejemplo la fecha sería 2015-06-18 y categoría normalizada
CAT 1. Está accesible en http://s3.amazonaws.com/logtrust-static/test/test/data3.json
Se permite el uso de librerías para la resolución del problema.
La gráfica de líneas debe ser como la de la imagen con las categorías y datos
correspondientes a los datos ofrecidos. 
El pie chart similar a la de la imagen con los datos ofrecidos para realizar las
agregaciones necesarias.
