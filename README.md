# Tarjeta de crédito válida
PROYECTO VALIDACIÓN TARJETA DE CRÉDITO
PRODUCTO: KIWI BANK 
REALIZADO POR: LEIDY TAPIAS Y MARÍA FERNANDA VALENCIA


## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Pistas, tips y lecturas complementarias](#6-pistas-tips-y-lecturas-complementarias)

***

## 1. Contexto:

Somos un banco digital que ofrece acceso a productos crediticios de manera ágil sin necesidad de desplazamiento o llamadas telefónicas. Nuestros usuarios pueden activar su tarjeta de crédito de forma virtual, una vez esta haya sido entregada a los mismos.

## 2. Nuestro público objetivo:

Hombres y mujeres mayores de edad que usan la tecnología dentro de su día a día para operaciones bancarias digitales y son conocedores de productos financieros o portafolios.
Nuestros usuarios prefieren un servicio onmicanal, sin dejar de lado la conexión humana cuando se requiera. Prefieren ante todo la simplicidad en los procesos, accesos a plataformas digitales eficientes y efectivas para la optimización de su tiempo. 

## 3. Plataforma activación TC Kiwi Bank
Pensando en la comodidad e interacción de nuestros usuarios, cambiamos la manera tradicional de los bancos en lo que respecta a convenir y activar productos financieros como lo es nuestra tarjeta de crédito Kiwi Bank. 
Nuestra plataforma es sencilla e intuitiva para la activación de la TC. En solo cuatro pasos nuestros usuarios podrán activar su tarjeta de crédito de manera ágil y segura, sin necesidad de llamadas. 

Recorrido de nuestros usuarios dentro de la plataforma Kiwi Bank


![diagrama de flujo](https://drive.google.com/uc?export=download&id=1AzvAcUe2m04G6tzKSWh2CWgqYA9V8WHw)

## 5. Criterios de aceptación mínimos del proyecto

⦁	Ingresar a: ⦁	www.KiwiBank.com/TarjetaKiwi
⦁	Selecciona entre las siguientes opciones:
Solicita tu tarjeta de crédito / Activa tu tarjeta de crédito
⦁	Llena el formulario
Nombre
Apellido 
Número de tarjeta 
⦁	Haz clic en el botón activar. Si todo está bien la tarjeta se activará para poder usarla.

### UX (Diseño de experiencia de usuario)
![primer prototipo](https://drive.google.com/uc?export=download&id=1og_b0vZS_ZovKv6s7ilnDxto-jvW0huQ)

Iniciamos por la base de todo que sería la implementación del algoritmo de Luhan. Para ello, investigamos de qué manera trabaja el algoritmo y cómo podríamos replicarlo. Seguido a esta investigación previa, definimos los objetivos y el paso a paso del algoritmo comenzando por el ingreso que hace el usuario de los 16 dígitos de la tarjeta de crédito la cual, llega a JS como un string. Una vez obtenemos el número y este cumple con los requisitos de cantidad (16 números en total sin letras ni caracteres especiales), tomamos este string y lo convertimos a un arreglo inverso.  Para poder multiplicar cada número par del arreglo, lo que hicimos fui iterarlo con ayuda de un Split y luego aplicamos el operador modulo para identificar el número par dentro del arreglo. 
El algoritmo indica que si el resultado de dicha multiplicación es un número = o > a 10, se deben sumar y el derivado de estos se sumarían con los números impares o el total de número dentro del arreglo. Cuando obtenemos el resultado de la suma, dividimos este número entre 10 y si el residuo es cero quiere decir que la tarjeta es válida. 
![prototipo 2](https://drive.google.com/uc?export=download&id=1QC1JNuUvtPef4OxM-tS7tsXGjgprCdCz)

![prototipo final](https://drive.google.com/uc?export=download&id=1jphY4jT0mS5CGny2q_JheOrPWjB7N_jE)

![pruebas](https://drive.google.com/uc?export=download&id=1IV26ne0-5RvGeXTCqRwHBYga6b3oEQ6sREDmRjpfQX0)



