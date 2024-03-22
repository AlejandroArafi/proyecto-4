import React from "react";
import "./Menu.css";

export const Menu = () => {
  return (
    <>
      <h1 className="entradas_title">Entradas</h1>

      <dl className="entradas">
        <dt>CALAMARES A LA ROMANA</dt>
        <dd>Calamares apanados y fritos</dd>

        <dt>CARPACCIO FILETE</dt>
        <dd>Carpaccio de filete de res</dd>

        <dt>Carpaccio Salmón</dt>
        <dd>Carpaccio de Salmón</dd>

        <dt>Gambas fritas y salsa Livornesa</dt>
        <br />

        <dt>Gamberi pil-pil</dt>
        <dd>Camarones al pil-pil</dd>

        <dt>Belvedere</dt>
        <dd>Mariscos en hojas de espinaca, salsa aioli</dd>

        <dt>Caprese di sempre</dt>
        <dd>
          Mozzarella de búfala en salsa de tomate tibia albahaca, rúcula y
          bruschettas
        </dd>
      </dl>

      <h1>Pastas</h1>
      <dl className="pastas">
        <dt>SPAGHETTI POMODORO</dt>
        <dd>Con tomate italiano natural y albahaca.</dd>

        <dt>SPAGHETTI NAPOLITANA</dt>
        <dd>CON SALSA DE TOMATES ARTESANAL LE DUE TORRI</dd>

        <dt>SPAGHETTI AL PESTO</dt>
        <dd>SPAGHETTI CON PESTO NATURAL ARTESANAL</dd>

        <dt>SPAGHETTI PUTTANESCA</dt>
        <dd>
          TOMATE ITALIANO, ANCHOAS, ALCAPARRAS, ACEITUNAS, UN LEVE TOQUE DE
          CACHO DE CABRA
        </dd>
      </dl>

      <h1>Carnes y pescados</h1>

      <dl className="carnes-y-pescados">
        <dt>LOMO VETADO A LA PARRILLA</dt>
        <dd>LOMO A LA PARRILLA</dd>

        <dt>FILETE PAILLARD A LA PARRILLA</dt>
        <dd>Filete achurrascado con un poco de ajo y romero.</dd>

        <dt>ESCALOPINES AL VINO BLANCO</dt>
        <dd>EXQUISITOS ESCALOPINES AL VINO BLANCO</dd>

        <dt>ESCALOPINES AL MARSALA</dt>
        <dd>
          Suaves y tiernos cocinados lentamente y terminados en un maravilloso
          marsala italiano.
        </dd>

        <dt>LOMO VETADO EN SALSA FUNGHI</dt>
        <dd>LOMO SALSA FUNGHI</dd>

        <dt>SALMóN A LA PARRILLA</dt>
        <dd>Salmón a la parrilla</dd>

        <dt>MERLUZA AUSTRAL A LA PARRILLA</dt>

        <dt>ALLA GENOVESE</dt>
        <dd>
          Salmon, Merluza Austral o Reineta Con salsa de tomate cherry, orégano,
          aceitunas y alcaparra.
        </dd>

        <dt>CONGRIO A LA MEDITERRANEA</dt>
        <dd>
          Cocinado con Hierbas Frescas, Ajo, Zeste de limon, Oliva y Vino Blanco
        </dd>

        <dt>CONGRIO SALSA MARGARITA</dt>
        <dd>Congrio Grill con Salsa de Mariscos de la Temporada</dd>
      </dl>

      <h1>Vinos y espumantes</h1>

      <dl className="vinos-y-espumantes">
        <dt>CASAS PATRONALES RESERVA</dt>
        <dt>CHOCALAN RESERVA</dt>
        <dt>SANTA EMA SELECT TERROIR RESERVA</dt>
        <dt>MONTES ALPHA</dt>
        <dt>Chianti Classico di Montemaggio</dt>
        <dt>Cantina di Montalcino Brunello di Montalcino 2013</dt>
        <dt>Castorani Montepulciano d’Abruzzo Amorino</dt>

        <h1>ESPUMANTES</h1>

        <dt>VIÑA MAR BRUT</dt>
        <dt>RICCARDONA ASTI</dt>
        <dt>CHARDON BRUT</dt>
      </dl>

      <h1>POSTRES Y CAFES</h1>

      <dl className="postres-y-cafes">
        <dt>COLORI DI STAGIONE</dt>
        <dd>ENSALADA DE FRUTAS DE LA TEMPORADA</dd>

        <dt>TIRAMISú DE FRAMBUESA</dt>
        <dd>
          Crema esponjosa de mascarpone, bizcochos mojados en salsa de frambuesa
          y una pizca de cacao espolvoreado
        </dd>
        <dt>FIOR DI LIMONE</dt>
        <dd>Torta de panqueque y limón al estilo Due Torri.</dd>

        <dt>PANNA COTTA DEL BOSCO</dt>
        <dd>Con ragu de frutos del bosque.</dd>

        <dt>VOLCANO DE CHOCOLATE</dt>
        <dd>
          Volcan con deliciosa salsa de chocolate tibio y helado de vainilla.
        </dd>

        <dt>CHEESECAKE DUE TORRI</dt>
        <dd>Chessecake clasico con frutilla y salsa de nutella.</dd>

        <dt>TORTA FIRENZE</dt>
        <dd>Crema Inglesa, manjar, almendras y galletas de vino.</dd>

        <dt>BROWNIE E GELATTO</dt>
        <dd>
          Clásico bizcocho de chocolate con helado de vainilla, salsa de
          chocolate y nueces.
        </dd>

        <h1>CAFETERIA y TETERIA</h1>

        <dt>TÉ IMPORTADO</dt>
        <dd>Variedades</dd>

        <dt>CAFÉ ESPRESSO</dt>
        <dd>Café en grano Musetti</dd>

        <dt>Lungo</dt>
        <dd>
          Elaborada con la misma cantidad de café que un espresso pero con el
          doble de agua
        </dd>

        <dt>CORTADO</dt>
        <dd>
          Poca espuma en una proporción balanceada de leche por cada shot de
          espresso
        </dd>

        <dt>CAPUCCINO</dt>
        <dd>Shot de expreso, vapor y espuma de leche a partes iguales</dd>
      </dl>
    </>
  );
};