<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validador</title>
    <link rel="stylesheet" href="style.css" />
    <!-- <link rel="Homepage" href="src\index.html" /> -->
    <!-- Pusiste esta parte por qué quieres que se cree una conexión entre esta parte y el HTML inicial, 
    junto con el CSS inicial-->

</head>

<body>
    <header>
        <nav></nav>
    </header>
    <main>
        <footer></footer>
        <h1 class="pagetwo__title"> Antes de iniciar necesitamos validar tu pase para jugar</h1>
        <h2 class="pagetwo__subtitle"> Ingresa el número de tu tarjeta</h2>

<p>
<input type="number" name="inputnumberr" class="inputnumber" placeholder="Ingresa tu numero de tarjeta" required>
<!-- Placeholder: lo usamos para las letras que va sobre el campo a llenar -->
    <!--value sirve para saber cual fue el dato que me envio el usuario cuando lo envio -->
    <!-- required ayuda a que sea un campo obligatorio  -->
</p>
        <p>
            <button class="pagetwo__button" id="pagetwo__button" type="button" name="pagetwo__button">
                <a href="index3.html"
                title="Iniciar validación">VALIDAR</a>
            </button>
            <!-- Recuerda que es mejor usar Button porque este se puede modificasr en el HTML-->
            <!-- Recuerda que usas la clase para poder llamarlo al CSS-->
            <!-- a,href se emplea para la creación de enlaces directos dentro de la página HTML-->
        </p>
        

        <!--<header>
            <nav>
                <ul class="main-nav">
                    <li class="main--nav_item"><a href="">Home </a></li>
                    <li class="main--nav_item"><a href="">Validator </a></li>
                    <li class="main--nav_item"><a href="">Finish </a></li>
                    <li class="main--nav_item"><a href=""> Landypage</a></li>
                </ul>

            </nav>


        </header> -->

         <script src="index.js" type="module"></script> 
</body>

</html>