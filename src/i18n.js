/* eslint-disable quote-props */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {},
  },
  de: {
    translation: {
      'Language changed': 'Sprache geändert',
      'Your tier': 'Ihre Stufe',
      'General': 'Allgemein',
      'Overview': 'Überblick',
      'Analytics': 'Analytik',
      'Finance': 'Finanzen',
      'Logistics': 'Logistik',
      'Account': 'Konto',
      'Management': 'Verwaltung',
      'Customers': 'Kunden',
      'List': 'Aufführen',
      'Details': 'Einzelheiten',
      'Edit': 'Bearbeiten',
      'Products': 'Produkte',
      'Create': 'Schaffen',
      'Orders': 'Aufträge',
      'Invoices': 'Rechnungen',
      'Platforms': 'Plattform',
      'Job Listings': 'Stellenangebote',
      'Browse': 'Durchsuche',
      'Social Media': 'Sozialen Medien',
      'Profile': 'Profil',
      'Feed': 'Füttern',
      'Blog': 'Blog',
      'Post List': 'Beitragsliste',
      'Post Details': 'Beitragsdetails',
      'Post Create': 'Beitrag erstellen',
      'Apps': 'Apps',
      'Kanban': 'Kanban',
      'Mail': 'E-Mail',
      'Chat': 'Plaudern',
      'Calendar': 'Kalender',
      'Pages': 'Seiten',
      'Auth': 'Authentifizierung',
      'Register': 'Registrieren',
      'Login': 'Anmeldung',
      'Pricing': 'Preisgestaltung',
      'Checkout': 'Auschecken',
      'Contact': 'Kontakt',
      'Error': 'Fehler',
      'Need Help?': 'Brauchen Sie Hilfe?',
      'Check our docs': 'Überprüfen Sie unsere Dokumente',
      'Documentation': 'Dokumentation',
    },
  },
  es: {
    translation: {
      '$11/month': '$11/mes',
      '$25/month': '$25/mes',
      '$80/month': '$80/mes',
      '(This feature will be available in a future release of Cocina Digital.)':
        '(Esta función estará disponible en una versión futura de Cocina Digital.)',
      "(28 February 2025)": "(28 de febrero de 2025)",
      "(February 28, 2025)": "(febrero 28, 2025)",
      '1 yellow onion = 300g, 1 carrot = 260g, etc.': '1 cebolla amarilla = 300g, 1 zanahoria = 260g, etc.',
      '1st Street': '1a Calle',
      '2 kilograms of ribeye steak': '2 kilogramos de bistec de ribeye',

      'a bottle of extra virgin olive oil or a tub of mayonnaise.':
        'una botella de aceite de oliva extra virgen o un frasco de mayonesa.',

      'a bottle or can': 'una botella o lata',

      'A box with the keyword will appear below the Keywords field.':
        'Aparecerá un cuadro con la palabra clave debajo del campo Palabras Clave.',
      'A Combo is a menu item that is comprised of other menu items.':
        'Una Combinación es un elemento del menú que se compone de otros elementos del menú.',
      'A common example would be eggs.': 'Un ejemplo común serían los huevos.',
      'A Fixed Price is a price that you specify and it is not calculated by Cocina Digital.':
        'Un Precio Fijo es un precio que especificas y no es calculado por Cocina Digital.',
      'A Fixed Price takes precedence over a Calculated Price':
        'Un Precio Fijo tiene prioridad sobre un Precio Calculado',
      'A food cost calculator can do it in a few seconds.':
        'Una calculadora de costos de alimentos puede hacerlo en unos segundos.',
      'A food cost calculator is generally a spreadsheet or a dynamic web page that allows you to add up the cost of a dish based on the quantity of each ingredient used and the price paid for those ingredients.':
        'Una calculadora de costos de alimentos es generalmente una hoja de cálculo o una página web dinámica que te permite sumar el costo de un plato basado en la cantidad de cada ingrediente utilizado y el precio pagado por esos ingredientes.',
      'A food cost calculator is one of the most valuable tools that a food service professional or a home cook can use to keep track of the costs of the ingredients in their dishes.':
        'Una calculadora de costos de alimentos es una de las herramientas más valiosas que un profesional de servicios de alimentos o un cocinero casero puede usar para llevar un registro de los costos de los ingredientes en sus platos.',

      'A food cost calculator should be intuitive to use, support a wide variety of ingredients, accommodate multiple vendors, allow quick updates to the cost of a dish based on fluctuating ingredient costs, and scale with the number of dishes offered on a menu.':
        'Una calculadora de costos de alimentos debería ser intuitivo de usar, admitir una amplia variedad de ingredientes, acomodar a múltiples proveedores, permitir actualizaciones rápidas al costo de un plato basado en los costos fluctuantes de los ingredientes y escalar con la cantidad de platos ofrecidos en un menú.',
      'A Food Cost Calculator Should Grow With Your Business':
        'Una Calculadora de Costos de Alimentos Debería Crecer con tu Negocio',
      'A food cost calculator should not force you to price dishes based on what is available from only one supplier.':
        'Una calculadora de costos de alimentos no debería obligarte a fijar precios de platos basados en lo que está disponible de solo un proveedor.',
      'A markup can be applied over the base Calculated Price and its effect on the final price is viewable in real time':
        'Se puede aplicar un marcado sobre el Precio Calculado base y su efecto sobre el precio final es visible en tiempo real',
      'A markup can be applied over the base Combo Calculated Price and its effect on the final price is viewable in real time':
        'Se puede aplicar un marcado sobre el Precio Calculado base de la Combinación y su efecto sobre el precio final es visible en tiempo real',
      'A Menu Item is a dish that you sell.': 'Un Elemento del Menú es un plato que vendes.',
      'A menu item is the dish that is ordered by a customer from your menu.':
        'Un Elemento del Menú es el plato que un cliente ordena de tu menú.',
      'A menu item that is inactive will not be available for viewing when you decide to publish your data live to websites or mobile apps.':
        'Un Elemento del Menú inactivo no estará disponible para su visualización cuando decidas publicar tus datos en vivo en sitios web o aplicaciones móviles.',
      'A more advanced food cost calculator should show you if one supplier you work with offers a better price than another supplier, and allow you to seamlessly switch between the two suppliers to minimize your cost, allowing you to keep prices down while maintaining a healthy profit margin.':
        'Una calculadora de costos de alimentos más avanzado debería mostrarte si un proveedor con el que trabajas ofrece un mejor precio que otro proveedor, y permitirte cambiar sin problemas entre los dos proveedores para minimizar tu costo, lo que te permite mantener los precios bajos mientras mantienes un margen de beneficio saludable.',
      'a package of fettuccine may be sold in a box, where each box contains 1 pound of fettuccine.':
        'un paquete de fettuccine puede venderse en una caja, donde cada caja contiene 1 libra de fettuccine.',

      'a package that contains 1 pound of fettuccine.': 'un paquete que contiene 1 libra de fettuccine.',
      'a package that contains 12 eggs.': 'un paquete que contiene 12 huevos.',
      'A perfect middle-of-the-road plan for those who make a living selling food.':
        'Un plan perfecto para aquellos que se ganan la vida vendiendo comida.',
      'A professional, 100% online food cost calculator that allows you to easily manage the costs of your dishes.':
        'Una calculadora de costos de alimentos profesional y 100% en línea que te permite administrar fácilmente los precios de tus platos.',
      'A professional, 100% online food cost calculator that allows you to easily manage the costs of your dishes, so you know how much to charge to increase profits':
        'Una calculadora de costos de alimentos profesional que te permite administrar los precios de tus platos, para que sepas cuánto cobrar para aumentar las ganancias',
      'A professional, 100% online tool that allows you to easily calculate the costs of your dishes.':
        'Una herramienta profesional y 100% en línea que te permite calcular fácilmente los costos de tus platos.',
      'A recipe tells you how to cook a dish, but a Menu Item is the actual dish ready to be ordered.':
        'Una receta te dice cómo cocinar un plato, pero un Elemento del Menú es el plato real listo para ser ordenado.',
      'A Temporary Price takes precedence over a Fixed Price':
        'Un Precio Temporal tiene prioridad sobre un Precio Fijo',
      'A valid price for Calculated Price, Fixed Pricing, or a temporary price is required':
        'Se requiere un precio válido para Precio Calculado, Precios Fijos o un precio temporal',
      'A vendor may only sell the ingredient by the box or crate.':
        'Un proveedor solo puede vender el ingrediente por caja o cajón.',
      'A vinaigrette may be one of the ingredients that you use in a Menu Item for a salad, but the vinaigrette is actually an ingredient composed of other ingredients: extra virgin olive oil, salt, vinegar, Dijon mustard, and so on.':
        'Una vinagreta puede ser uno de los ingredientes que usas en un Elemento del Menú para una ensalada, pero la vinagreta es en realidad un ingrediente compuesto de otros ingredientes: aceite de oliva extra virgen, sal, vinagre, mostaza de Dijon, y así sucesivamente.',

      'Access to Approximate Weights of ingredients already researched and verified by Cocina Digital to save you the time of weighing common ingredients':
        'Acceso a Pesos Aproximados de ingredientes ya investigados y verificados por Cocina Digital para ahorrarte el tiempo de pesar ingredientes comunes',
      'Accept': 'Aceptar',
      'accept': 'aceptar',
      'Accept new calculated price (recommended)': 'Aceptar nuevo precio calculado (recomendado)',
      'Accept new price': 'Aceptar nuevo precio',
      'Accept this estimate': 'Aceptar este presupuesto',
      'Access to all online documentation and tutorials': 'Acceso a toda la documentación y tutoriales en línea',
      'Account': 'Cuenta',
      'Account Details': 'Detalles de la Cuenta',
      'Account Username': 'Nombre de Usuario de la Cuenta',
      'Actions': 'Acciones',
      'Active': 'Activo',
      'Active Ingredients': 'Ingredientes Activos',
      'Active Only': 'Solo Activo',
      'Active only': 'Solo activo',
      'active only': 'solo activo',
      'Add': 'Agregar',
      'Add ': 'Agrega ',
      'Add & edit up to 100 ingredients': 'Agregar y editar hasta 100 ingredientes',
      'Add & edit up to 1000 ingredients': 'Agregar y editar hasta 1000 ingredientes',
      'Add & edit up to 2100 ingredients': 'Agregar y editar hasta 2100 ingredientes',
      'Add & edit up to 4000 ingredients': 'Agregar y editar hasta 4000 ingredientes',
      'Add a Markup Percentage': 'Agregar un Porcentaje de Sobreprecio',
      'Add a Menu Item': 'Agregar un Elemento del Menú',
      'Add a New Approximate Weight': 'Agregar un Nuevo Peso Aproximado',
      'Add a New Ingredient': 'Agregar un Nuevo Ingrediente',
      'Add a New Menu Item': 'Agregar un Nuevo Elemento del Menú',
      'Add a New Vendor': 'Agregar un Nuevo Vendedor',

      'Add/Edit': 'Agregar/Modificar',
      'Add/Edit Approximate Weight': 'Agregar/Modificar Peso Aproximado',
      'Add/Edit Approximate Weights': 'Agregar/Modificar Pesos Aproximados',
      'Add/Edit Ingredient': 'Agregar/Modificar Ingrediente',
      'Add/Edit Menu Item': 'Agregar/Modificar Elemento del Menú',
      'Add/Edit Vendor': 'Agregar/Modificar Vendedor',
      'Add Ingredients': 'Agregar Ingredientes',
      'Add my own estimate': 'Agregar mi propio presupuesto',
      'Add to cart': 'Añadir al carrito',
      "Add your ingredients, specify how much of the ingredients are used in a dish, and let Cocina Digital do the calculations automatically.": "Agrega tus ingredientes, especifica cuánto de los ingredientes se usan en un plato y deja que Cocina Digital haga los cálculos automáticamente.",
      'Additional Locales': 'Idiomas Adicionales',
      'Adding ingredients is done through the form on this page:':
        'Agregar ingredientes se hace a través del formulario en esta página:',
      'Adjust and Save Your Profile Picture': 'Ajusta y Guarda tu Foto de Perfil',
      'After 90 days, your data will be deleted.': 'Después de 90 días, tus datos se eliminarán.',
      'After having done so, you need to specify the Portion Size.':
        'Después de haberlo hecho, debes especificar el Tamaño de la Porción.',
      'After the end of your current billing period, your account will revert to the Free Tier plan and you will lose access to the features of your current plan.':
        'Después del final de tu período de facturación actual, tu cuenta volverá al plan de Nivel Gratis y perderás el acceso a las características de tu plan actual.',
      "After you've entered your ingredients, you can start calculating how much you are spending on ingredients to prepare a dish.": "Después de haber ingresado tus ingredientes, puedes comenzar a calcular cuánto estás gastando en ingredientes para preparar un plato.",
      'Again, no need to enter the brand of the olive oil.':
        'Nuevamente, no es necesario ingresar la marca del aceite de oliva.',
      'All features of the Free Tier plan with the following upgrades:':
        'Todas las características del plan de Nivel Gratis con las siguientes mejoras:',
      'All features of the Professional plan with the following upgrades:':
        'Todas las características del plan Profesional con las siguientes mejoras:',
      'All features of the Starter plan with the following upgrades:':
        'Todas las características del plan de Iniciador con las siguientes mejoras:',
      'All ingredients that you enter into': 'Todos los ingredientes que ingresas en',
      'All ingredients that you enter into Cocina Digital can be used in designing a Menu Item.':
        'Todos los ingredientes que ingresas en Cocina Digital se pueden usar para diseñar un Elemento del Menú.',
      'All Menu Items require a name.': 'Todos los Elementos del Menú requieren un nombre.',
      'all-purpose flour': 'harina para todo uso',
      'All Rights Reserved': 'Todos los derechos reservados',
      'All rights reserved': 'Todos los derechos reservados',
      'All Rights Reserved.': 'Todos los derechos reservados.',
      'All rights reserved.': 'Todos los derechos reservados.',
      'Allow Cookies': 'Permitir Cookies',
      'almond slices': 'rodajas de almendra',
      'Almost all other tools on the market that claim to offer to help you manage your food costs expect that you download their spreadsheet and then fill it in.':
        'Casi todas las demás herramientas en el mercado que afirman ofrecerte ayuda para administrar tus costos de alimentos esperan que descargues su hoja de cálculo y luego la completes.',
      'Although this might seem more streamlined, this quickly becomes unmanageable as the number of dishes on the menu changes based on consumer dining preferences and as the cost of ingredients go up or down due to inflation, seasonality of fruits and vegetables, buying from different suppliers who have their own markups, or political events that affect regional or global supply chains.':
        'Aunque esto podría parecer más simplificado, rápidamente se vuelve inmanejable a medida que el número de platos en el menú cambia según las preferencias gastronómicas del consumidor y a medida que el costo de los ingredientes sube o baja debido a la inflación, la estacionalidad de las frutas y verduras, la compra de diferentes proveedores que tienen sus propios márgenes o eventos políticos que afectan las cadenas de suministro regionales o globales.',
      'and': 'y',
      'And how many': 'Y cuántos',
      'Already have an account?': '¿Ya tienes una cuenta?',
      'Although a Menu Item may seem to be like a recipe, it is not.':
        'Aunque un Elemento del Menú puede parecerse a una receta, no lo es.',
      'Although it is great advice to weigh ingredients when baking, many people still measure by volume.':
        'Aunque es un gran consejo pesar los ingredientes al hornear, muchas personas aún miden por volumen.',
      "Although the meat is wrapped in a package, you are buying it by weight as you'll notice that the price is per pound, kilogram, etc.":
        'Aunque la carne está envuelta en un paquete, la estás comprando por peso, ya que notarás que el precio es por libra, kilogramo, etc.',

      'Although you can enter any number of keywords, we suggest you limit it to no more than two.': 'Aunque puedes ingresar cualquier número de palabras clave, te sugerimos que lo limites a no más de dos.',
      'Although you may be required to buy your ingredient in a package, we still want to try to break down the specifics of what is in the package.':
        'Aunque es posible que se le exija comprar su ingrediente en un paquete, aún queremos intentar desglosar los detalles de lo que hay en el paquete.',
      'Although the quantity of the ingredients used in a dish is of significant importance when trying to determine the cost of a dish, there could result a different overall cost when bought from another supplier.':
        'Aunque la cantidad de los ingredientes utilizados en un plato es de gran importancia al intentar determinar el costo de un plato, podría resultar un costo total diferente cuando se compra a otro proveedor.',
      'Although you said that the package contains a fixed weight, will you be using individual items of the ingredient in a Menu Item?':
        'Aunque dijiste que el paquete contiene un peso fijo, ¿usarás artículos individuales del ingrediente en un Elemento del Menú?',
      'American Cheese': 'Queso Americano',
      'Amount': 'Cantidad',
      'amount': 'cantidad',
      'AMOUNT': 'CANTIDAD',
      'Amount of gallons in container': 'Cantidad de galones en el contenedor',
      'Amount of milliliters in container': 'Cantidad de mililitros en el contenedor',
      'Amount of fluid ounces in container': 'Cantidad de onzas líquidas en el contenedor',
      'Amount of liters in container': 'Cantidad de litros en el contenedor',
      'Amount of quarts in container': 'Cantidad de cuartos en el contenedor',
      'Amount of pints in container': 'Cantidad de pintas en el contenedor',
      'Amount of pounds in container': 'Cantidad de libras en el contenedor',
      'Amount of kilograms in container': 'Cantidad de kilogramos en el contenedor',
      'Amount of ounces in container': 'Cantidad de onzas en el contenedor',
      'Amount of grams in container': 'Cantidad de gramos en el contenedor',
      'Amount of weight in container': 'Cantidad de peso en el contenedor',

      'Amount of estimated weight': 'Cantidad de peso estimado',
      'Amount of pounds per package': 'Cantidad de libras por paquete',
      'Amount of kilograms per package': 'Cantidad de kilogramos por paquete',
      'Amount of ounces per package': 'Cantidad de onzas por paquete',
      'Amount of grams per package': 'Cantidad de gramos por paquete',
      'Amount of weight per package': 'Cantidad de peso por paquete',
      'Amount of gallons in each container': 'Cantidad de galones en cada contenedor',
      'Amount of liters in each container': 'Cantidad de litros en cada contenedor',
      'Amount of quarts in each container': 'Cantidad de cuartos en cada contenedor',
      'Amount of pints in each container': 'Cantidad de pintas en cada contenedor',
      'Amount of fluid ounces in each container': 'Cantidad de onzas líquidas en cada contenedor',
      'Amount of milliliters in each container': 'Cantidad de mililitros en cada contenedor',
      'Amount Produced: what is the yield (amount produced) for this compound ingredient?':
        'Cantidad Producida: ¿cuál es el rendimiento (cantidad producida) para este ingrediente compuesto?',
      'Amount Produced': 'Cantidad Producida',
      'Amount Produced is a required field when the "This is a Compound Ingredient" checkbox is checked':
        'Cantidad Producida es un campo requerido cuando se marca la casilla "Este es un Ingrediente Compuesto"',
      'Amount Produced must be a number': 'Cantidad Producida debe ser un número',
      'Amount Produced must be a value greater than 0': 'Cantidad Producida debe ser un valor mayor que 0',

      'An approximate weight that is inactive will not be be among the options available when searching for the approximate weight of an ingredient, so it is recommended to check the  checkbox for "This Record is Active" for any approximate weight record.':
        'Un peso aproximado que está inactivo no estará entre las opciones disponibles al buscar el peso aproximado de un ingrediente, por lo que se recomienda marcar la casilla "Este Registro está Activo" para cualquier registro de peso aproximado.',
      'An "approximate weight" would be the average weight of the ingredient if the ingredient is something that could be used in its entirety.':
        'Un "peso aproximado" sería el peso promedio del ingrediente si el ingrediente es algo que se podría usar en su totalidad.',
      'An average, single Fuji apple, as an example, has a weight of about 280 grams.':
        'Una manzana Fuji promedio, por ejemplo, tiene un peso de aproximadamente 280 gramos.',
      'An average carrot has an approximate weight of 260 grams per unit and, once diced up, has an approximate weight of 6 grams per tablespoon.':
        'Una zanahoria promedio tiene un peso aproximado de 260 gramos por unidad y, una vez cortada en cubitos, tiene un peso aproximado de 6 gramos por cucharada.',
      'An example of this would be a vinaigrette.': 'Un ejemplo de esto sería una vinagreta.',
      'An ingredient that is inactive will not be available for selection when creating a Menu Item.':
        'Un ingrediente inactivo no estará disponible para su selección al crear un Elemento del Menú.',
      'An online-based food cost calculator, due to its distributed design in the cloud, is already built to scale as your quantity of ingredients, vendors, and menu items scale.':
        'Una calculadora de costos de alimentos basado en línea, debido a su diseño distribuido en la nube, ya está construido para escalar a medida que tu cantidad de ingredientes, proveedores y elementos del menú escala.',
      'An unknown error occurred': 'Ocurrió un error desconocido',
      'Analytics': 'Analítica',
      'and the ingredient will not be available for use in a':
        'y el ingrediente no estará disponible para su uso en un',
      'Another example could be pasta:': 'Otro ejemplo podría ser la pasta:',
      'Another example might be a package of cinnamon sticks.':
        'Otro ejemplo podría ser un paquete de palitos de canela.',
      'Any markup that may have been applied to the base price of each Menu Item is not included in the calculated price of the combination platter.':
        'Cualquier margen de beneficio que se haya aplicado al precio base de cada Elemento del Menú no está incluido en el precio calculado del plato combinado.',
      'Any matches to your search will appear below the field.':
        'Cualquier coincidencia con tu búsqueda aparecerá debajo del campo.',
      'Any payment you already made from your previous plan will be prorated and you will be invoiced the difference.':
        'Cualquier pago que ya hayas realizado de tu plan anterior se prorrateará y se te facturará la diferencia.',
      'Any payment you already made from your previous plan will be prorated and refunded to you.':
        'Cualquier pago que ya hayas realizado de tu plan anterior se prorrateará y se te reembolsará.',
      "Anything that you enter can, of course, be edited later, so don't overthink this.":
        'Todo lo que ingreses, por supuesto, se puede editar más tarde, así que no lo pienses demasiado.',
      'approx.': 'aprox.',
      'Approximate Weight': 'Peso Aproximado',
      'Approximate Weight List Table': 'Tabla de Lista de Pesos Aproximados',
      'Approximate Weights': 'Pesos Aproximados',
      'Approximate weights': 'Pesos aproximados',
      'Approximate Weights are Shortcuts in Specifying Ingredient Quantities':
        'Los Pesos Aproximados son Atajos para Especificar las Cantidades de los Ingredientes',
      'Approximately how many items are there per package?': '¿Aproximadamente cuántos artículos hay por paquete?',
      'Apps': 'Aplicaciones',
      'are in each container?': 'están en cada contenedor?',
      'are in the container?': 'hay en el recipiente?',
      'are sold in the package?': 'se venden en el paquete?',
      'Are the individual items in the package things that require a further breakdown based on their weight?':
        '¿Los artículos individuales en el paquete son cosas que requieren un desglose adicional basado en su peso?',
      'Are the individual units in the package themselves containers such as a bottle, can, tube, jar, or similar?':
        '¿Las unidades individuales en el paquete son contenedores como una botella, lata, tubo, frasco o similar?',
      'are there per package?': 'hay por paquete?',
      'Are we talking about grams, kilograms, ounces, pounds...?': '¿Estamos hablando de gramos, kilogramos, onzas, libras...?',
      'Are you still there?': '¿Sigues ahí?',
      'Articles': 'Artículos',
      "Articles & Newsletters": "Artículos y Boletines",
      'As a reminder, a Fixed Price takes precedence over a Calculated Price.':
        'Como recordatorio, un Precio Fijo tiene prioridad sobre un Precio Calculado.',
      'As a result, the Calculated Price increased from $1.50 to $2.10 automatically.':
        'Como resultado, el Precio Calculado aumentó de $1.50 a $2.10 automáticamente.',
      'As an example, buying a sack of potatoes from Costco means buying a fixed weight of potatoes where each sack contains 15 pounds of potatoes.':
        'Como ejemplo, comprar un saco de papas en Costco significa comprar un peso fijo de papas donde cada saco contiene 15 libras de papas.',
      'As an example, if the ingredient that you are entering is "chicken breast" and you buy chicken breasts by the pound, then "Price (Before Taxes)" should be the cost you paid per pound.':
        'Como ejemplo, si el ingrediente que estás ingresando es "pechuga de pollo" y compras pechugas de pollo por libra, entonces "Precio (Antes de Impuestos)" debe ser el costo que pagaste por libra.',
      'As an example, if you are not sure how to categorize an ingredient, you can mark it as Pending Review.':
        'Como ejemplo, si no estás seguro de cómo clasificar un ingrediente, puedes marcarlo como Pendiente de Revisión.',
      'As an example, if you are not sure of the correctness of an approximate weight, you can mark it as Pending Review.':
        'Como ejemplo, si no estás seguro de la corrección de un peso aproximado, puedes marcarlo como Pendiente de Revisión.',
      'As long as you respond to each of the subsequent fields in the form that will appear as you select the Volume tab or the Package tab, Cocina Digital will correctly calculate the cost of your Menu Items based on the data that you enter.':
        'Mientras respondas a cada uno de los campos posteriores en el formulario que aparecerá al seleccionar la pestaña Volumen o la pestaña Paquete, Cocina Digital calculará correctamente el costo de tus Elementos del Menú en función de los datos que ingreses.',
      'as may be the case when purchasing the ingredient in a bulk size.':
        'como puede ser el caso cuando se compra el ingrediente en un tamaño a granel.',
      'As previously mentioned, a food cost calculator should allow you to scale with as many menu items as you sell, and it should maintain a high level of performance in those calculations.':
        'Como se mencionó anteriormente, una calculadora de costos de alimentos debería permitirte escalar con tantos elementos del menú como vendas, y debería mantener un alto nivel de rendimiento en esos cálculos.',
      "Aside from that, what they don't make clear is that you need a license for Microsoft Excel or a similar application.":
        'Aparte de eso, lo que no dejan claro es que necesita una licencia para Microsoft Excel o una aplicación similar.',
      'Aside from the name, you can also add a description of the dish.':
        'Además del nombre, también puedes agregar una descripción del plato.',
      'As such, if we bought a 5-pound bag of all-purpose flour and we use 1/2 cup of it in a recipe, we would want to know how much that 1/2 cup of flour weighs to determine how much money it cost us.':
        'Como tal, si compramos una bolsa de 5 libras de harina para todo uso y usamos 1/2 taza en una receta, querríamos saber cuánto pesa esa 1/2 taza de harina para determinar cuánto nos costó.',
      "As such, the Category field contains the categories that you'll most often need, but is in no way meant to be an exhaustive list.":
        'Como tal, el campo Categoría contiene las categorías que más necesitarás, pero de ninguna manera pretende ser una lista exhaustiva.',
      'As such, they are the only cookies that are enabled by default.':
        'Como tal, son las únicas cookies que están habilitadas de forma predeterminada.',
      'as you add more and more line items to a spreadsheet and expect it to calculate food costs using various formulas designed in the spreadsheet, the performance of the spreadsheet will eventually go down.':
        'a medida que agregas más y más elementos de línea a una hoja de cálculo y esperas que calcule los costos de los alimentos utilizando varias fórmulas diseñadas en la hoja de cálculo, el rendimiento de la hoja de cálculo eventualmente disminuirá.',
      'Aside from that, most everyone is familiar with a cheeseburger, so it is easy to talk about.':
        'Aparte de eso, casi todos están familiarizados con una hamburguesa con queso, por lo que es fácil hablar de ella.',
      'At a supermarket, it may be possible to purchase your potatoes by weight, but at a wholesaler like Costco, potatoes are sold in a sack that is already weighed out.':
        'En un supermercado, es posible que puedas comprar tus papas por peso, pero en un mayorista como Costco, las papas se venden en un saco que ya está pesado.',
      'At this point, since the same keyword is used for both ribeye steaks, you can compare the prices of the ribeye steaks from both vendors.': 'En este punto, dado que se usa la misma palabra clave para ambos bistecs de ribeye, puedes comparar los precios de los bistecs de ribeye de ambos proveedores.',
      'Auth': 'Autenticación',
      'Awaiting Subscription Transaction Approval': 'Esperando Aprobación de Transacción de Suscripción',
      'baked beans': 'frijoles horneados',
      'bag': 'bolsa',
      'Base Unit Size': 'Tamaño de la Unidad Base',
      'based on the cost and quantity of individual Menu Items used in the Combo':
        'basado en el costo y la cantidad de Elementos del Menú individuales utilizados en la Combinación',
      'based on the cost and quantity of ingredients used in the Menu Item':
        'basado en el costo y la cantidad de ingredientes utilizados en el Elemento del Menú',
      'Based on the ingredients that you entered in the Calculated Price section, you can specify the yield of the compound ingredient.':
        'Según los ingredientes que ingresaste en la sección Precio Calculado, puedes especificar el rendimiento del ingrediente compuesto.',
      'Based on the latest prices for ingredients that you previously entered, the calculated price for this Compound Ingredient has changed.':
        'Según los últimos precios de los ingredientes que ingresaste anteriormente, el precio calculado para este Ingrediente Compuesto ha cambiado.',
      'Basic Details': 'Detalles Básicos',
      'Basic details': 'Detalles básicos',
      'Rice, Beans, Nuts, Seeds, & Grains': 'Arroz, Frijoles, Nueces, Semillas y Granos',
      'Be sure to save your changes before leaving this page':
        'Asegúrate de guardar tus cambios antes de salir de esta página',
      'Because a Fixed Price is not based on the cost of ingredients, it is not as accurate as a Calculated Price':
        'Debido a que un Precio Fijo no se basa en el costo de los ingredientes, no es tan preciso como un Precio Calculado',
      "Because it's a simple example that touches upon a variety of ingredients for which Cocina Digital can then help you calculate the price.":
        'Porque es un ejemplo simple que toca una variedad de ingredientes para los cuales Cocina Digital puede ayudarte a calcular el precio.',
      'Beer, Wines, & Spirits': 'Cerveza, Vinos y Licores',
      'Before an Ingredient is deleted, you will be asked to confirm that you wish to delete the Ingredient.':
        'Antes de que se elimine un Ingrediente, se te pedirá que confirmes que deseas eliminar el Ingrediente.',
      "Before designing your Compound Ingredient, be sure that you've entered all of the ingredients that it uses.":
        'Antes de diseñar tu Ingrediente Compuesto, asegúrate de haber ingresado todos los ingredientes que utiliza.',
      "Before designing your Menu Item, be sure that you've entered all of the ingredients that it uses.":
        'Antes de diseñar tu Elemento del Menú, asegúrate de haber ingresado todos los ingredientes que utiliza.',
      'Begin typing in the Vendor field to select or add a new vendor.': 'Comienza a escribir en el campo Vendedor para seleccionar o agregar un nuevo vendedor.',
      'Begin typing the name of the Menu Item that you need.':
        'Comienza a escribir el nombre del Elemento del Menú que necesitas.',
      "Besides meats, some fruits and some vegetables are also sold by weight, but we've created a dedicated tab for fruits and vegetables, so we don't suggest using the Weight tab to enter fruits nor vegetables.":
        'Además de las carnes, algunas frutas y algunas verduras también se venden por peso, pero hemos creado una pestaña dedicada para frutas y verduras, por lo que no sugerimos usar la pestaña Peso para ingresar frutas ni verduras.',
      'Besides any fruits and vegetables, anything that you purchase by weight should be entered in the Weight section.':
        'Además de cualquier fruta y verdura, todo lo que compres por peso debe ingresarse en la sección Peso.',
      'Besides the dropdown menu for specifying a reason, a Comments textbox also appears. Use the Comments textbox to enter any additional notes regarding the reason you are specifying that the Ingredient is pending review.':
        'Además del menú desplegable para especificar un motivo, también aparece un cuadro de texto Comentarios. Usa el cuadro de texto Comentarios para ingresar cualquier nota adicional sobre el motivo por el que estás especificando que el Ingrediente está pendiente de revisión.',
      'Besides the dropdown menu for specifying a reason, a Comments textbox also appears.':
        'Además del menú desplegable para especificar un motivo, también aparece un cuadro de texto Comentarios.',

      'Use the Comments textbox to enter any additional notes regarding the reason you are specifying that the approximate weight record is pending review.':
        'Usa el cuadro de texto Comentarios para ingresar cualquier nota adicional sobre el motivo por el que estás especificando que el registro de peso aproximado está pendiente de revisión.',

      'Besides the weight and volume ways of purchasing fruits and vegetables, it is also possible to buy, for example, a vegetable by the piece.':
        'Además de las formas de peso y volumen de comprar frutas y verduras, también es posible comprar, por ejemplo, una verdura por pieza.',
      'Best suited for medium-to-large scale restaurants, catering services, or ghost kitchens that offer up to 100 items on their menu.':
        'Ideal para restaurantes de mediano a gran tamaño, servicios de catering o cocinas fantasmas que ofrecen hasta 100 artículos en su menú.',
      'Best suited for for small catering businesses, food trucks, pop-ups, small mom & pop / husband & wife / couples-based operations, or small-medium size ghost kitchens.':
        'Ideal para pequeñas empresas de catering, camiones de comida, pop-ups, pequeñas operaciones basadas en parejas o cocinas fantasmas de tamaño pequeño-mediano.',
      'Beverages: Bottled Water, Coffee (already prepared), Tea (already prepared), Soda, & Juices':
        'Bebidas: Agua embotellada, Café (ya preparado), Té (ya preparado), Soda y Jugos',
      'Billing': 'Forma de Pago',
      'Billing Details': 'Detalles de Pago',
      'Billing details': 'Detalles de pago',
      'Billing name': 'Nombre',
      'Billing Name': 'Nombre de Facturación',
      'Blog': 'Blog',
      'Both ingredients and compound ingredients are used in designing a menu item.':
        'Tanto los ingredientes como los ingredientes compuestos se utilizan para diseñar un elemento del menú.',
      'bottle': 'botella',
      'box': 'caja',
      'Brand': 'Marca',
      'brand': 'marca',
      'Brand/Manufacturer': 'Marca/Fabricante',
      'Brands': 'Marcas',
      'brands': 'marcas',
      'Bread, Bread Crumbs, Cake, & Pastries': 'Pan, Pan Molido, y Pasteles',
      'broccoli': 'brócoli',
      'Browse': 'Buscar',
      'browse': 'buscar',
      'bugs, feature requests, general comments, etc. are all welcome!':
        '¡los errores, solicitudes de funciones, comentarios generales, etc. son bienvenidos!',
      'bundle': 'manojo',
      'bundle option': 'opción de paquete',
      'Business': 'Negocio',
      'business': 'negocio',
      'BUSINESS': 'NEGOCIO',
      'Business name': 'Nombre del negocio',
      'Business Name': 'Nombre del Negocio',
      'Business name cannot exceed 500 characters': 'El nombre del negocio no puede exceder los 500 caracteres',
      'But wait, what if I just want to set a temporary fixed price?':
        'Pero espera, ¿qué pasa si solo quiero establecer un precio fijo temporal?',
      'but ideally': 'pero idealmente',
      'By checking the box, the approximate weight will be available for use in the application.':
        'Al marcar la casilla, el peso aproximado estará disponible para su uso en la aplicación.',
      'By continuing to use our site, you accept our use of cookies.':
        'Al continuar utilizando nuestro sitio, aceptas nuestro uso de cookies.',
      'By default, the checkbox for': 'De forma predeterminada, la casilla de verificación para',
      'By doing so, you can determine which market offers the best price for the ingredient.': 'Al hacerlo, puedes determinar qué mercado ofrece el mejor precio para el ingrediente.',
      'By entering the costs of your food in Cocina Digital and then specifying portions used in a dish, you now know the true cost of your dish and can better manage your business for profits.':
        'Al ingresar el precio de tu comida en Cocina Digital y luego especificar las porciones utilizadas en un plato, podrás conocer su costo real y así puedes administrar mejor tu negocio para obtener ganancias.',
      'By keeping track of details such as the vendor and brand, and the prices charged for the ingredient, you can see where you can either lower your own prices for a dish or can stand to gain a higher profit margin.':
        'Al realizar un seguimiento de detalles como el vendedor y la marca, y los precios cobrados por el ingrediente, puedes ver dónde puedes bajar tus propios precios para un plato o puedes obtener un margen de beneficio más alto.',
      'By selecting a Menu Item from the search results, you are adding that Menu Item to the list of Menu Items for your combination platter.':
        'Al seleccionar un elemento del menú de los resultados de la búsqueda, agregas ese Elemento del Menú a la lista de Elementos del Menú para tu plato combinado.',
      'c.': 'tz.',
      'Calculated Price': 'Precio Calculado',
      'Calculated price': 'Precio calculado',
      'Calculated Price Updated': 'Precio Calculado Actualizado',
      'Calendar': 'Calendario',
      'can': 'lata',
      'can be entered into a separate field later in the form.':
        'puede ingresarse en un campo separado más adelante en el formulario.',
      'can be used in designing a': 'puede usar para diseñar un',
      'Canada': 'Canadá',
      'Canadian Dollar': 'Dólar Canadiense',
      'Canadian Dollar is now the default currency.': 'El Dólar Canadiense es ahora la moneda predeterminada.',
      'cancel': 'cancelar',
      'Cancel': 'Cancelar',
      'Cancel Subscription': 'Cancelar Suscripción',
      'Card Number': 'Número de Tarjeta',
      'Card number': 'Número de tarjeta',
      'carton': 'cartón',
      'case': 'caja',
      'Category is a required field': 'Categoría es un campo requerido',
      'Category': 'Categoría',
      'category': 'categoría',
      'Caterer': 'Empresa de Catering',
      'caterers': 'proveedores de catering',
      'Change': 'Cambiar',
      'change': 'cambiar',
      'Change Organization': 'Cambiar Organización',
      'Change organization': 'Cambiar organización',
      'Change Password': 'Cambiar Contraseña',
      'Change Plan': 'Cambiar Plan',
      'Change plan': 'Cambiar plan',
      'change plan': 'cambiar plan',
      'Changes to the Default Currency only affect new records, not existing ones.':
        'Los cambios en la Moneda Predeterminada solo afectan a los nuevos registros, no a los existentes.',
      'characters long': 'caracteres de largo',
      'Chat': 'Chat',
      'Check our docs': 'Consulte nuestros documentos',
      'Check our online docs to get familiar with the most common tasks in Cocina Digital.':
        'Consulta nuestros documentos en línea para familiarizarte con las tareas más comunes en Cocina Digital.',
      'Check the checkbox for': 'Marca la casilla de verificación para',
      'Check the "This is a Compound Ingredient" checkbox to enable the Compound Ingredient fields to appear in the form.':
        'Marca la casilla "Este es un Ingrediente Compuesto" para habilitar los campos de Ingrediente Compuesto que aparecerán en el formulario.',
      'Check your email for a code to reset your password':
        'Revisa tu correo electrónico para obtener un código para restablecer tu contraseña',
      'checkbox': 'casilla de verificación',
      'Checkout': 'Pago',
      'chefs': 'chefs',
      'Cheese, Butter': 'Queso, Mantequilla',
      'chicken breast': 'pechuga de pollo',
      'chicken breasts': 'pechugas de pollo',
      'Chicken Breast Tenderloins': 'Tiras de Pechuga de Pollo',
      'chicken breast tenderloins': 'tiras de pechuga de pollo',
      'Chinese': 'Chino',
      'Choose among Weight, Package, Volume, and Fruits/Vegetables for the section that best describes how the ingredient was sold.':
        'Elige entre Peso, Paquete, Volumen y Frutas/Verduras para la sección que mejor describe cómo se vendió el ingrediente.',
      'church events involving meals': 'eventos de la iglesia que involucran comidas',
      'Clear search terms / reset': 'Borrar términos de búsqueda / restablecer',
      'Click and drag photos to sort': 'Haz clic y arrastra las fotos para ordenar',
      'Click here to redeem it.': 'Haz clic aquí para canjearlo.',
      'Click on it to read more information about the section.':
        'Haz clic en él para leer más información sobre la sección.',
      'Click on the': 'Haz clic en el',
      'Click on the caret to expand the Ingredients menu link.':
        'Haz clic en la flecha para expandir el enlace del menú Ingredientes.',
      'Click the button below to see how.': 'Haz clic en el botón de abajo para ver cómo.',
      'Click the button below to update the calculated price.':
        'Haz clic en el botón de abajo para actualizar el precio calculado.',
      'Click the Delete button at the bottom of the page to delete this Menu Item, or any others, to bring your overall count below your current limit.':
        'Haz clic en el botón Eliminar en la parte inferior de la página para eliminar este Elemento del Menú, o cualquier otro, para reducir tu recuento general por debajo de tu límite actual.',
      'Click the green Add button to add the ingredient to the list of ingredients for the compound ingredient.':
        'Haz clic en el botón verde Agregar para agregar el ingrediente a la lista de ingredientes para el ingrediente compuesto.',
      'Click the green Add button to add the ingredient to the list of ingredients for the Menu Item.':
        'Haz clic en el botón verde Agregar para agregar el ingrediente a la lista de ingredientes para el Elemento del Menú.',
      'Click the "New" button to add an ingredient.': 'Haz clic en el botón "Nuevo" para agregar un ingrediente.',
      'Click the "Save" button to save your image as your profile picture.':
        'Haz clic en el botón "Guardar" para guardar tu imagen como tu foto de perfil.',
      'Click the Synch Latest Prices button to update the calculated price based on the latest prices for ingredients that you have previously entered.':
        'Haz clic en el botón Sincronizar Últimos Precios para actualizar el precio calculado en función de los últimos precios de los ingredientes que has ingresado anteriormente.',
      'Click to enlarge': 'Haz clic para ampliar',
      'Click to select or deselect': 'Haz clic para seleccionar o deseleccionar',
      'Close': 'Cerrar',
      'close': 'cerrar',
      'close error encountered modal': 'cerrar ventana modal de error encontrado',
      'Cocina Digital is a 100% online tool to keep track of food costs because because trying to do it by hand is time consuming and error prone.':
        'Cocina Digital es una herramienta 100% en línea para realizar un seguimiento de los costos de los alimentos, porque intentar hacerlo a mano consume mucho tiempo y es probable que se produzcan errores.',
      "Cocina Digital is all about making it as easy as possible for you to manage your food costs.": "Cocina Digital se trata de hacerlo lo más fácil posible para que puedas administrar tus costos de alimentos.",
      'Cocina Digital does it for you with the click of a mouse.': 'Cocina Digital lo hace por ti con solo un clic.',
      'Cocina Digital is Free to Try': 'Cocina Digital es Gratis para Probar',
      'Cocina Digital is the food cost manager that you can use on your phone, tablet, laptop, or desktop computer.':
        'Cocina Digital es el administrador de costos de alimentos que puedes usar en tu teléfono, tableta, computadora portátil o computadora de escritorio.',
      'Cocina Digital needs to know what you are paying per ingredient, not the total cost of the shopping bill.':
        'Cocina Digital necesita saber lo que estás pagando por ingrediente, no el costo total de la factura de la compra.',
      'Cocina Digital will automatically calculate the cost of the ingredient based on the unit that you selected in the "Unit Sold By" section.':
        'Cocina Digital calculará automáticamente el costo del ingrediente en función de la unidad que seleccionaste en la sección "Vendido en Unidades de".',
      'Code': 'Código',
      'Code is required': 'Código es requerido',
      'Code resent': 'Código reenviado',
      'Code resent.': 'Código reenviado.',
      'Code sent successfully': 'Código enviado con éxito',
      'Coffee Beans/Grains/Instant & Tea Leaves': 'Café en Grano/Granos/Instantáneo y Hojas de Té',
      "Collaborate": "Colaborar",
      'Combo': 'Combinación',
      'Combo Calculated Price': 'Precio Calculado de la Combinación',
      'Combo item': 'Elemento de combinación',
      'Comma separated list of keywords': 'Lista de palabras clave separadas por comas',
      'Comments': 'Comentarios',
      "Community": "Comunidad",
      'Complete sign up': 'Completa el registro',
      'Completed': 'Completado',
      'completed': 'completado',
      'COMPLETED': 'COMPLETADO',
      'Compound Ingredient': 'Ingrediente Compuesto',
      'compound ingredient': 'ingrediente compuesto',
      'Compound Ingredients': 'Ingredientes Compuestos',
      'Compound ingredients': 'Ingredientes compuestos',
      'compound ingredients': 'ingredientes compuestos',
      'Compound Ingredients are ingredients that are made up of other ingredients.':
        'Los Ingredientes Compuestos son ingredientes que están compuestos de otros ingredientes.',
      'Computer screen showing code': 'Pantalla de computadora que muestra código',
      'Conclusion': 'Conclusión',
      'Condiments': 'Condimentos',
      'Confirm': 'Confirmar',
      'Confirm New Password': 'Confirmar Nueva Contraseña',
      'Confirm New Password is required': 'Confirmar Nueva Contraseña es requerido',
      'Confirm Password': 'Confirmar Contraseña',
      'Confirm password': 'Confirmar contraseña',
      'Confirm Password is required': 'Confirmar Contraseña es requerido',
      'Confirm Sign Up': 'Confirmar Registro',
      'Confirm the password that you wish to use with your Cocina Digital account':
        'Confirma la contraseña que deseas usar con tu cuenta de Cocina Digital',
      'Confirm your account and password at Cocina Digital': 'Confirma tu cuenta y contraseña en Cocina Digital',
      'Confirmation code resent. Please check your email.':
        'Código de confirmación reenviado. Por favor, revisa tu correo electrónico.',
      'Contact': 'Contacto',
      'Continue Working': 'Continuar Trabajando',
      'Cookies, Crackers, & Chips': 'Galletas y Papas Fritas',
      'Cookies allow us to personalize content, track which pages are most popular and least popular, and provide advertising that may be relevant to you.':
        'Las cookies nos permiten personalizar el contenido, rastrear cuáles son las páginas más populares y menos populares, y proporcionar publicidad que puede ser relevante para ti.',
      'cooks attempting to feed multiple guests at a family or company sponsored event and needing to plan a budget around the cost of ingredients and number of guests to be served':
        'cocineros que intentan alimentar a varios invitados en un evento patrocinado por una familia o empresa y necesitan planificar un presupuesto en torno al costo de los ingredientes y el número de invitados a servir',
      'cooks preparing meals for the elderly or infirmed':
        'cocineros preparando comidas para personas mayores o enfermas',
      'Corn Starch, Baking Powder/Soda & Similar': 'Maicena, Polvo de Hornear, Bicarbonato, y Similares',
      'Count': 'Total',
      'count': 'total',
      "Countries that use this format include Russia, South Africa, and most countries in South America": "Los países que utilizan este formato incluyen Rusia, Sudáfrica y la mayoría de los países de América del Sur",
      "Countries that use this format include the United States and Mexico": "Los países que utilizan este formato incluyen Estados Unidos y México",
      'Country': 'País',
      'country': 'país',
      'Country field must be an actual country name': 'El campo País debe ser un nombre de país real',
      'crate': 'huacal',
      'Create': 'Crear',
      'Create new account': 'Crear una nueva cuenta',
      'Create your individual Menu Items first.': 'Primero crea tus Elementos del Menú individuales.',
      'Created by a Cook to Help Other Cooks': 'Creado por un Cocinero para Ayudar a Otros Cocineros',
      'Creator of Cocina Digital': 'Creador de Cocina Digital',
      'creator of Cocina Digital': 'creador de Cocina Digital',
      'Crop': 'Recortar',
      "Culinary Instructor": "Instructor Culinario",
      "Culinary Student": "Estudiante de Cocina",
      'Cup': 'Taza',
      'Cups': 'Tazas',
      'cup': 'taza',
      'cups': 'tazas',
      'Currency': 'Moneda',
      'Currency is a required field': 'Moneda es un campo requerido',
      'Current Password': 'Contraseña Actual',
      'Current Password is required': 'Contraseña Actual es requerida',
      'Currently in Read-Only Mode': 'Actualmente en Modo de Solo Lectura',
      'Customers': 'Clientes',
      'Customers are price-sensitive and if they see a price increase on a menu item, they might not order that dish.':
        'Los clientes son sensibles al precio y si ven un aumento de precio en un elemento del menú, es posible que no pidan ese plato.',
      'Customers want to see pictures of the food that they will be ordering.':
        'Los clientes quieren ver fotos de la comida que van a pedir.',
      'dash/pinch': 'pizca',
      'Dashboard': 'Tablero de Control',
      'Data that you have entered will still be available for viewing for up to 90 days, but you will not be able to add new data nor edit existing data.':
        'Los datos que hayas ingresado seguirán disponibles para su visualización durante un máximo de 90 días, pero no podrás agregar nuevos datos ni editar los datos existentes.',
      'Date': 'Fecha',
      'date': 'fecha',
      "Date Format": "Formato de Fecha",
      "Date Format and Currency Preferences": "Preferencias de Formato de Fecha y Moneda",
      'Date Last Checked': 'Fecha de la Última Verificación',
      'Date Last Checked is a required field': 'Fecha de la Última Verificación es un campo requerido',
      'Days remaining': 'Días restantes',
      'Days remaining in your Beta Tester enrollment:': 'Días restantes en tu inscripción como Beta Tester:',
      'Decline': 'Rechazar',
      'Default Currency': 'Moneda Predeterminada',
      'delete': 'eliminar',
      'Delete': 'Eliminar',
      'Delete Account': 'Eliminar Cuenta',
      'Delete approximate weight': 'Eliminar peso aproximado',
      'Delete approximate weight?': '¿Eliminar peso aproximado?',
      'Delete ingredient': 'Eliminar ingrediente',
      'Delete Ingredient': 'Eliminar Ingrediente',
      'Delete ingredient? This action cannot be reversed.': '¿Eliminar ingrediente? Esta acción no se puede deshacer.',
      'Delete Menu Item': 'Eliminar Elemento del Menú',
      'Delete menu item': 'Eliminar elemento del menú',
      'Delete menu item?': '¿Eliminar elemento del menú?',
      'Delete vendor': 'Eliminar vendedor',
      'Delete Vendor': 'Eliminar Vendedor',
      'Delete vendor?': '¿Eliminar vendedor?',
      'Delete Vendor?': '¿Eliminar Vendedor?',
      'Deleting': 'Eliminando',
      'Depending on whether you buy from a wholesaler or at a supermarket, you may have no choice but to buy vegetables by the piece.':
        'Dependiendo de si compras a un mayorista o en un supermercado, es posible que no tengas más remedio que comprar verduras por pieza.',
      "Describe who you are and what you're interested in so Cocina Digital can help.": 'Describe quién eres y en qué estás interesado para que Cocina Digital pueda ayudarte.',
      'Description': 'Descripción',
      'description': 'descripción',
      'Description cannot exceed 5000 characters': 'La descripción no puede exceder los 5000 caracteres',
      'Details': 'Detalles',
      'Directly below the Fixed Price field, you can activate a Temporary Price for the Menu Item by checking the':
        'Directamente abajo del campo Precio Fijo, puedes activar un Precio Temporal para el Elemento del Menú marcando la casilla',
      'Do not enter it as 4.50, which would be the total cost of the 3 heads of Romaine lettuce.':
        'No lo ingreses como 4.50, que sería el costo total de las 3 cabezas de lechuga romana.',
      'Do not enter the $ symbol, in other words.': 'No ingreses el símbolo $, en otras palabras.',

      'Do not use the same vendor name twice, but if you must, make them distinguishable':
        'No uses el mismo nombre de vendedor dos veces, pero si debes hacerlo, hazlos distinguibles',
      'Do you wish to continue working?': '¿Deseas continuar trabajando?',
      'Do your best to estimate the weight': 'Haz tu mejor esfuerzo para estimar el peso',

      'Do yourself and your business a favor and upgrade to a subscription plan to get the most out of':
        'Hazte un favor a ti mismo y a tu negocio y actualiza a un plan de suscripción para aprovechar al máximo de',

      'Documentation': 'Documentación',
      'Does the package contain a quantity of the ingredient in question or is the package itself sold by weight?': '¿El paquete contiene una cantidad del ingrediente en cuestión o el paquete en sí se vende por peso?',
      'Does the sack or crate or box containing your ingredient specify a weight?':
        '¿La bolsa, caja o huacal que contiene tu ingrediente especifica un peso?',
      'Done!': '¡Listo!',
      'Downgrade to Free Tier': 'Cambiar a Nivel Gratis',
      'Downgrade to Professional': 'Cambiar a Profesional',
      'Downgrade to Professional Plan': 'Cambiar a Plan Profesional',
      'Downgrade to Starter': 'Cambiar a Iniciador',
      'Downgrade to Starter Plan': 'Cambiar a Plan Iniciador',
      'downtown': 'el centro',

      'Drop file': 'Soltar archivo',
      'Drop files': 'Soltar archivos',
      'Drop files to upload': 'Soltar archivos para subir',
      'Each': 'Cada uno',
      'each': 'cada uno',
      'Each keyword must be at least 2 characters in length and no more than 50':
        'Cada palabra clave debe tener al menos 2 caracteres de largo y no más de 50',
      'Each of these items would be a separate menu item.':
        'Cada uno de estos artículos sería un elemento de menú separado.',
      'Each section has its own set of fields and questions that you answer to correctly identify how you will use the ingredient.':
        'Cada sección tiene su propio conjunto de campos y preguntas que respondes para identificar correctamente cómo usarás el ingrediente.',
      'Each section of the form has a help icon': 'Cada sección del formulario tiene un ícono de ayuda',
      'Each tab represents a different way that you can purchase, or have purchased, an ingredient.':
        'Cada pestaña representa una forma diferente en que puedes comprar, o has comprado, un ingrediente.',
      'Edit': 'Editar',
      'Egg': 'Huevo',
      'egg': 'huevo',
      'Eggs': 'Huevos',
      'eggs': 'huevos',
      'Eggs, asparagus, and tomatoes, lemons, and chile pepper on a table':
        'Huevos, espárragos y tomates, limones y chile en una mesa',
      'Email': 'Correo Electrónico',
      'email': 'correo electrónico',
      'Email Address': 'Correo Electrónico',
      'Email address': 'Correo electrónico',
      'email address': 'correo electrónico',
      'Email address not found': 'Correo electrónico no encontrado',
      'Email address not found.': 'Correo electrónico no encontrado.',
      'Email Address you used to sign up': 'Correo Electrónico que usaste para registrarte',
      'Email address verified': 'Correo electrónico verificado',
      'Email is required': 'Correo electrónico es requerido',
      'Email is required.': 'Correo electrónico es requerido.',
      'End Date of Temporary Price': 'Fecha de Finalización del Precio Temporal',
      'English': 'Inglés',
      'Enjoy your new features and thank you for making us a part of your business success.':
        'Disfruta de tus nuevas funciones y gracias por hacernos parte del éxito de tu negocio.',
      'enter': 'ingresa',
      'Enter a description of the menu item here...': 'Ingresa una descripción del elemento del menú aquí...',
      'Enter a keyword to associate with the ingredient that you are entering.': 'Ingresa una palabra clave para asociar con el ingrediente que estás ingresando.',
      'Enter a new keyword and press the Enter key': 'Ingresa una nueva palabra clave y presiona la tecla Enter',
      'Enter any notes about the ingredient here...': 'Ingresa cualquier nota sobre el ingrediente aquí...',
      'Enter any notes regarding this entry': 'Ingresa cualquier nota sobre esta entrada',
      'Enter ingredient name or ID': 'Ingresa el nombre del ingrediente o el ID',
      'Enter menu item name or ID': 'Ingresa el nombre del elemento del menú o el ID',
      'Enter name of ingredient or the ID of the approximate weight record':
        'Ingresa el nombre del ingrediente o el ID del registro de peso aproximado',
      'Enter name of vendor': 'Ingresa el nombre del vendedor',
      'Enter only the base price of the ingredient.': 'Ingresa solo el precio base del ingrediente.',
      'Enter the cost of your ingredients.': 'Ingresa el costo de tus ingredientes.',
      'enter the name broccoli.': 'ingresa el nombre brócoli.',
      'Enter the name of the ingredient for which you are adding an approximate weight.':
        'Ingresa el nombre del ingrediente para el cual estás agregando un peso aproximado.',
      'Enter the name of the vendor you wish to add.': 'Ingresa el nombre del vendedor que deseas agregar.',
      'Enter the name of your menu item and a description.':
        'Ingresa el nombre de tu elemento del menú y una descripción.',
      'Enter the name or ID of the vendor': 'Ingresa el nombre o ID del vendedor',
      'Enter the price for the ingredient in the Price field, but do not include taxes in this field.':
        'Ingresa el precio del ingrediente en el campo Precio, pero no incluyas los impuestos en este campo.',
      'Enter the price you paid per pound (or per kilogram, or per ounce, and so on).':
        'Ingresa el precio que pagaste por libra (o por kilogramo, o por onza, y así sucesivamente).',
      'Enter the updated costs and Cocina Digital will tell you the new costs of your dishes.':
        'Ingresa los costos actualizados y Cocina Digital te dirá los nuevos costos de tus platos.',
      'Enter the yield quantity': 'Ingresa la cantidad de rendimiento',
      'Enter your email address': 'Ingresa tu dirección de correo electrónico',
      'Estimated weight in grams': 'Peso estimado en gramos',
      'Error': 'Error',
      'Error Encountered': 'Error Encontrado',
      'Error updating organization name': 'Error al actualizar el nombre de la organización',
      'Euro': 'Euro',
      'Euro is now the default currency.': 'El Euro es ahora la moneda predeterminada.',
      'European Union': 'Unión Europea',

      "Even if you're convinced that you don't need to use a food cost calculator because you possibly consider it overkill, simply consider the fact that if you spend some time upfront implementing a food cost calculator, you save time on the other side, you know the true cost of your dishes, you have a more reliable way to forecast your expenditures versus income, and you have the ability to replicate the process for as many dishes as you have.":
        'Incluso si estás convencido de que no necesitas usar una calculadora de costos de alimentos porque posiblemente lo consideres excesivo, simplemente considera el hecho de que si dedicas algo de tiempo por adelantado a implementar una calculadora de costos de alimentos, ahorras tiempo en el otro lado, conoces el costo real de tus platos, tienes una forma más confiable de prever tus gastos versus ingresos, y tienes la capacidad de replicar el proceso para tantos platos como tengas.',
      'Every dish that you sell starts with a list of ingredients.':
        'Cada plato que vendes comienza con una lista de ingredientes.',
      'Example': 'Ejemplo',
      'Example:': 'Ejemplo:',
      'example': 'ejemplo',
      'example:': 'ejemplo:',
      'explore': 'explorar',
      'Explore': 'Explorar',
      'Export': 'Exportar',
      'Extra Virgin Olive Oil': 'Aceite de Oliva Extra Virgen',
      'extra virgin olive oil': 'aceite de oliva extra virgen',
      'Extra virgin olive oil and vegetable oil could be categorized under the category "Oil, Lard, & Shortners", for example.':
        'El aceite de oliva extra virgen y el aceite vegetal podrían clasificarse en la categoría "Aceite, Manteca y Grasas", por ejemplo.',
      'Failed login attempts limit exceeded. Please try again in an hour.':
        'Se ha excedido el límite de intentos de inicio de sesión fallidos. Por favor, inténtalo de nuevo en una hora.',
      'families on a budget trying to keep track of how much they spend on food':
        'familias con un presupuesto que intentan llevar un registro de cuánto gastan en alimentos',
      'Features': 'Características',
      'features': 'características',
      'Feed': 'Fuente social',
      'File is too large': 'El archivo es demasiado grande',
      'File size must be less than': 'El tamaño del archivo debe ser menor que',
      'Filters': 'Filtros',
      'filters': 'filtros',
      'Finance': 'Finanzas',
      'First and Last Name': 'Nombre y Apellido',
      'First and Last Name is required': 'Nombre y Apellido es requerido',
      'First Name': 'Nombre',
      'First name': 'Nombre',
      'first name': 'nombre',
      'First name is a required field': 'Nombre es un campo requerido',
      'First time here?': '¿Primera vez aquí?',
      'Fish & Seafood': 'Pescado y Mariscos',
      'Fixed Price': 'Precio Fijo',
      'Fixed price': 'Precio fijo',
      'Fixed Pricing': 'Precios Fijos',
      'Fixed Pricing allows you to set a specific price for your menu item.':
        'Precios Fijos te permite establecer un precio específico para tu elemento del menú.',
      'Fixed pricing can be used in two ways: by filling in the Fixed Price field to set a non-ending fixed price, or by setting a Temporary Price by enabling the "Set a temporary price" checkbox.':
        'Los precios fijos se pueden usar de dos formas: llenando el campo Precio Fijo para establecer un precio fijo permanente, o estableciendo un Precio Temporal habilitando la casilla "Establecer un precio temporal".',
      'fl oz': 'onzas líquidas',
      'Fluid': 'Líquido',
      'fluid': 'líquido',
      'Fluid Ounce': 'Onza Líquida',
      'Fluid ounce': 'Onza líquida',
      'Fluid Ounces': 'Onzas Líquidas',
      'Fluid ounces': 'Onzas líquidas',
      'fluid ounce': 'onza líquida',
      'fluid ounces': 'onzas líquidas',
      'Flour': 'Harina',
      'Follow and answer any subsequent fields that show up.':
        'Sigue y responde a cualquier campo posterior que aparezca.',
      "Food Blogger": "Bloguero Gastronómico",
      'Food Business Owner': 'Dueño de un Negocio de Comida',
      'Food Cost Calculator': 'Calculadora de Costos de Alimentos',
      'Food service professionals must know how much each dish costs to price correctly for desired profit percentage.':
        'Los profesionales del servicio de alimentos deben saber cuánto cuesta cada plato para fijar el precio correctamente para el porcentaje de ganancia deseado.',
      'food truck operators': 'operadores de food trucks (camiones de comida)',
      "Foodie": "Aficionado a la Comida",
      'For Example': 'Por Ejemplo',
      'For example': 'Por ejemplo',
      'for example': 'por ejemplo',
      'For example, a Combo could be a combination of a main dish, a side dish, and a dessert.':
        'Por ejemplo, una Combinación podría ser una combinación de un plato principal, un plato de acompañamiento y un postre.',
      'For example, a vinaigrette is an ingredient used in a salad, but a vinaigrette is itself made up of other ingredients: oil, dijon mustard, vinegar, and spices.':
        'Por ejemplo, una vinagreta es un ingrediente utilizado en una ensalada, pero una vinagreta está compuesta de otros ingredientes: aceite, mostaza dijon, vinagre y especias.',
      'For example, are we talking about gallons, liters, fluid ounces, milliliters...?': 'Por ejemplo, ¿estamos hablando de galones, litros, onzas líquidas, mililitros...?',
        
      'For example, are we talking about grams, ounces, pounds...?':
        'Por ejemplo, ¿estamos hablando de gramos, onzas, libras...?',
      'For example, if the ingredient is': 'Por ejemplo, si el ingrediente es',
      'For example, if the ingredient is "Great Value all-purpose flour," then the ingredient is "all-purpose flour" and the brand is "Great Value."':
        'Por ejemplo, si el ingrediente es "Great Value harina para todo uso", entonces el ingrediente es "harina para todo uso" y la marca es "Great Value".',
      'For example, if a menu consists of 20 items, then changes in the cost of ingredients used by any of those 20 menu items would require a reevaluation of the cost of those dishes.':
        'Por ejemplo, si un menú consta de 20 elementos, entonces los cambios en el costo de los ingredientes utilizados por cualquiera de esos 20 elementos del menú requerirían una reevaluación del costo de esos platos.',
      'For example, if the package contains 5 pounds of Italian sausages, but you will be using 1 individual sausage in a Menu Item, then answer yes.':
        'Por ejemplo, si el paquete contiene 5 libras de salchichas italianas, pero usarás 1 salchicha individual en un Elemento del Menú, responde sí.',

      'For example, if the package contains 8 mangos and you have a dessert that requires 100 grams of mango pulp, then you would want to answer yes to this question and then provide the Approximate Weight of each mango in the subsequent field that appears.':
        'Por ejemplo, si el paquete contiene 8 mangos y tienes un postre que requiere 100 gramos de pulpa de mango, entonces querrás responder sí a esta pregunta y luego proporcionar el Peso Aproximado de cada mango en el campo posterior que aparece.',
      'For example, if the vinaigrette is made up of extra virgin olive oil, salt, vinegar, Dijon mustard, and so on, and the total cost of those ingredients is $5.00, then the Calculated Price would be $5.00.':
        'Por ejemplo, si la vinagreta está compuesta de aceite de oliva extra virgen, sal, vinagre, mostaza Dijon, y así sucesivamente, y el costo total de esos ingredientes es de $5.00, entonces el Precio Calculado sería de $5.00.',
      'For example, if this ingredient is used in any recipe for a menu item that calls for, as an example, 1/2 of an':
        'Por ejemplo, si este ingrediente se utiliza en cualquier receta para un elemento del menú que requiere, como ejemplo, 1/2 de un/una',
      'For example, if this ingredient is used in any recipe for a Menu Item that calls for, as an example, 1/2 of an': 'Por ejemplo, si este ingrediente se utiliza en cualquier receta para un Elemento del Menú que requiere, como ejemplo, 1/2 de un/una',
        
      'For example, if you are entering a vinaigrette as your compound ingredient, you can enter the ingredients that make up the vinaigrette: extra virgin olive oil, salt, vinegar, Dijon mustard, and so on.':
        'Por ejemplo, si estás ingresando una vinagreta como tu ingrediente compuesto, puedes ingresar los ingredientes que componen la vinagreta: aceite de oliva extra virgen, sal, vinagre, mostaza Dijon, y así sucesivamente.',

      'For example, if you buy a 2-pound bag of Great Value all-purpose flour for $1.99, but you also buy a 2-pound bag of Gold Medal all-purpose flour for $2.49, then you should create two ingredient records despite it being the same type of ingredient. Why? To keep costs down, you may favor buying an ingredient from a lower-cost brand that, in some instances, can substitute for a higher-cost brand.':
        'Por ejemplo, si compras una bolsa de 2 libras de harina para todo uso Great Value por $1.99, pero también compras una bolsa de 2 libras de harina para todo uso Gold Medal por $2.49, entonces debes crear dos registros de ingredientes a pesar de que sea el mismo tipo de ingrediente. ¿Por qué? Para mantener los costos bajos, es posible que prefieras comprar un ingrediente de una marca de menor costo que, en algunos casos, puede sustituir a una marca de mayor costo.',
      'For example, if you plan to offer a combination platter that includes a cheeseburger, french fries, and a cheesecake, first enter those 3 dishes as their own Menu Items.':
        'Por ejemplo, si planeas ofrecer un plato combinado que incluye una hamburguesa con queso, papas fritas y un pastel de queso, primero ingresa esos 3 platos como sus propios Elementos del Menú.',
      'For example, if you plan to show it as "Chicken Parmesan", then enter "Chicken Parmesan" instead of just "parm", which is not descriptive.':
        'Por ejemplo, si planeas mostrarlo como "Pollo Parmesano", entonces ingresa "Pollo Parmesano" en lugar de solo "parm", que no es descriptivo.',

      'For example, if you were buying a dozen eggs per carton, you would enter 12 in the input field.':
        'Por ejemplo, si estuvieras comprando una docena de huevos por caja, ingresarías 12 en el campo de entrada.',
      'For example, if you were to use an entire apple, you would enter the approximate weight of the apple.':
        'Por ejemplo, si fueras a usar una manzana entera, ingresarías el peso aproximado de la manzana.',
      'For example, if your compound ingredient is a vinaigrette and the ingredients that you entered into the Calculated Price section produces 2 cups, enter 2 in the Quantity field and from the Unit of Measure dropdown, select cup.':
        'Por ejemplo, si tu ingrediente compuesto es una vinagreta y los ingredientes que ingresaste en la sección Precio Calculado producen 2 tazas, ingresa 2 en el campo Cantidad y en el menú desplegable Unidad de Medida, selecciona taza.',
      'For example, if your ingredient is "apple", you might want to add the keywords "apples" (plural form of apple), "Fuji, "Granny Smith", "Gala", etc. to make it more likely that your approximate weight will match various ways that an apple may be searched.':
        'Por ejemplo, si tu ingrediente es "manzana", es posible que desee agregar las palabras clave "manzanas" (forma plural de manzana), "Fuji, "Granny Smith", "Gala", etc. para que sea más probable que tu peso aproximado coincida con las diversas formas en que se puede buscar una manzana.',
      "For example, the number one thousand dollars would be written as $1,000.00 with periods and $1.000,00 with commas.": "Por ejemplo, el número mil dólares se escribiría como $1,000.00 con puntos y $1.000,00 con comas.",
      'For example, use the ingredient name "chicken breast," a generic name, and not "Tyson chicken breast" or "best value chicken breast," where one contains the brand name of the chicken breast and the other includes words beyond just the generic term "chicken breast."':
        'Por ejemplo, usa el nombre del ingrediente "pechuga de pollo", un nombre genérico, y no "pechuga de pollo Tyson" o "pechuga de pollo de mejor valor", donde uno contiene el nombre de la marca de la pechuga de pollo y el otro incluye palabras más allá del término genérico "pechuga de pollo".',
      'For example, when considering the recipe for a menu item, would there exist a situation of adding 1 or 2 or 3 units (pieces), and so on, of this ingredient?':
        'Por ejemplo, al considerar la receta de un elemento del menú, ¿existiría una situación de agregar 1 o 2 o 3 unidades (piezas), y así sucesivamente, de este ingrediente?',
      'For example, would you add a teaspoon, tablespoon, or cup of this ingredient to a recipe?':
        'Por ejemplo, ¿agregarías una cucharadita, una cucharada, o una taza de este ingrediente a una receta?',
      'For example, would there be situations where you would mince, chop, grate, or anything similar, of this fruit or vegetable and then add a teaspoon, tablespoon, cup, and so on, of this ingredient to a recipe?':
        'Por ejemplo, ¿habría situaciones en las que picarías, cortarías, rallarías, o algo similar, de esta fruta o verdura y luego agregarías una cucharadita, una cucharada, una taza, y así sucesivamente, de este ingrediente a una receta?',

      'For example, you may have an ingredient that is out of stock, or perhaps a vegetable or fruit that is out of season.':
        'Por ejemplo, puede que tengas un ingrediente que está fuera de stock, o tal vez una verdura o fruta que está fuera de temporada.',
      'For food service professionals, a food cost calculator provides another important benefit: the ability to scale.':
        'Para los profesionales del servicio de alimentos, una calculadora de costos de alimentos proporciona otro beneficio importante: la capacidad de escalar.',

      "For situations where you are uncertain about any values that you've entered in the Add/Edit Approximate Weights form, use the Pending Review section to mark the record as needing verification or any type of update before being considered usable.":
        'Para situaciones en las que no estás seguro de ningún valor que hayas ingresado en el formulario Agregar/Editar Pesos Aproximados, usa la sección Revisión Pendiente para marcar el registro como que necesita verificación o cualquier tipo de actualización antes de considerarlo utilizable.',

      "For security reasons, you've been automatically logged out due to inactivity":
        'Por razones de seguridad, has sido desconectado automáticamente debido a la inactividad',
      'For situations where you are uncertain about certain values in the Add/Edit Ingredient form, use the Pending Review section to mark the record as needing more verification or any type of update before being considered usable in a Menu Item.':
        'Para situaciones en las que no estás seguro de ciertos valores en el formulario Agregar/Editar Ingrediente, usa la sección Revisión Pendiente para marcar el registro como que necesita más verificación o cualquier tipo de actualización antes de considerarlo utilizable en un Elemento del Menú.',
      'For some things like "chicken breast" or "all-purpose flour," there isn\'t much variety in those ingredients and the generic names of "chicken breast" or "all-purpose flour" are best.':
        'Para algunas cosas como "pechuga de pollo" o "harina para todo uso", no hay mucha variedad en esos ingredientes y los nombres genéricos de "pechuga de pollo" o "harina para todo uso" son los mejores.',
      'For the sake of consistency, we recommend that you enter all ingredients that are fruits or vegetables (and that are not in a container) into the Fruits & Vegetables tab.':
        'Por una cuestión de consistencia, recomendamos que ingreses todos los ingredientes que son frutas o verduras (y que no están en un contenedor) en la pestaña Frutas & Verduras.',
      'For those situations, you can uncheck the checkbox for':
        'Para esas situaciones, puedes desmarcar la casilla de verificación para',
      'For example, you might want to specify that a Menu Item calls for 2 yellow onions, 1 carrot, and 1 stalk of celery.':
        'Por ejemplo, es posible que desees especificar que un Elemento del Menú requiere 2 cebollas amarillas, 1 zanahoria y 1 tallo de apio.',
      "For your convenience, we've provided the most likely starting points for you below.": 'Para tu conveniencia, hemos proporcionado los puntos de partida más probables para ti a continuación.',
      'Forgot password': 'Restablecer contraseña',
      'Forgot password?': '¿Olvidaste tu contraseña?',
      'Free': 'Gratis',
      'free': 'gratis',
      'Free!': '¡Gratis!',
      'free!': 'gratis!',
      'Free Tier': 'Nivel Gratis',
      'free tier': 'nivel gratis',
      'Free Trial': 'Prueba Gratis',
      'Free trial': 'Prueba gratis',
      'free trial': 'prueba gratis',
      'French': 'Francés',
      'From': 'Desde',
      'From the Portion Size dropdown menu, select your desired portion size for the Menu Item.':
        'Desde el menú desplegable Tamaño de Porción, selecciona el tamaño de porción deseado para el Elemento del Menú.',
      'from the Unit of Measure dropdown menu.': 'desde el menú desplegable Unidad de Medida.',
      'frozen peas': 'chícharos congelados (arvejas congeladas)',
      'Fruits': 'Frutas',
      'Fruits & Vegetables': 'Frutas & Verduras',
      'Fruits and vegetables can be sold in a variety of ways that could qualify for the Weight tab, Package tab, or Volume tab.':
        'Las frutas y verduras se pueden vender de varias formas que podrían calificar para la pestaña Peso, la pestaña Paquete o la pestaña Volumen.',
      'Fruits, Vegetables, & Fresh Herbs': 'Frutas, Verduras y Hierbas Frescas',
      'Fuji apples': 'manzanas Fuji',
      'Fuji apple': 'manzana Fuji',
      'fuji apple': 'manzana fuji',
      'fuji apples': 'manzanas fuji',
      'Gallon': 'Galón',
      'Gallons': 'Galones',
      'gallon': 'galón',
      'gallons': 'galones',
      'General': 'General',
      'General Information': 'Información General',
      'German': 'Alemán',
      'Get Started': 'Empezar',
      'Get Started!': '¡Empezar!',
      'Get started': 'Empezar',
      'Get started!': '¡Empezar!',
      'Get started with Cocina Digital, the only food cost calculator you need!':
        '¡Empieza con Cocina Digital, la única calculadora de costos de alimentos que necesitas!',
      'Go to': 'Ir a',
      'Go to the next list of approximate weights': 'Ir a la siguiente lista de pesos aproximados',
      'Go to the next list of ingredients': 'Ir a la siguiente lista de ingredientes',
      'Go to the next list of menu items': 'Ir a la siguiente lista de elementos del menú',
      'Go to the previous list of approximate weights': 'Ir a la lista de pesos aproximados anterior',
      'Go to the previous list of menu items': 'Ir a la lista de elementos del menú anterior',
      'Go to the previous list of ingredients': 'Ir a la lista de ingredientes anterior',
      'Gram': 'Gramo',
      'gram': 'gramo',
      'Grams': 'Gramos',
      'grams': 'gramos',
      'Granny Smith apples': 'manzanas Granny Smith',
      'Great!': '¡Genial!',
      'ground beef': 'carne molida',
      'Ground Beef Patty': 'Hamburguesa de Carne Molida',
      'Hamburger Bun': 'Pan de Hamburguesa',
      'Hamburger patties are sold pre-made and are available in the frozen section of a supermarket.':
        'Las hamburguesas se venden pre-hechas y están disponibles en la sección congelada de un supermercado.',
      'Hamburger patties can also, of course, be made fresh from ground beef.':
        'Las hamburguesas también se pueden hacer, por supuesto, con carne molida fresca.',
      'Have a promotional code?': '¿Tienes un código promocional?',
      'Have a question on how to use Cocina Digital? Not sure of how to do something? Request support from Cocina Digital':
        '¿Tienes una pregunta sobre cómo usar Cocina Digital? ¿No estás seguro de cómo hacer algo? Solicita soporte de Cocina Digital',
      'Help Center': 'Centro de Ayuda',
      'Help center': 'Centro de ayuda',
      'help center': 'centro de ayuda',
      'Help on Approximate Weights': 'Ayuda sobre Pesos Aproximados',
      'Help on Ingredients': 'Ayuda sobre Ingredientes',
      'Help on Menu Items': 'Ayuda sobre Elementos del Menú',
      'Here': 'Aquí',
      'here': 'aquí',
      'Here is a brief list of examples of ingredients that are sold by weight and should be entered in the Weight section:':
        'Aquí hay una breve lista de ejemplos de ingredientes que se venden por peso y deben ingresarse en la sección Peso:',
      "Here is a photo of the ground beef that we'll be using:": 'Aquí hay una foto de la carne molida que usaremos:',
      'Hey guys, my name is Mike D.': 'Hola chicos, mi nombre es Mike D.',
      'Home Cook': 'Cocinero Casero',
      'Home Cooks': 'Cocineros Caseros',
      'home cooks selling dishes part time or full time':
        'cocineros caseros que venden platos a tiempo parcial o completo',
      'honeycrisp apple': 'manzana honeycrisp',
      'honeycrisp apples': 'manzanas honeycrisp',
      "How can I solve this?": "¿Cómo puedo solucionar esto?",
      'How do I get the calculated price for my compound ingredient?':
        '¿Cómo obtengo el precio calculado para mi ingrediente compuesto?',
      'How do I get the calculated price for my menu item?':
        '¿Cómo obtengo el precio calculado para mi elemento del menú?',
      'How Do I Use Cocina Digital?': '¿Cómo uso Cocina Digital?',
      'How many': '¿Cuántos',
      'how many': '¿cuántos',

      'How many gallons are in each container?': '¿Cuántos galones hay en cada contenedor?',
      'How many milliliters are in each container?': '¿Cuántos mililitros hay en cada contenedor?',
      'How many fluid ounces are in each container?': '¿Cuántas onzas líquidas hay en cada contenedor?',
      'How many liters are in each container?': '¿Cuántos litros hay en cada contenedor?',
      'How many quarts are in each container?': '¿Cuántos cuartos hay en cada contenedor?',
      'How many pints are in each container?': '¿Cuántas pintas hay en cada contenedor?',

      'How many grams does a tablespoon of this ingredient weigh?':
        '¿Cuántos gramos pesa una cucharada de este ingrediente?',
      'How many grams does a unit of this ingredient weigh': '¿Cuántos gramos pesa una unidad de este ingrediente',
      'How many grams does a unit of this ingredient weigh?': '¿Cuántos gramos pesa una unidad de este ingrediente?',
      'How many items are there per package?': '¿Cuántos artículos hay por paquete?',
      'How to fix this:': 'Cómo solucionar esto:',
      'However, if the package is a case of 10 bottles of extra virgin olive oil, as an example, then the package contains multiple containers.': 'Sin embargo, si el paquete es un caso de 10 botellas de aceite de oliva extra virgen, por ejemplo, entonces el paquete contiene múltiples contenedores.',
      'However, there may be times when you wish to temporarily disable an ingredient from being used in a Menu Item.':
        'Sin embargo, puede haber momentos en los que desees deshabilitar temporalmente un ingrediente para que no se use en un Elemento del Menú.',
      "I also would be interested in helping others who have questions.": "También estaría interesado en ayudar a otros que tengan preguntas.",
      'I am a caterer and want to learn more about marketing, sales, and operations.': 'Soy un proveedor de catering y quiero aprender más sobre marketing, ventas y operaciones.',
      
      "I am a cook who works in a restaurant, food truck, catering company, food cart, or food stand and am just starting out my career and looking to grow professionally.": "Soy un cocinero que trabaja en un restaurante, food truck (camión de comida), empresa de catering, carrito de comida o puesto de comida y estoy empezando mi carrera y buscando crecer profesionalmente.",
     
      'I am a culinary instructor and want to learn more about trends in the industry and how to find students.': 'Soy un instructor culinario y quiero aprender más sobre las tendencias en la industria y cómo encontrar estudiantes.',
      'I am a culinary student and want to learn more about educational programs, career opportunities and how to continue to grow.': 'Soy un estudiante de cocina y quiero aprender más sobre programas educativos, oportunidades de carrera y cómo seguir creciendo.',
      "I am a food blogger (or influencer or YouTuber) and create content through writings or videos about food, cooking, and recipes, and may also take photos of food.": "Soy bloguero gastronómico (o influencer o YouTuber) y creo contenido a través de escritos o vídeos sobre comida, cocina y recetas, y también puedo hacer fotos de comida.",
      'I am a food blogger and want to learn more about industry trends, recipes, and kitchen tips to share with my audience.': 'Soy un bloguero gastronómico y quiero aprender más sobre tendencias de la industria, recetas y consejos de cocina para compartir con mi audiencia.',
      'I am a food business owner and want to learn more about marketing, sales, operations, and tools to achieve success.': 'Soy un dueño de negocio de comida y quiero aprender más sobre marketing, ventas, operaciones y herramientas para lograr el éxito.',
      "I am a foodie and enjoy eating food, trying new dishes, visiting different restaurants, and exploring different cuisines.": "Soy un entusiasta de la comida y disfruto comiendo, probando nuevos platos, visitando diferentes restaurantes y explorando diferentes cocinas.",
      
      'I am a foodie and want to learn more about industry trends, up-and-coming restaurants, and hear of others who share my love of food.': 'Soy un entusiasta de la comida y quiero aprender más sobre tendencias de la industria, restaurantes emergentes y escuchar a otros que comparten mi amor por la comida.',
      'I am a private chef and want to learn more about finding clients, tools, and market trends.': 'Soy un chef privado y quiero aprender más sobre cómo encontrar clientes, herramientas y tendencias del mercado.',
      "I am a professional chef or cook, and work full time in the food industry, such as in a restaurant, food truck, catering company, food cart, food stand, or similar.": "Soy un chef o cocinero profesional y trabajo tiempo completo en la industria alimentaria, como en un restaurante, food truck (camión de comida), empresa de catering, carrito de comida, puesto de comida o similar.",
      'I am a professional chef and want to learn more about latest trends, leadership, and restaurant operations.': 'Soy un chef profesional y quiero aprender más sobre las últimas tendencias, liderazgo y operaciones de restaurantes.',
      "I am a vendor and sell the food (ingredients) to then make dishes.": "Soy un vendedor y vendo los alimentos (ingredientes) para luego hacer platos.",
      "I am a vendor and want to get my products in front of potential customers.": "Soy un vendedor y quiero poner mis productos frente a posibles clientes.",
      'I am a vendor and want to learn more about marketing, sales, and operations of my products.': 'Soy un vendedor y quiero aprender más sobre marketing, ventas y operaciones de mis productos.',
      "I am interested in learning how to cook and am currently enrolled in a culinary school or program, or planning to do so.": "Estoy interesado en aprender a cocinar y actualmente estoy inscrito en una escuela o programa de cocina, o planeo hacerlo.",
      'I am just starting out in the food industry and want to learn more about advancing my career': 
        'Estoy empezando en la industria alimentaria y quiero aprender más sobre cómo avanzar en mi carrera',
      'I built Cocina Digital from the ground up to solve my own problems and in doing so, I believe that it will solve your food cost problems as well.':
        'Construí Cocina Digital desde cero para resolver mis propios problemas y al hacerlo, creo que también resolverá tus problemas de costos de alimentos.',
      'I have a part-time food business and want to learn more about marketing, sales, operations, and tools to achieve success with a focus on a small business.':
        'Tengo un negocio de comida a tiempo parcial y quiero aprender más sobre marketing, ventas, operaciones y herramientas para lograr el éxito con un enfoque en un pequeño negocio.',
      "I have a passion for cooking and enjoy preparing meals for myself and others, but I don't make money off of it.": "Me apasiona cocinar y disfruto preparando platos para mí y para los demás, pero no gano dinero de eso.",
      "I have a recipe for a sauce that uses so many ingredients that it's almost impossible to know how to price it when I add it to a dish.": "Tengo una receta para una salsa que usa tantos ingredientes que es casi imposible saber cómo ponerle precio cuando la agrego a un plato.",
      'I have over 25 years of software development experience, but like many of you, I love to cook.':
        'Tengo más de 25 años de experiencia en desarollo de software, pero como muchos de ustedes, me encanta cocinar.',
      "I have receipts for the ingredients that I've purchased and I am ready to enter them.": "Tengo recibos de los ingredientes que he comprado y estoy listo para ingresarlos.",
      "I have recipes and from my recipes, I'd like to calculate the cost of the ingredients to make my dishes.": "Tengo recetas y de mis recetas, me gustaría calcular el costo de los ingredientes para hacer mis platos.",
      'I love to cook for friends, family, or just myself, and want to continue improving on techniques, cost-saving suggestions, and kitchen tips.': 'Me encanta cocinar para amigos, familiares o solo para mí, y quiero seguir mejorando en técnicas, sugerencias para ahorrar costos y consejos de cocina.',
      "I need help with something and would like someone from Cocina Digital to respond to me.": "Necesito ayuda con algo y me gustaría que alguien de Cocina Digital me respondiera.",
      "I sell direct to restaurants or to markets: farmers' markets, grocery stores, or similar.": "Vendo directamente a restaurantes o a mercados: mercados de agricultores, tiendas de comestibles o similares.",
      "I sometimes run into problems and I'd like to ask for help from the community of users.": "A veces tengo problemas y me gustaría pedir ayuda a la comunidad de usuarios.",
      "I teach cooking classes, culinary workshops, or similar and do it in a classroom setting, my own kitchen or that of a student, or online.": "Imparto clases de cocina, talleres culinarios o similares y lo hago en un aula, en mi propia cocina o en la de un alumno, o en línea.",
      "I want them to be able to use Cocina Digital to help me manage my food costs.": "Quiero que puedan usar Cocina Digital para ayudarme a gestionar mis costos de alimentos.",
      "I want to build my team.": "Quiero construir mi equipo.",
      "I want to learn more about Cocina Digital itself and how it can help me.": "Quiero aprender más sobre Cocina Digital en sí y cómo puede ayudarme.",
      "I want to learn new recipes, cooking techniques, and control how much I spend on meals.": "Quiero aprender nuevas recetas y técnicas de cocina, y controlar cuánto gasto en comida.",
      "I want to stay informed about Cocina Digital and continue to grow my business as well as grow myself professionally.": "Quiero mantenerme informado sobre Cocina Digital y seguir creciendo mi negocio, así como crecer profesionalmente.",
      "I want to use Cocina Digital to help me market and sell my dishes.": "Quiero usar Cocina Digital para ayudarme a comercializar y vender mis platos.",
      "I work full time in the food industry and prepare meals for clients in their homes, typically on a regular basis.": "Trabajo tiempo completo en la industria alimentaria y preparo comidas para clientes en sus casas, normalmente de forma regular.",
      "I work full time in the food industry and provide food and drink, typically at social events and in other locations, such as a wedding, party, or conference.": "Trabajo tiempo completo en la industria alimentaria y proporciono comida y bebida, normalmente en eventos sociales y en otros lugares, como bodas, fiestas o conferencias.",
      
      "I work full time in the food industry and sell dishes at my business that is a restaurant, food truck, catering company, food cart, food stand, or similar.": "Trabajo tiempo completo en la industria alimentaria y vendo platos en mi negocio, que puede ser un restaurante, un food truck (camión de comida), una empresa de catering, un carrito de comida, un puesto de comida o similar.",
      "I work part-time making and selling dishes, either from my home kitchen or an establishment where I generally rent the space or have some arrangement to use it.": "Trabajo medio tiempo haciendo y vendiendo platos, ya sea desde la cocina de mi casa o en un establecimiento donde generalmente rento el espacio o tengo algún acuerdo para usarlo.",
      'If ABC Meat Market sells ribeye steak for $13.99 per pound, but Best Value Meat Supplier sells the same ribeye for $11.99 per pound, you would want to know that Best Value Meat Supplier is the better choice for buying ribeye steak.': 'Si ABC Meat Market vende bistec de ribeye por $13.99 la libra, pero Best Value Meat Supplier vende el mismo ribeye por $11.99 la libra, querrías saber que Best Value Meat Supplier es la mejor opción para comprar bistec de ribeye.',
      'If both the Fixed Price field is filled in and the Temporary Price field is filled in, then the Temporary Price takes precedence if an order comes in during the start and end dates for the temporary price.':
        'Si tanto el campo Precio Fijo como el campo Precio Temporal están completos, entonces el Precio Temporal tiene prioridad si se realiza un pedido durante las fechas de inicio y finalización del precio temporal.',
      'Ideally, the name of your menu item should match how you plan to show it to customers.':
        'Idealmente, el nombre de tu elemento del menú debe coincidir con la forma en que planeas mostrarlo a los clientes.',
      'If any errors are encountered, the form will not save and you will be notified of the errors that need to be corrected.':
        'Si se encuentran errores, el formulario no se guardará y se te notificará de los errores que deben corregirse.',
      'If both the Fixed Price field is filled in and the Temporary Price field is filled in, then the Temporary Price takes precedence as long as the current date is within the range of the start and end date for the Temporary Price.':
        'Si tanto el campo Precio Fijo como el campo Precio Temporal están completos, entonces el Precio Temporal tiene prioridad siempre que la fecha actual esté dentro del rango de la fecha de inicio y finalización del Precio Temporal.',
      'If, for some reason, you need to add a markup percentage greater than 400%, you should give consideration to using a fixed price instead of the combo calculated price.':
        'Si, por alguna razón, necesitas agregar un porcentaje de marcado mayor al 400%, debes considerar usar un precio fijo en lugar del precio calculado de la combinación.',
      'If, instead, you visited a wholesaler like Costco and saw the cost per pound for a cut of New York Steak, for example, use the date of your visit to Costco as the Date Last Checked.':
        'Si, en cambio, visitaste un mayorista como Costco y viste el costo por libra de un corte de bistec de Nueva York, por ejemplo, usa la fecha de tu visita a Costco como la Fecha de la Última Verificación.',
      "If for some reason you find that the Volume tab isn't working for you, you can always switch to the Package tab and enter your ingredient there.":
        'Si por alguna razón encuentras que la pestaña Volumen no funciona para ti, siempre puedes cambiar a la pestaña Paquete e ingresar tu ingrediente allí.',
      'If no Fixed Price is set, then the Calculated Price takes over':
        'Si no se establece un Precio Fijo, entonces el Precio Calculado toma el control',
      'If none of the above applies, then answer no.': 'Si ninguna de las anteriores aplica, entonces responde no.',
      'If so, then answer': 'Si es así, entonces responde',
      'If the Calculated Price for a dish is $9.75, but you enter a value of $29.99 in the Fixed Price field, then the Menu Item will use the $29.99 amount from the Fixed Price field since the Fixed Price takes precedence over the Calculated Price.':
        'Si el Precio Calculado para un plato es $9.75, pero ingresas un valor de $29.99 en el campo Precio Fijo, entonces el Elemento del Menú usará los $29.99 del campo Precio Fijo ya que el Precio Fijo tiene prioridad sobre el Precio Calculado.',
      'If the Calculated Price for a dish is $9.75, but you enter a value of $14.50 in the Fixed Price field, then the Menu Item  will use the $14.50 from the Fixed Price field since the Fixed Price takes precedence over the Calculated Price.':
        'Si el Precio Calculado para un plato es $9.75, pero ingresas un valor de $14.50 en el campo Precio Fijo, entonces el Elemento del Menú usará los $14.50 del campo Precio Fijo ya que el Precio Fijo tiene prioridad sobre el Precio Calculado.',
      'If the fruit': 'Si la fruta',
      "If the Ingredient field, the Quantity field, and the Unit of Measure field have been correctly filled in, then you'll receive a green checkbox at the start of the line to indicate that the ingredient was correctly entered as part of the compound ingredient.":
        'Si el campo Ingrediente, el campo Cantidad y el campo Unidad de Medida se han completado correctamente, entonces recibirás una casilla de verificación verde al comienzo de la línea para indicar que el ingrediente se ingresó correctamente como parte del ingrediente compuesto.',
      "If the Ingredient field, the Quantity field, and the Unit of Measure field have been correctly filled in, then you'll receive a green checkbox at the start of the line with the ingredient.":
        'Si el campo Ingrediente, el campo Cantidad y el campo Unidad de Medida se han completado correctamente, entonces recibirás una casilla de verificación verde al comienzo de la línea con el ingrediente.',
      'If the ingredient that you are trying to enter is not sold by weight, but rather is a fixed':
        'Si el ingrediente que estás tratando de ingresar no se vende por peso, sino que es un',
      'If the ingredient is 2 kilograms of ribeye steak, then the brand can be left blank since ribeye steak is a cut of meat and not a manufactured product.':
        'Si el ingrediente es 2 kilogramos de bistec de ribeye, entonces la marca se puede dejar en blanco ya que el bistec de ribeye es un corte de carne y no un producto manufacturado.',
      'If the ingredient is “broccoli,” enter the name broccoli.':
        'Si el ingrediente es "brócoli", ingresa el nombre brócoli.',
      'If the ingredient is "broccoli," then the brand can be left blank since broccoli is a vegetable and not a manufactured product.':
        'Si el ingrediente es "brócoli", entonces la marca se puede dejar en blanco ya que el brócoli es una verdura y no un producto manufacturado.',

      'If the ingredient is': 'Si el ingrediente es',
      'If the ingredient is sold in a package, then you should enter it in the Package section.':
        'Si el ingrediente se vende en un paquete, entonces debes ingresarlo en la sección Paquete.',
      'If the ingredient comes in a sack, box, or crate where a fixed weight is not defined on the container, you should use the Volume section to enter the ingredient.':
        'Si el ingrediente viene en un saco, caja o huacal donde un peso fijo no está definido en el contenedor, debes usar la sección Volumen para ingresar el ingrediente.',
      'If the name of your ingredient is in the singular form (e.g., "apple"), then you may want to include the plural form of the ingredient in the Keywords field (e.g., "apples") and vice versa.':
        'Si el nombre de tu ingrediente está en forma singular (por ejemplo, "manzana"), entonces es posible que desees incluir la forma plural del ingrediente en el campo Palabras Clave (por ejemplo, "manzanas") y viceversa.',
      'If the package contains a quantity of the ingredient in question, such as 12 eggs in a carton, then select the "Package contains a count..." option.': 'Si el paquete contiene una cantidad del ingrediente en cuestión, como 12 huevos en una caja, entonces selecciona la opción "El paquete contiene un recuento...".',
      
      'If the package contains both a quantity of the ingredient and is sold by weight, such as a package of 5 Italian sausages that weighs 1 pound, then select the "Package contains a count..." option because it will allow you to enter both the count and the weight.': 'Si el paquete contiene tanto una cantidad del ingrediente como se vende por peso, como un paquete de 5 salchichas italianas que pesa 1 libra, entonces selecciona la opción "El paquete contiene un recuento..." porque te permitirá ingresar tanto el recuento como el peso.',
      'If the package is a single can or bottle of extra virgin olive oil, for example, then the package is a standalone container and you should select that option.': 'Si el paquete es una lata o botella de aceite de oliva extra virgen, por ejemplo, entonces el paquete es un contenedor independiente y debes seleccionar esa opción.',
      'If the package is sold by weight, such as a box of fettuccine that contains 1 pound of dried fettuccine, then select the "Package contains a fixed weight..." option.': 'Si el paquete se vende por peso, como una caja de fettuccine que contiene 1 libra de fettuccine seco, entonces selecciona la opción "El paquete contiene un peso fijo...".',
      'If the quantity of the ingredients that you entered in the Calculated Price section is enough to make 1 cup of vinaigrette, then this is your yield.':
        'Si la cantidad de los ingredientes que ingresaste en la sección Precio Calculado es suficiente para hacer 1 taza de vinagreta, entonces este es tu rendimiento.',
      'If the yield is 1 cup, then you would enter 1 in the Amount Produced field and select "cup" from the Unit of Measure dropdown menu.':
        'Si el rendimiento es de 1 taza, entonces ingresarías 1 en el campo Cantidad Producida y seleccionarías "taza" del menú desplegable Unidad de Medida.',
      'If there is no store because you, perhaps, are entering "tomatoes" as your ingredient and you happen to be  growing your own vegetables, you can enter your name as the Vendor.':
        'Si no hay tienda porque, tal vez, estás ingresando "tomates" como tu ingrediente y resulta que estás cultivando tus propias verduras, puedes ingresar tu nombre como el Vendedor.',
      'If there is no store because you, perhaps, are entering "tomatoes" as your ingredient and you happen to be growing your own vegetables, you can enter your name as the Vendor.':
        'Si no hay tienda porque, tal vez, estás ingresando "tomates" como tu ingrediente y resulta que estás cultivando tus propias verduras, puedes ingresar tu nombre como el Vendedor.',
      'if this ingredient is used in any recipe for a menu item that calls for, as an example, 1/2 of an onion or 2 whole potatoes or 3 eggs, then answer':
        'si este ingrediente se utiliza en cualquier receta para un elemento del menú que requiere, como ejemplo, 1/2 cebolla o 2 papas enteras o 3 huevos, entonces responde',
      'if this ingredient is used in any recipe for a Menu Item that calls for, as an example, 1/2 of an onion or 2 whole potatoes or 3 eggs, then answer': 'si este ingrediente se utiliza en cualquier receta para un Elemento del Menú que requiere, como ejemplo, 1/2 cebolla o 2 papas enteras o 3 huevos, entonces responde',
      'If this problem persists, please use the link below to report the issue at our support page.':
        'Si este problema persiste, por favor usa el enlace de abajo para reportar el problema en nuestra página de soporte.',
      'If you already signed up with your email, but did not receive a confirmation code to complete the sign up process, or have since lost it, request another':
        'Si ya te registraste con tu correo electrónico, pero no recibiste un código de confirmación para completar el proceso de registro, o lo perdiste, solicita otro',
      'If you already signed up with your email, but did not receive a confirmation code to complete the sign up process, or have since lost it, we can send you another.':
        'Si ya te registraste con tu correo electrónico, pero no recibiste un código de confirmación para completar el proceso de registro, o lo perdiste desde entonces, podemos enviarte otro.',
      'If you always use the same currency, you can set the default currency in the Account Settings section.':
        'Si siempre usas la misma moneda, puedes establecer la moneda predeterminada en la sección Configuración de la Cuenta.',
      'If you are entering "garlic" as your ingredient, you can enter "organic" in the Description field.':
        'Si estás ingresando "ajo" como tu ingrediente, puedes ingresar "orgánico" en el campo Descripción.',
      'If you are entering "New York Steak" as your ingredient, you can enter "USDA Prime" in the Description field.':
        'Si estás ingresando "Bistec de Nueva York" como tu ingrediente, puedes ingresar "USDA Prime" en el campo Descripción.',

      "If you are entering your ingredient's data based on receipts or invoices from when you last purchased the ingredient, then the Date Last Checked would be the date of the receipt or invoice.":
        'Si estás ingresando los datos de tu ingrediente en función de los recibos o facturas de la última vez que compraste el ingrediente, entonces la Fecha de la Última Verificación sería la fecha del recibo o factura.',

      'If you are not sure of the current price of an ingredient, you can mark it as Pending Review.':
        'Si no estás seguro del precio actual de un ingrediente, puedes marcarlo como Revisión Pendiente.',
      'If you buy the ingredient "garlic" from the vendor “Neighborhood Value Supermarket,” but you also buy the ingredient "garlic" from the vendor “Wholesale City Foods,” then you should create two ingredient records despite it being the same type of ingredient.':
        'Si compras el ingrediente "ajo" al vendedor "Supermercado de Valor del Vecindario", pero también compras el ingrediente "ajo" al vendedor "Alimentos de la Ciudad al por Mayor", entonces debes crear dos registros de ingredientes a pesar de que sea el mismo tipo de ingrediente.',
      'If you buy the ingredient "garlic" from the vendor "Neighborhood Value Supermarket," but you also buy the ingredient "garlic" from the vendor "Wholesale City Foods," then you should create two ingredient records despite it being the same type of ingredient.':
        'Si compras el ingrediente "ajo" al vendedor "Supermercado de Valor del Vecindario", pero también compras el ingrediente "ajo" al vendedor "Alimentos de la Ciudad al por Mayor", entonces debes crear dos registros de ingredientes a pesar de que sea el mismo tipo de ingrediente.',
      'If you cancel your plan, you will not be billed again.': 'Si cancelas tu plan, no se te cobrará nuevamente.',
      "If you don't have a business name, that's not a problem.": 'Si no tienes un nombre de negocio, no hay problema.',
      'If you fall into any of the following categories, you should use a food cost calculator:':
        'Si caes en alguna de las siguientes categorías, debes usar una calculadora de costos de alimentos:',
      'If you have any notes that you would like to associate with this approximate weight, you can enter them here.':
        'Si tienes alguna nota que te gustaría asociar con este peso aproximado, puedes ingresarla aquí.',
      'if you like working with a spreadsheet and their learning curve and limitations.':
        'si realmente te gusta invertir tiempo en su aprendizaje y conformarte con sus limitaciones.',
      'If you know both the weight in grams per unit of an ingredient and its weight in grams per tablespoon, you can enter both, but at least one of the fields must be populated.':
        'Si conoces tanto el peso en gramos por unidad de un ingrediente como su peso en gramos por cucharada, puedes ingresar ambos, pero al menos uno de los campos debe estar poblado.',
      'If you need 1 cup of the ingredient, then enter 1 in the Quantity field.':
        'Si necesitas 1 taza del ingrediente, ingresa 1 en el campo Cantidad.',
      'If you need 1 cup of the ingredient, then select': 'Si necesitas 1 taza del ingrediente, entonces selecciona',
      'If you need 1 cup of the ingredient, then select "cup" from the Unit of Measure dropdown menu.':
        'Si necesitas 1 taza del ingrediente, selecciona "taza" del menú desplegable Unidad de Medida.',
      'If you need 1 tablespoon of the ingredient, then select':
        'Si necesitas 1 cucharada del ingrediente, entonces selecciona',

      'if you offer buffalo wings and your portions consist of 6 chicken wings, 10 chicken wings, and so on, then answer':
        'si ofreces alitas de pollo y tus porciones consisten en 6 alitas de pollo, 10 alitas de pollo, y así sucesivamente, entonces responde',
      'If you paid $2.99 per pound for chicken breasts, only enter the 2.99 value in the "Price (Before Taxes)" field.':
        'Si pagaste $2.99 por libra de pechugas de pollo, solo ingresa el valor 2.99 en el campo "Precio (Antes de Impuestos)".',
      'If you paid a tax in addition to the basic price of the ingredient, enter the percentage of the tax in the "Tax rate (optional)" field. If the tax rate, for example, was 7.75%, just enter the number 7.75. Do not include the % symbol. If tax rates do no apply to the ingredient that you are entering, leave the field blank.':
        'Si pagaste un impuesto además del precio básico del ingrediente, ingresa el porcentaje del impuesto en el campo "Tasa de impuestos (opcional)". Si la tasa de impuestos, por ejemplo, fue del 7.75%, solo ingresa el número 7.75. No incluyas el símbolo %. Si las tasas de impuestos no se aplican al ingrediente que estás ingresando, deja el campo en blanco.',
      'If you plan to offer a combination platter that includes, for example, a cheeseburger, french fries, and a cheesecake, first enter those 3 dishes as their own Menu Items.':
        'Si planeas ofrecer un plato combinado que incluye, por ejemplo, una hamburguesa con queso, papas fritas y un pastel de queso, primero ingresa esos 3 platos como sus propios Elementos del Menú.',
      'If you set a Temporary Price, you must also set a start and end date for the temporary price.':
        'Si estableces un Precio Temporal, también debes establecer una fecha de inicio y finalización para el precio temporal.',
      'If you still need help, you can contact us directly.':
        'Si aún necesitas ayuda, puedes contactarnos directamente.',
      'If you update the price of an ingredient by editing the ingredient record AFTER having already used the ingredient in your compound ingredient, that updated price is not automatically applied to the calculated price of a compound ingredient.':
        'Si actualizas el precio de un ingrediente editando el registro de ingrediente DESPUÉS de haber usado el ingrediente en tu ingrediente compuesto, ese precio actualizado no se aplica automáticamente al precio calculado de un ingrediente compuesto.',
      'If you want to set a temporary fixed price, no problem.':
        'Si deseas establecer un precio fijo temporal, no hay problema.',
      'If you were to update the price of an ingredient and if that price were to automatically update the calculated price of a compound ingredient that is itself used in a menu item, then the price of the menu item would change without you being aware of that.':
        'Si actualizaras el precio de un ingrediente y ese precio actualizara automáticamente el precio calculado de un ingrediente compuesto que se utiliza en un elemento del menú, entonces el precio del elemento del menú cambiaría sin que te diera cuenta de ello.',
      'If you wish to cancel your subscription, please enter your email address below:':
        'Si deseas cancelar tu suscripción, ingresa tu dirección de correo electrónico a continuación:',
      'If you wish to charge 25% over the base cost of the ingredients, then move the slider to 25%.':
        'Si deseas cobrar un 25% más sobre el costo base de los ingredientes, mueve el control deslizante al 25%.',
      'If you wish to charge 40% over the base cost of the ingredients, then move the slider to 40%.':
        'Si deseas cobrar un 40% más sobre el costo base de los ingredientes, mueve el control deslizante al 40%.',
      'if you wish to offer a promotional price that has specific start and end dates, enter it as a Temporary Price along with the start and end dates':
        'si deseas ofrecer un precio promocional que tenga fechas de inicio y finalización específicas, ingrésalo como Precio Temporal junto con las fechas de inicio y finalización',
      "If you wish to use one of the listed currency options instead, please clear the Country field.": "Si deseas usar una de las opciones de moneda listadas en su lugar, por favor borra el campo País.",
      'If you decide that you wish to sell a dish for $29.99, regardless of the cost of the ingredients, then you would enter $29.99 in the Fixed Price field.':
        'Si decides que deseas vender un plato por $29.99, independientemente del costo de los ingredientes, entonces ingresarías $29.99 en el campo Precio Fijo.',
      'if what you are planning to offer is just that: a combination platter.':
        'si lo que planeas ofrecer es solo eso: un plato combinado.',

      'if you know for sure a specific price that you wish to sell a Menu Item, enter it as a Fixed Price':
        'si sabes con certeza un precio específico que deseas vender un Elemento del Menú, ingrésalo como Precio Fijo',

      'If you need 1 tablespoon of the ingredient, then enter 1 in the Quantity field.':
        'Si necesitas 1 cucharada del ingrediente, ingresa 1 en el campo Cantidad.',
      'if you purchase this fruit or vegetable in bulk': 'si compras esta fruta o verdura a granel',
      "If you run into an issue or have a question, please don't hesitate to reach out to us.": 'Si te encuentras con un problema o tienes una pregunta, no dudes en contactarnos.',
      'If you use "ribeye steak" for one ingredient that you buy from one market and "ribeye" for another ingredient that you buy at another market, the price comparison will not work.': 'Si usas "bistec de ribeye" para un ingrediente que compras en un mercado y "ribeye" para otro ingrediente que compras en otro mercado, la comparación de precios no funcionará.',
      "If you want to get started right away, then begin by adding your ingredients -- it's as simple as that.": 'Si deseas comenzar de inmediato, entonces comienza agregando tus ingredientes; es tan simple como eso.',
      'If you will be using individual cinnamon sticks in a Menu Item, then answer yes.':
        'Si usarás ramas de canela individuales en un Elemento del Menú, entonces responde sí.',
      'If you wish to learn more about Compound Ingredients and how they are useful to you, visit the following article:':
        'Si deseas obtener más información sobre los Ingredientes Compuestos y cómo te son útiles, visita el siguiente artículo:',
      'If you wish to upload an image, click the Browse link and select the image that you wish to upload.':
        'Si deseas subir una imagen, haz clic en el enlace Buscar y selecciona la imagen que deseas subir.',
      'If you wish to upload any images associated to an Ingredient record, do so here.':
        'Si deseas subir cualquier imagen asociada a un registro de Ingrediente, hazlo aquí.',
      "If you're in the business of selling one or more dishes, you should use a food cost calculator.":
        'Si estás en el negocio de vender uno o más platos, deberías usar una calculadora de costos de alimentos.',
      "If you've already added your ingredient into Cocina Digital, you can use our food cost calculator to quickly add up the food cost of a recipe.": 
        'Si ya has agregado tu ingrediente en Cocina Digital, puedes usar nuestra calculadora de costos de alimentos para sumar rápidamente el costo de los alimentos de una receta.',
      "If you've been guessing the cost of a dish, your profit margin may not actually be 15%, and your financial forecasts for your business would be off.":
        'Si has estado adivinando el costo de un plato, tu margen de ganancia puede que no sea realmente del 15%, y tus previsiones financieras para tu negocio estarían equivocadas.',
      "If you've run into an issue or have a question, please don't hesitate to reach out to us.":
        'Si te has encontrado con un problema o tienes una pregunta, no dudes en contactarnos.',
      'If your ingredient falls into this description, then you are in the correct section.':
        'Si tu ingrediente se ajusta a esta descripción, entonces estás en la sección correcta.',
      'If your preferred currency is not listed above, please type in the name of the country for whose currency you wish to use and we will attempt to add it within 2-3 business days.': 'Si tu moneda preferida no está en la lista de arriba, por favor escribe el nombre del país cuya moneda deseas usar y trataremos de agregarla en 2-3 días hábiles.',
      'Image Rotation': 'Rotación de Imagen',
      'Images': 'Imágenes',
      'Images also have the benefit of being useful for training purposes if you have an apprentice who doesn’t know what a certain vegetable looks like, or is not familiar with a pasta shape, or, perhaps, is uncertain about a type of fish.':
        'Las imágenes también tienen la ventaja de ser útiles para fines de capacitación si tienes un aprendiz que no sabe cómo se ve cierta verdura, o no está familiarizado con una forma de pasta, o, tal vez, no está seguro de un tipo de pescado.',
      'Images are sometimes helpful to quickly identify an ingredient elsewhere in Cocina Digital.':
        'Las imágenes son a veces útiles para identificar rápidamente un ingrediente en otra parte de Cocina Digital.',
      'Images are uploaded when the Ingredient record is saved.':
        'Las imágenes se cargan cuando se guarda el registro de Ingrediente.',
      'Images need to be associated': 'Las imágenes necesitan ser asociadas',
      'Import': 'Importar',
      'IMPORTANT': 'IMPORTANTE',
      'Important notifications about your account security':
        'Notificaciones importantes sobre la seguridad de tu cuenta',
      'in': 'en',
      'In order for a Menu Item to be valid, one of the three pricing methods must be set':
        'Para que un Elemento del Menú sea válido, se debe establecer uno de los tres métodos de precios',
      'In order for Cocina Digital to calculate the cost of this ingredient when it is added to a menu item, you must answer yes to one or both of the questions below and then select or enter an approximate weight.':
        'Para que Cocina Digital calcule el costo de este ingrediente cuando se agrega a un elemento del menú, debes responder sí a una o ambas preguntas a continuación y luego seleccionar o ingresar un peso aproximado.',
      'In order to calculate the price of this menu item with this ingredient, please provide an estimate for the weight in grams of a single unit of':
        'Para calcular el precio de este elemento del menú con este ingrediente, por favor proporciona un estimado para el peso en gramos de una sola unidad de',
      'In order to calculate the price of this menu item with this ingredient, please provide an estimate for the weight in grams of a tablespoon of':
        'Para calcular el precio de este elemento del menú con este ingrediente, por favor proporciona un estimado para el peso en gramos de una cucharada de',
      'In other words, to make a profit of 15% on a dish, you have to know the true cost of the dish to calculate a 15% profit.':
        'En otras palabras, para obtener una ganancia del 15% en un plato, debes conocer el costo real del plato para calcular una ganancia del 15%.',
      "In short, I want to connect with other Cocina Digital users.": 'En resumen, quiero conectarme con otros usuarios de Cocina Digital.',
      'In short, the Date Last Checked is meant to indicate the date of when you verified the price that you are going to enter as the cost of your ingredient.':
        'En resumen, la Fecha de la Última Verificación pretende indicar la fecha en que verificaste el precio que vas a ingresar como el costo de tu ingrediente.',
      'In such cases, just use quantities of an ingredient where a single unit of the ingredient has already been weighed to an approximate weight (an average)':
        'En tales casos, simplemente usa cantidades de un ingrediente donde una sola unidad del ingrediente ya ha sido pesada a un peso aproximado (un promedio)',
      'In the below image, you see that we are searching for "extra virgin olive oil," an ingredient that we had already entered into Cocina Digital.':
        'En la imagen a continuación, ves que estamos buscando "aceite de oliva extra virgen", un ingrediente que ya habíamos ingresado en Cocina Digital.',
      'in the Combo section of the form.': 'en la sección Combo del formulario.',
      'in the field below': 'en el campo de abajo',
      'In the following image, notice that the Fixed Price field is filled in with a value of $35.99.':
        'En la siguiente imagen, observa que el campo Precio Fijo está completado con un valor de $35.99.',
      'In the following image, the approximate weight of a Fuji apple is being entered: 280 grams.':
        'En la siguiente imagen, se está ingresando el peso aproximado de una manzana Fuji: 280 gramos.',
      'In the Ingredient field, enter the name of the ingredient.':
        'En el campo Ingrediente, ingresa el nombre del ingrediente.',
      'In the Ingredient field of the Calculated Price section, search for the name of the ingredient that you need and then select it from the search results.':
        'En el campo Ingrediente de la sección Precio Calculado, busca el nombre del ingrediente que necesitas y luego selecciónalo de los resultados de la búsqueda.',
      'in the left-hand menu': 'en el menú de la izquierda',
      'In this case': 'En este caso',
      'In this case, you are encouraged to enter both values, although only one of the two fields is required.':
        'En este caso, se sugiere a ingresar ambos valores, aunque solo se requiere uno de los dos campos.',
      'In this case, you would enter 2 in the "Weight in grams per tablespoon" field.':
        'En este caso, ingresarías 2 en el campo "Peso en gramos por cucharada".',
      'In this case, you would enter 280 in the "Weight in grams per unit" field.':
        'En este caso, ingresarías 280 en el campo "Peso en gramos por unidad".',
      'In this example, Cocina Digital will calculate the cost of the chicken breasts to be $2.99 per pound.':
        'En este ejemplo, Cocina Digital calculará el costo de las pechugas de pollo en $2.99 por libra.',
      "In those cases, you don't want to use the ingredient in a Menu Item until it is available again.":
        'En esos casos, no deseas usar el ingrediente en un Elemento del Menú hasta que esté disponible nuevamente.',
      'Inactive Only': 'Solo Inactivos',
      'Inactive only': 'Solo inactivos',
      'inactive only': 'solo inactivos',
      'Inactivity Warning': 'Advertencia de Inactividad',
      'Incorrect email or password. Please try again.':
        'Correo electrónico o contraseña incorrectos. Por favor, inténtalo de nuevo.',
      'Ingredient': 'Ingrediente',
      'Ingredient added!': '¡Ingrediente agregado!',
      'Ingredient cannot exceed 255 characters': 'El ingrediente no puede exceder los 255 caracteres',
      'Ingredient is a required field': 'Ingrediente es un campo obligatorio',
      'Ingredient must be at least 3 characters': 'El ingrediente debe tener al menos 3 caracteres',
      'Ingredient not found': 'Ingrediente no encontrado',
      'Ingredients': 'Ingredientes',
      'Ingredients Add/Edit form.': 'Formulario de Agregar/Editar Ingredientes.',
      'Ingredients are used to create Menu Items': 'Los ingredientes se utilizan para crear Elementos del Menú',
      'Ingredients such as all-purpose flour, for example, are sold by weight, but are often measured by volume when being used in a recipe.':
        'Ingredientes como la harina para todo uso, por ejemplo, se venden por peso, pero a menudo se miden por volumen cuando se usan en una receta.',
      'Ingredients such as potatoes or flour may only be available to you if you purchase a':
        'Ingredientes como papas o harina pueden estar disponibles para ti solo si compras un',
      'Invalid date': 'Fecha inválida',
      'Invoices': 'Facturas',
      'Introducing': 'Presentando',
      'is a required field': 'es un campo obligatorio',
      'is a type of apple and we want to enter it as part of the ingredient name since we may also have':
        'es un tipo de manzana y queremos ingresarla como parte del nombre del ingrediente ya que también podemos tener',
      'is not checked.': 'no está marcado.',
      'is sold by weight': 'se vende por peso',
      'Is the fruit or vegetable sold by weight, by volume, or by a fixed bundle?': '¿Se vende la fruta o verdura por peso, por volumen o por un manojo fijo?',
      'Is the package a quantity of the ingredient in question?':
        '¿Es el paquete una cantidad del ingrediente en cuestión?',
      'Is the package an ingredient that is in liquid form?':
        '¿Es el paquete un ingrediente que está en forma líquida?',
      'Or is the package itself sold by weight?': '¿O se vende el paquete en sí por peso?',
      'Is the package of liquid a standalone container?': '¿Es el paquete de líquido un contenedor independiente?',
      'Is the package of liquid a standalone container or does the package contain multiple containers of liquid?': '¿Es el paquete de líquido un contenedor independiente o el paquete contiene múltiples contenedores de líquido?',
      'Is this fruit or vegetable something that you would add to a recipe in terms of volume?':
        '¿Es esta fruta o verdura algo que agregarías a una receta en términos de volumen?',
      'Is this ingredient something that you would add to a recipe in terms of volume?':
        '¿Es este ingrediente algo que agregarías a una receta en términos de volumen?',
      'Is this ingredient something that you would add to a menu item on a per bundle basis?':
        '¿Es este ingrediente algo que agregarías a un elemento del menú por manojo?',
      'Is this ingredient something that you would add to a menu item on a per unit basis?':
        '¿Es este ingrediente algo que agregarías a un elemento del menú por unidad?',
      'Is this your account?': '¿Esta es tu cuenta?',
      'It all starts with ingredients': 'Todo comienza con los ingredientes',
      "It doesn't matter the order in which we enter our ingredients.":
        'No importa el orden en que ingresemos nuestros ingredientes.',
      'It is 100% at the discretion of the user how to categorize ingredients, so choose a category that makes the most sense to you.':
        'Es 100% a discreción del usuario cómo categorizar los ingredientes, así que elige una categoría que tenga más sentido para ti.',
      'It is a completed menu item that is ready to be added to a menu.':
        'Es un elemento del menú completado que está listo para ser agregado a un menú.',
      'It is perfectly acceptable to use all three methods, but only one pricing method will be in effect at any one time based on the order of precedence among them':
        'Es perfectamente aceptable usar los tres, pero solo un método de precios estará vigente en cualquier momento según el orden de precedencia entre ellos',
      'It is recommended that you check the checkbox upon filling out the Approximate Weights form for your ingredient.':
        'Se recomienda que marques la casilla de verificación al completar el formulario Pesos Aproximados para tu ingrediente.',
      'It is recommended that you write the description in the same way that you would want a customer to read it on a menu in order to convince the customer to place an order.':
        'Se recomienda que escribas la descripción de la misma manera que deseas que un cliente la lea en un menú para para convencerse y realizar un pedido.',
      'It is where you can enter the ingredients that make up the compound ingredient.':
        'Es donde puedes ingresar los ingredientes que componen el ingrediente compuesto.',
      "It isn't really any more complicated than that.": 'No es realmente más complicado que eso.',
      "It will continue to be free, but it's meant to allow you to try the features of":
        'Seguirá siendo gratis, pero está destinado a permitirte probar las características de',

      "It's quite simple": 'Es bastante simple',
      'Italian': 'Italiano',
      'items': 'artículos',
      'jar': 'frasco',
      'jars': 'frascos',
      'Japanese': 'Japonés',
      'Job Listings': 'Listado de trabajos',
      'Just create yourself an account and get started right away!':
        '¡Simplemente crea una cuenta y comienza de inmediato!',
      'just enter "extra virgin olive oil."': 'sólo ingresa "aceite de oliva extra virgen".',
      'just enter "extra virgin olive oil".': 'sólo ingresa "aceite de oliva extra virgen".',
      'Just entering "apples" would be too generic.': 'Sólo ingresar "manzanas" sería demasiado genérico.',
      'Just enter the name of the ingredient as you would normally, perhaps based on how you would write it out in a recipe.':
        'Simplemente ingresa el nombre del ingrediente como lo harías normalmente, tal vez basado en cómo lo escribirías en una receta.',
      'Just getting started?': '¿Recién estás comenzando?',
      "Just leave this field blank and we'll use a placeholder.": 'Simplemente deja este campo en blanco y usaremos un marcador de posición.',
      "Just like in real life, you may favor buying an ingredient at one place over another due to lower prices. If you buy milk at a wholesaler like Costco, for example, you'll probably pay less than if you bought milk at a local convenience store or a mini market at a gas station.":
        'Al igual que en la vida real, puedes preferir comprar un ingrediente en un lugar sobre otro debido a los precios más bajos. Si compras leche en un mayorista como Costco, por ejemplo, probablemente pagarás menos que si compras leche en una tienda de conveniencia local o en un mini mercado en una gasolinera.',
      'Just like the Brand/Manufacturer field, you may buy an ingredient from different places.':
        'Al igual que el campo Marca/Fabricante, puedes comprar un ingrediente en diferentes lugares.',
      "Just to repeat the point because it's that important:": 'Solo para repetir el punto porque es tan importante:',
      "Just to repeat the point because it's that important: you need to know the true cost of a dish before you can determine a profit margin.":
        'Solo para repetir el punto porque es tan importante: necesitas conocer el costo real de un plato antes de poder determinar un margen de ganancia.',
      'Kanban': 'Kanban',
      'Keep current calculated price': 'Mantener precio calculado actual',
      "Keep your data current regarding the cost of your ingredients and you'll be on top of how much a dish costs to produce.":
        'Mantén tus datos actualizados con respecto al costo de tus ingredientes y estarás al tanto de cuánto cuesta producir un plato.',
      'Ketchup': 'Catsup',
      'ketchup': 'catsup',
      'Keyboard, mouse, cup of coffee on a desk': 'Teclado, ratón, taza de café en un escritorio',
      'Keywords': 'Palabras Clave',
      'Keywords allow you to associate descriptive terms with your menu item.':
        'Las palabras clave te permiten asociar términos descriptivos con tu elemento del menú.',
      'Keywords are completely optional, but we recommend their use.':
        'Las palabras clave son completamente opcionales, pero recomendamos su uso.',
      'Keywords are optional, but highly recommended.': 'Las palabras clave son opcionales, pero muy recomendadas.',
      'Keywords cannot exceed 300 characters': 'Las palabras clave no pueden exceder los 300 caracteres',
      'Keywords must be at least 3 characters': 'Las palabras clave deben tener al menos 3 caracteres',
      'Keywords should be comma separated as shown in the following image:':
        'Las Palabras Clave deben estar separadas por comas como se muestra en la siguiente imagen:',
      'Kilogram': 'Kilogramo',
      'kilogram': 'kilogramo',
      'Kilograms': 'Kilogramos',
      'kilograms': 'kilogramos',
      'Korean': 'Coreano',
      'Kroger': 'Soriana',
      'Language changed': 'Se ha cambiado el idioma.',
      'Last Name': 'Apellido',
      'Last name': 'Apellido',
      'last name': 'apellido',
      'Last name is a required field': 'Apellido es un campo obligatorio',
      'Lastly': 'Por último',
      'lastly': 'por último',
      'Lastly, how many pounds was the sack/box/crate?': 'Por último, ¿cuántas libras pesaba el saco/caja/huacal?',
      'Lastly, how many kilograms was the sack/box/crate?':
        'Por último, ¿cuántos kilogramos pesaba el saco/caja/huacal?',
      'Lastly, how many ounces was the sack/box/crate?': 'Por último, ¿cuántas onzas pesaba el saco/caja/huacal?',
      'Lastly, how many grams was the sack/box/crate?': 'Por último, ¿cuántos gramos pesaba el saco/caja/huacal?',
      "Later, in the Pricing section of the form, you'll enter the price that you paid for a pound, kilogram, etc. of that ingredient.":
        'Más tarde, en la sección de Precios del formulario, ingresarás el precio que pagaste por una libra, kilogramo, etc. de ese ingrediente.',
      'Leave the field empty if no tax was applied.': 'Deja el campo vacío si no se aplicó ningún impuesto.',
      'leg of lamb': 'pierna de cordero',
      'Let Cocina Digital help you maximize the profits that you deserve.':
        'Deja que Cocina Digital te ayude a maximizar las ganancias que te mereces.',
      'Let Cocina Digital help you maximize the profits that you earned.':
        'Deja que Cocina Digital te ayude a maximizar las ganancias que has obtenido.',
      "Let's finish setting up your account": 'Terminemos de configurar tu cuenta',
      "Let's finish verifying your account": 'Terminemos de verificar tu cuenta',
      "Let's get started with our first section!": '¡Comencemos con nuestra primera sección!',
      "Let's get you onboarded.": 'Vamos a empezar.',
      "Let's get you onboarded!": '¡Vamos a empezar!',
      "Let's get you started.": 'Vamos a empezar.',
      "Let's get you started!": '¡Vamos a empezar!',
      "Let's get you going!": '¡Comencemos!',
      "Let's now enter this ingredient.": 'Ahora ingresemos este ingrediente.',
      "Let's say that we want to sell our own version of a basic cheeseburger.":
        'Digamos que queremos vender nuestra propia versión de una hamburguesa con queso básica.',
      "Let's see if we can break this down even further.": 'Veamos si podemos desglosar esto aún más.',
      'Lettuce': 'Lechuga',
      'Like some of the other fields in the Add/Edit Ingredient form, the use of Pending Review is optional and is provided as an easy to tag Ingredients that you may want to revisit later.':
        'Al igual que algunos de los otros campos en el formulario Agregar/Editar Ingrediente, el uso de Revisión Pendiente es opcional y se proporciona como una forma fácil de etiquetar los Ingredientes que quizás desees revisar más tarde.',
      'Likewise': 'Asimismo',
      'likewise': 'asimismo',
      'Link': 'Enlace',
      'link': 'enlace',
      'Liquid': 'Líquido',
      'List': 'Lista',
      'List Approximate Weights': 'Lista de Pesos Aproximados',
      'Liter': 'Litro',
      'Liters': 'Litros',
      'liter': 'litro',
      'liters': 'litros',
      'Loading...': 'Cargando...',
      'Log In': 'Iniciar Sesión',
      'Log in': 'Iniciar sesión',
      'Login': 'Acceso',
      'Logistics': 'Logística',
      'Logout': 'Cierre de Sesión',
      'Looks like you might have stepped away': 'Parece que te has alejado',
      'Mail': 'Correo',
      'Manage up to 2 menu items': 'Administra hasta 2 elementos del menú',
      'Manage up to 12 menu items': 'Administra hasta 12 elementos del menú',
      'Manage up to 15 menu items': 'Administra hasta 15 elementos del menú',
      'Manage up to 20 menu items': 'Administra hasta 20 elementos del menú',
      'Manage up to 40 menu items': 'Administra hasta 40 elementos del menú',
      'Manage up to 100 menu items': 'Administra hasta 100 elementos del menú',
      'Manage up to 150 menu items': 'Administra hasta 150 elementos del menú',
      'Manage your account settings, billing information, organizations, team, notifications, and security.':
        'Administra la configuración de tu cuenta, información de facturación, organizaciones, equipo, notificaciones y seguridad.',
      'Manage Your Newsletters': 'Gestiona tus Boletines',
      'Management': 'Gestión',
      'Many dishes that require sauces or dressings that accompany a main dish are especially difficult to price due to the number of ingredients that go into the sauce or dressing.':
        'Al igual me di cuenta que muchos platos que requieren salsas o aderezos como acompañamiento son especialmente difíciles de cotizar debido al gran numero de ingredientes contenidos.',
      'Many products are sold pre-packaged.': 'Muchos productos se venden pre-empacados.',
      'many products that come in liquid format (cooking oils, vinegars, ketchup, ranch dressing) are already weighed out and can only be bought in packaged formats.':
        'muchos productos que vienen en formato líquido (aceites de cocina, vinagres, ketchup, aderezo ranch) ya están pesados y sólo se pueden comprar en formatos empaquetados.',
      'Manufacturer': 'Fabricante',
      'manufacturer': 'fabricante',
      'Manufacturers': 'Fabricantes',
      'manufacturers': 'fabricantes',
      'Markup Percentage': 'Porcentaje de Sobreprecio',
      'Markup percentage': 'Porcentaje de sobreprecio',
      'markup percentage': 'porcentaje de sobreprecio',
      'Maximum file size': 'Tamaño máximo de archivo',
      'Mayonnaise': 'Mayonesa',
      'mayonnaise': 'mayonesa',
      'meaning that no markup is added to the calculated price of the combination platter.':
        'lo que significa que no se agrega ningún sobreprecio al precio calculado del plato combinado.',
      'Measurement provided by you or your organization': 'Medición proporcionada por ti o tu organización',
      'Measurement verified by Cocina Digital': 'Medición verificada por Cocina Digital',
      'Meat & Poultry': 'Carnes y Aves',
      'Meats, for example, are generally sold by weight, so you would use the Weight section.':
        'Las carnes, por ejemplo, generalmente se venden por peso, por lo que usarías la sección Peso.',
      "Member's Mark is a brand available at the wholesaler Sam's Club, so the vendor is Sam's Club.":
        "Member's Mark es una marca disponible en el mayorista Sam's Club, por lo que el vendedor es Sam's Club.",
      'Menu Item': 'Elemento del Menú',
      'menu item': 'elemento del menú',
      'Menu Item field': 'Campo Elemento del Menú',
      'Menu Item Limit Reached': 'Límite de Elementos del Menú Alcanzado',
      'Menu Item successfully saved!': '¡Elemento del Menú guardado exitosamente!',

      'Menu Items': 'Elementos del Menú',
      'Menu items': 'Elementos del menú',
      'Message': 'Mensaje',
      'Message is required': 'Mensaje es requerido',
      'Mexican Peso': 'Peso Mexicano',
      'Mexican Peso is now the default currency.': 'El Peso Mexicano es ahora la moneda predeterminada',
      'Mexico': 'México',
      'Milk, Creams, & Yogurt': 'Leche, Cremas y Yogur',
      'milliliter': 'mililitro',
      'milliliters': 'mililitros',
      'Milliliter': 'Mililitro',
      'Milliliters': 'Mililitros',
      'milliliter (ml)': 'mililitro (ml)',
      'Minute': 'Minuto',
      'minute': 'minuto',
      'Minutes': 'Minutos',
      'minutes': 'minutos',
      'Miscellaneous': 'Misceláneo',
      'mo': 'mes',
      'month': 'mes',
      'Most of the fields in the form are self-explanatory and just takes a few seconds to fill in.':
        'La mayoría de los campos del formulario son autoexplicativos y sólo toma unos segundos completarlos.',
      'must be a number': 'debe ser un número',
      'Must be a valid email': 'Debe ser un correo electrónico válido',
      'must be a value greater than 0': 'debe ser un valor mayor que 0',
      'must be at least 3 characters': 'debe tener al menos 3 caracteres',
      'Name': 'Nombre',
      'name': 'nombre',
      'Name of ingredient in': 'Nombre del ingrediente en',
      'Name of ingredient in English': 'Nombre del ingrediente en inglés',
      'Name of ingredient in French': 'Nombre del ingrediente en francés',
      'Name of ingredient in Italian': 'Nombre del ingrediente en italiano',
      'Name of ingredient in Spanish': 'Nombre del ingrediente en español',
      'Name of Ingredient in French must be at least 3 characters':
        'El nombre del ingrediente en francés debe tener al menos 3 caracteres',
      'Name of Ingredient in French cannot exceed 255 characters':
        'El nombre del ingrediente en francés no puede exceder los 255 caracteres',
      'Name of Ingredient in French is a required field':
        'El nombre del ingrediente en francés es un campo obligatorio',
      'Name of Ingredient in English must be at least 3 characters':
        'El nombre del ingrediente en inglés debe tener al menos 3 caracteres',
      'Name of Ingredient in English cannot exceed 255 characters':
        'El nombre del ingrediente en inglés no puede exceder los 255 caracteres',
      'Name of Ingredient in English is a required field':
        'El nombre del ingrediente en inglés es un campo obligatorio',
      'Name of Ingredient in Italian must be at least 3 characters':
        'El nombre del ingrediente en italiano debe tener al menos 3 caracteres',
      'Name of Ingredient in Italian cannot exceed 255 characters':
        'El nombre del ingrediente en italiano no puede exceder los 255 caracteres',
      'Name of Ingredient in Italian is a required field':
        'El nombre del ingrediente en italiano es un campo obligatorio',

      'Name of Ingredient in Spanish must be at least 3 characters':
        'El nombre del ingrediente en español debe tener al menos 3 caracteres',
      'Name of Ingredient in Spanish cannot exceed 255 characters':
        'El nombre del ingrediente en español no puede exceder los 255 caracteres',
      'Name of Ingredient in Spanish is a required field':
        'El nombre del ingrediente en español es un campo obligatorio',
      'Name of menu item': 'Nombre del elemento del menú',
      'Name of Menu Item': 'Nombre del Elemento del Menú',

      'Name of Vendor': 'Nombre del Vendedor',
      'Name of Vendor is a required field': 'Nombre del Vendedor es un campo obligatorio',

      'Navigate to the link for': 'Navega al enlace de',
      'Navigate to the Ingredients link in the left-hand menu.':
        'Navega al enlace de Ingredientes en el menú de la izquierda.',
      'Need Help?': '¿Necesitas ayuda?',
      'Need help figuring things out?': '¿Necesitas ayuda para resolver las cosas?',
      'Need the confirmation code again?': '¿Necesitas el código de confirmación nuevamente?',
      'Need to quickly calculate the food cost of a recipe?': '¿Necesitas calcular rápidamente el costo de un plato?',
      'New': 'Nuevo',
      'new': 'nuevo',
      'New Calculated Price:': 'Nuevo Precio Calculado:',
      'New Password': 'Nueva Contraseña',
      'New Password and Confirm New Password do not match':
        'Nueva Contraseña y Confirmar Nueva Contraseña no coinciden',
      'New Password and Current Password cannot be the same':
        'Nueva Contraseña y Contraseña Actual no pueden ser iguales',
      'New Password is required': 'Nueva Contraseña es requerida',
      'New York steak': 'bistec de Nueva York',
      'News, announcements, and product updates': 'Noticias, anuncios y actualizaciones de productos',
      'Newsletter': 'Boletín',
      'Newsletters': 'Boletines',
      "Newsletters Based on Your Interests and Goals": 'Boletines Basados en Tus Intereses y Objetivos',
      'Next': 'Siguiente',
      'next': 'siguiente',
      'No': 'No',
      'no': 'no',
      'No credit card required.': 'No se requiere tarjeta de crédito.',
      'No dedicated support': 'Sin soporte dedicado',
      'No filters applied': 'No se han aplicado filtros',
      'No more guessing!': '¡No más adivinanzas!',
      'No need to pull out a calculator.': 'No es necesario sacar una calculadora.',
      'No newsletters found': 'No se encontraron boletines',
      'No Spreadsheets': 'Sin Hojas de Cálculo',
      'No spreadsheets': 'Sin hojas de cálculo',
      'No Spreadsheets!': '¡Sin Hojas de Cálculo!',
      'No spreadsheets!': '¡Sin hojas de cálculo!',
      'No spreadsheets, no downloads, no headaches.': 'Sin hojas de cálculo, sin descargas, sin dolores de cabeza.',
      'No spreadsheets, no downloads, no more guessing what you should charge.':
        'Sin hojas de cálculo, sin descargas, sin más adivinanzas sobre lo que deberías cobrar.',
      'No transaction history': 'Sin historial de transacciones',
      'No, there is no description of a weight on the sack/box/crate':
        'No, no hay una descripción de un peso en el saco/caja/crate',
      'None': 'Ninguno',
      'none': 'ninguno',
      'not to run your business.': 'no para dirigir tu negocio.',
      'Notes/Description': 'Notas/Descripción',
      'Noodle': 'Fideo',
      'noodle': 'fideo',
      'Noodles': 'Fideos',
      'noodles': 'fideos',
      'Note': 'Nota',
      'note': 'nota',
      'Note that this will not affect the price of any Menu Items that use this compound ingredient.':
        'Ten en cuenta que esto no afectará el precio de ningún Elemento del Menú que use este ingrediente compuesto.',
      'Notes': 'Notas',
      'notes': 'notas',
      'Notes are optional.': 'Las notas son opcionales.',
      'Notice that in the above image, we used the Markup Percentage slider to increase the price of the Menu Item by 40%.':
        'Ten en cuenta que en la imagen anterior, usamos el control deslizante Porcentaje de Sobreprecio para aumentar el precio del Elemento del Menú en un 40%.',
      'Notice that the calculated price was automatically updated by the used of the markup.':
        'Ten en cuenta que el precio calculado se actualizó automáticamente por el uso del sobreprecio.',
      'Notice that the price has automatically been calculated based on the prices of the 2 Menu Items that have been added:':
        'Ten en cuenta que el precio se ha calculado automáticamente en función de los precios de los 2 Elementos del Menú que se han agregado:',
      'Notifications': 'Notificaciones',
      'Number of Pounds': 'Número de Libras',
      'number of pounds': 'número de libras',
      'Number of Kilograms': 'Número de Kilogramos',
      'number of kilograms': 'número de kilogramos',
      'Number of Ounces': 'Número de Onzas',
      'Number of Grams': 'Número de Gramos',
      "Numbers Format": 'Formato de Números',
      "Occasions such as Mother's Day, Valentine's Day, Thanksgiving, and Christmas are good examples of when you might want to use a Temporary Price for certain dishes, although you can use a temporary price for any reason.":
        'Ocasiones como el Día de la Madre, el Día de San Valentín, el Día de Acción de Gracias y la Navidad son buenos ejemplos de cuándo podrías querer usar un Precio Temporal para ciertos platos, aunque puedes usar un precio temporal por cualquier motivo.',
      'of': 'de',
      'of serving': 'de porción',
      'Offers the space for changing Menu Items that are based on seasonal ingredients.':
        'Ofrece el espacio para cambiar los Elementos del Menú que se basan en ingredientes de temporada.',
      'Often times, it feels more natural to specify ingredients in terms of quantities instead of exact weights.':
        'A menudo, se siente más natural especificar los ingredientes en términos de cantidades en lugar de pesos exactos.',
      'Oftentimes, you may wish to compare the price of an ingredient that you buy from one market to the price of the same ingredient that you buy from another market (or markets).': 'A menudo, puedes desear comparar el precio de un ingrediente que compras en un mercado con el precio del mismo ingrediente que compras en otro mercado (o mercados).',
      'Oils, Lard, & Shortners': 'Aceites, Manteca y Grasas',
      'Once the end date has passed for a Temporary Price, then the Fixed Price field will be used if it was filled in.':
        'Una vez que haya pasado la fecha de finalización de un Precio Temporal, entonces se usará el campo Precio Fijo si se completó.',
      'Once the end date of the Temporary Price has passed, the Fixed Price takes over':
        'Una vez que haya pasado la fecha de finalización del Precio Temporal, el Precio Fijo se hace cargo',
      'Once you find the Menu Item that you need, click the green Add button to add it to the list of Menu Items for your combination platter.':
        'Una vez que encuentres el Elemento del Menú que necesitas, haz clic en el botón verde Agregar para agregarlo a la lista de Elementos del Menú para tu plato combinado.',
      'Once you have those 3, then you can create the Menu Item that will be a combination platter containing those other items.':
        'Una vez que tengas esos 3, entonces puedes crear el Elemento del Menú que será un plato combinado que contiene esos otros artículos.',
      'One or more fields are invalid': 'Uno o más campos son inválidos',
      'One or more files are too large': 'Uno o más archivos son demasiado grandes',
      'One supplier may have an overabundance of an ingredient such as white onions and offers a discount, while another supplier is selling white onions at normal price.':
        'Un proveedor puede tener un exceso de un ingrediente como cebollas blancas y ofrece un descuento, mientras que otro proveedor está vendiendo cebollas blancas a precio normal.',
      'Once the end date of the Temporary Price has passed, then the Fixed Price of $35.99 will be used.':
        'Una vez que haya pasado la fecha de finalización del Precio Temporal, entonces se usará el Precio Fijo de $35.99.',
      'Once you have done that, then you can create the Menu Item that will be a combination platter containing those other items.':
        'Una vez que hayas hecho eso, entonces puedes crear el Elemento del Menú que será un plato combinado que contiene esos otros artículos.',
      'Onion': 'Cebolla',
      'onion': 'cebolla',
      'Onions': 'Cebollas',
      'onions': 'cebollas',
      'only accepts values greater than 0': 'solo acepta valores mayores que 0',
      'Only ingredients that you have already entered into Cocina Digital AND are marked as Active will be available for selection.':
        'Solo los ingredientes que ya has ingresado en Cocina Digital y están marcados como Activos estarán disponibles para su selección.',
      'Only menu items that you have already entered into Cocina Digital AND are marked as Active will be available for selection.':
        'Solo los elementos del menú que ya has ingresado en Cocina Digital y están marcados como Activos estarán disponibles para su selección.',
      'Only Menu Items with an "active" status are eligible to show up in your search.':
        'Solo los Elementos del Menú con un estado "activo" son elegibles para aparecer en tu búsqueda.',
      'Only positive numbers are allowed': 'Solo se permiten números positivos',
      'Open sidebar': 'Abrir menú de la barra lateral',
      'Option': 'Opción',
      'option': 'opción',
      'Optional': 'Opcional',
      'optional': 'opcional',
      "Optionally, I can also sell direct to consumers.": "Opcionalmente, también puedo vender directamente a los consumidores.",
      'or': 'o',
      'Or': 'O',
      'or 2 whole': 'o 2 enteros',
      'or a': 'o un',
      'Or does the package contain multiple containers of liquid?':
        '¿O el paquete contiene múltiples contenedores de líquido?',
      'Or that our package of fettuccine contains a pound of fettuccine.':
        'O que nuestro paquete de fettuccine contiene una libra de fettuccine.',
      'Orders': 'Pedidos',
      'Organization': 'Organización',
      'Organization Name': 'Nombre de la Organización',
      'Organization name updated': 'Nombre de la organización actualizado',
      'Organizations': 'Organizaciones',
      'Other': 'Otro',
      'Other ingredients, such as dried spices that are measured by volume rather than weight, would have their approximate weight be based on the weight in grams of a tablespoon of the ingredient.':
        'Otros ingredientes, como especias secas que se miden por volumen en lugar de por peso, tendrían su peso aproximado basado en el peso en gramos de una cucharada del ingrediente.',
      'Otherwise, answer': 'De lo contrario, responde',
      'Otherwise, the Calculated Price (and any markup over the Calculated Price) will be the price for the Menu Item.':
        'De lo contrario, el Precio Calculado (y cualquier sobreprecio sobre el Precio Calculado) será el precio del Elemento del Menú.',
      'Ounce': 'Onza',
      'ounce': 'onza',
      'Ounces': 'Onzas',
      'ounces': 'onzas',

      'Outside of these hours, your support request will be prioritized for the next business day.':
        'Fuera de este horario, tu solicitud de soporte será priorizada para el siguiente día hábil.',
      'Overview': 'Visión General',
      'Pacific timezone (PST/PDT).': 'Zona horaria del Pacífico (PST/PDT).',
      'Package': 'Paquete',
      'Package contains a count of individual units of the ingredient':
        'El paquete contiene un recuento de unidades individuales del ingrediente',
      'Package contains a fixed weight of the ingredient (similar to the box of fettuccine that contains 1 pound of dried fettuccine)':
        'El paquete contiene un peso fijo del ingrediente (similar a la caja de fettuccine que contiene 1 libra de fettuccine seco)',
      'Package contains multiple containers': 'El paquete contiene múltiples contenedores',
      'Pages': 'Páginas',
      "Part-Time Side Hustler": "Trabajador de Medio Tiempo",
      'Part Time Side Hustler': 'Trabajador de Medio Tiempo',
      'Part time side hustler': 'Trabajador de medio tiempo',
      'Password': 'Contraseña',
      'password': 'contraseña',
      'Password changed successfully': 'Contraseña cambiada exitosamente',
      'Password is required': 'Contraseña es requerida',
      'Password must be at least': 'La contraseña debe tener al menos',
      'Password must be at least 8 characters long': 'La contraseña debe tener al menos 8 caracteres',
      'Password Recovery': 'Recuperación de Contraseña',
      'Passwords must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.':
        'Las contraseñas deben tener al menos 8 caracteres y contener al menos 1 letra mayúscula, 1 letra minúscula, 1 número y 1 carácter especial.',
      'Passwords must match': 'Las contraseñas deben coincidir',
      'Pasta & Noodles': 'Pasta y Fideos',
      'Pending Review': 'Revisión Pendiente',
      'per': 'por',
      'per bundle / each': 'por manojo / cada uno',
      'Per Cup': 'Por Taza',
      'Per cup': 'por taza',
      'per cup': 'por taza',
      'per lb': 'por lb',
      'per kg': 'por kg',
      'per oz': 'por oz',
      'per gram': 'por gramo',
      'per month': 'por mes',
      'per package': 'por paquete',
      'Per Tablespoon': 'Por Cucharada',
      'per tablespoon': 'por cucharada',
      'Per tablespoon': 'Por cucharada',
      'Per tablespoon weight in grams': 'Peso por cucharada en gramos',
      'Per Unit': 'Por Unidad',
      'per unit': 'por unidad',
      'Per unit': 'Por unidad',
      'Per unit weight in grams': 'Peso por unidad en gramos',

      'Perfect for solo cooks who do it all themselves: buying their own ingredients, tracking expenses, and selling their food -- either part time or fulltime.':
        'Perfecto para cocineros solitarios que lo hacen todo ellos mismos: compran sus propios ingredientes, rastrean los gastos y venden su comida, ya sea de tiempo parcial o completo.',
      'Perhaps you simply want to run a promotion on a new dish on your menu, for example.':
        'Quizás simplemente quieras hacer una promoción en un nuevo plato de tu menú, por ejemplo.',
      'Personal': 'Personal',
      'personal': 'personal',
      'Phone Notifications': 'Notificaciones Telefónicas',
      'Phone notifications': 'Notificaciones telefónicas',
      'Pickles': 'Pepinillos',
      'pickles': 'pepinillos',
      'Pint': 'Pinta',
      'pint': 'pinta',
      'Pints': 'Pintas',
      'pints': 'pintas',
      'Plans': 'Planes',
      'plans': 'planes',
      'Platforms': 'Plataforma',
      'Please accept our sincerest apologies for the inconvenience that this is causing.':
        'Por favor, acepta nuestras más sinceras disculpas por las molestias que esto está causando.',
      'Please check your email for a code to confirm your sign up.':
        'Por favor, revisa tu correo electrónico para obtener un código para confirmar tu registro.',
      'Please check your email for instructions on how to finish signing up.':
        'Por favor, revisa tu correo electrónico para obtener instrucciones sobre cómo terminar el registro.',
      'Please do not navigate away from this page or close your browser.':
        'Por favor, no navegues lejos de esta página o cierres tu navegador.',
      'Please enter a quantity': 'Por favor ingresa una cantidad',
      'Please enter an estimated weight in grams': 'Por favor ingresa un peso estimado en gramos',
      'Please enter the confirmation code sent to the email address you used to sign up.':
        'Por favor ingresa el código de confirmación enviado al correo electrónico que usaste para registrarte.',
      'Please explain': 'Por favor explica',
      'Please logout and sign back in for your account to be updated':
        'Por favor, cierra la sesión y vuelve a iniciarla para que tu cuenta se actualice',
      'Please note that converting to a paid plan will end your Beta Tester status.':
        'Ten en cuenta que la conversión a un plan de pago finalizará tu estado de Beta Tester.',
      'Please note that cookies that are essential to the proper functioning of the site are required and cannot be disabled.':
        'Ten en cuenta que las cookies que son esenciales para el funcionamiento adecuado del sitio son requeridas y no se pueden desactivar.',
      'Please provide an estimate for the weight in grams of a single unit of':
        'Por favor proporciona un estimado para el peso en gramos de una sola unidad de',
      'Please provide an estimate for the weight in grams of a tablespoon of':
        'Por favor proporciona un estimado para el peso en gramos de una cucharada de',
      'Please select': 'Por favor selecciona',
      'Please select a reason': 'Por favor selecciona una razón',
      'Please select an option': 'Por favor selecciona una opción',
      'Please select an option or enter a country name in the field below':
        'Por favor selecciona una opción o ingresa un nombre de país en el campo de abajo',
      'Please select a Unit of Measure': 'Por favor selecciona una Unidad de Medida',
      "Please select one or more options that apply to you.": "Por favor selecciona una o más opciones que se apliquen a ti.",
      'Please try again': 'Por favor, inténtalo de nuevo',
      'Please try again.': 'Por favor, inténtalo de nuevo.',
      'Please wait while we process your subscription.': 'Por favor espera mientras procesamos tu suscripción.',
      'pork chop': 'chuleta de cerdo',
      'pork chops': 'chuletas de cerdo',
      'pork neck bones': 'huesos de cuello de cerdo',
      'Portion Size': 'Tamaño de Porción',
      'Portion Size is required': 'Tamaño de Porción es requerido',
      'Portion size is required': 'Tamaño de porción es requerido',
      'Portuguese': 'Portugués',
      'Post Create': 'Create articulo',
      'Post Details': 'Detalles del articulo',
      'Post List': 'Lista de articulos',
      'Potato': 'Papa',
      'potato': 'papa',
      'Potatoes': 'Papas',
      'potatoes': 'papas',
      'Pound': 'Libra',
      'pound': 'libra',
      'Pounds': 'Libras',
      'pounds': 'libras',
      'Preferences': 'Preferencias',
      'Previous': 'Anterior',
      'Price': 'Precio',
      'price': 'precio',
      'Price (Before Taxes)': 'Precio (antes de impuestos)',
      'Price (before taxes)': 'Precio (antes de impuestos)',
      'Price Change detected': 'Cambio de precio detectado',
      'Price Comparison': 'Comparación de Precios',
      'Price Last Verified': 'Precio Última Verificado',
      'Pricing': 'Precios',
      'Price per Bundle (Before Taxes)': 'Precio por manojo (antes de impuestos)',
      'Price per gram': 'Precio por gramo',
      'Price per kilogram': 'Precio por kilogramo',
      'Price per ounce': 'Precio por onza',
      'Price per pound': 'Precio por libra',
      'Price per Pound (Before Taxes)': 'Precio por libra (antes de impuestos)',
      'Price per Kilogram (Before Taxes)': 'Precio por kilogramo (antes de impuestos)',
      'Price per Ounce (Before Taxes)': 'Precio por onza (antes de impuestos)',
      'Price per Gram (Before Taxes)': 'Precio por gramo (antes de impuestos)',
      "Private Chef": "Chef Privado",
      'Pro Tip': 'Consejo Profesional',
      'Proceed': 'Continuar',
      'Product Updates': 'Actualizaciones de productos',
      'Product updates': 'Actualizaciones de productos',
      'Products': 'Productos',
      'Professional': 'Profesional',
      'professional': 'profesional',
      'PROFESSIONAL': 'PROFESIONAL',
      'Professional Chef': 'Chef Profesional',
      'Profile': 'Perfil',
      'Promotional code is required': 'El código promocional es requerido',
      'Public Profile': 'Perfil Público',
      'Put away your spreadsheets and calculators.': 'Guarda tus hojas de cálculo y calculadoras.',
      'qt': 'cuarto',
      'Quantity is required': 'Cantidad es requerida',
      'Quantity must be a number': 'Cantidad debe ser un número',
      'Quantity must be greater than 0': 'Cantidad debe ser mayor que 0',
      'Quart': 'Cuarto',
      'quart': 'cuarto',
      'Quarts': 'Cuartos',
      'quarts': 'cuartos',
      'Quantity': 'Cantidad',
      'quantity': 'cantidad',
      'Quantity of items per package': 'Cantidad de artículos por paquete',
      'quarter': 'cuarto',
      "Ready to begin? Let's take care of basic setup and get you started with Cocina Digital.": '¿Listo para comenzar? Vamos a encargarnos de la configuración básica y comenzar con Cocina Digital.',
      'Reason': 'Razón',
      'Recommended': 'Recomendado',
      'recommended': 'recomendado',
      'Redeem': 'Canjear',
      'Redeem it here:': 'Canjéalo aquí:',
      'Redirecting in': 'Redireccionando en',
      'Register': 'Registrarse',
      'Registration is free and takes just a minute. Cocina Digital tells you the actual cost of your dishes, so you can price your dishes for maximum profitability.':
        'El registro es gratuito. Cocina Digital te informa el costo real de tus platos, para que puedas fijar el precio de tus platos para maximizar la rentabilidad.',
      'Remember, a combination platter is a Menu Item that is composed of other Menu Items.':
        'Recuerda, un plato combinado es un Elemento del Menú que está compuesto de otros Elementos del Menú.',
      'Remember, a menu item is not a recipe.': 'Recuerda, un elemento del menú no es una receta.',
      'Remember, a Menu Item is set to "active" by checking the "This record is active" checkbox for that record as shown in the following image:':
        'Recuerda, un Elemento del Menú se establece como "activo" al marcar la casilla "Este registro está activo" para ese registro como se muestra en la siguiente imagen:',
      'Remove': 'Eliminar',
      'remove': 'eliminar',
      'Remove All': 'Eliminar Todo',
      'Remove all': 'Eliminar todo',
      'remove all': 'eliminar todo',
      'Repeat this process for as many ingredients as you need for your compound ingredient.':
        'Repite este proceso para tantos ingredientes como necesites para tu ingrediente compuesto.',
      'Repeat this process for as many ingredients as you need for your Menu Item.':
        'Repite este proceso para tantos ingredientes como necesites para tu Elemento del Menú.',
      'Repeat this process for each ingredient in your recipe.': 'Repite este proceso para cada ingrediente en tu receta.',
      'Request Support': 'Solicitar Soporte',
      'Request was successfully submitted': 'La solicitud se envió correctamente',
      'Resend code': 'Reenviar código',
      'Resend confirmation code': 'Reenviar código de confirmación',
      'Resend Confirmation Code': 'Reenviar Código de Confirmación',
      'Resend confirmation code to verify my email address':
        'Reenviar código de confirmación para verificar mi correo electrónico',
      'Resend email': 'Reenviar correo electrónico',
      'Resend email.': 'Reenviar correo electrónico.',
      'Resend Email': 'Reenviar Correo Electrónico',
      'Resend Email.': 'Reenviar Correo Electrónico.',

      'Reset': 'Reiniciar',
      'reset': 'reiniciar',
      'Reset your Cocina Digital password': 'Restablece tu contraseña de Cocina Digital',
      'Reset your password': 'Restablecer tu contraseña',
      'Response for support by email is a benefit of being a paid subscriber and is based on the plan you are subscribed to:':
        'La respuesta para soporte por correo electrónico es un beneficio de ser un suscriptor de pago y se basa en el plan al que estás suscrito:',
      'response based on support volume during normal business hours': 'respuesta basada en el volumen de soporte durante el horario laboral normal',
      'response within 8 hours Monday through Friday during normal business hours':
        'respuesta dentro de las 8 horas de lunes a viernes durante el horario laboral normal',
      'response within 24 hours Monday through Friday': 'respuesta dentro de las 24 horas de lunes a viernes',
      'response within 48 hours Monday through Friday': 'respuesta dentro de las 48 horas de lunes a viernes',
      'restaurant owners': 'dueños de restaurantes',
      'restaurateurs': 'restauradores',
      'Return to Dashboard': 'Volver al Tablero de Control',
      'ribeye steak': 'bistec de ribeye',
      'Running a food service business or restaurant? You need to be using a food cost calculator. Learn what a food cost calculator is, how it benefits your bottom line, and how it saves you time.':
        '¿Diriges un negocio de servicios de alimentos o un restaurante? Necesitas estar usando una calculadora de costo de alimentos. Aprende qué es una calculadora de costo de alimentos, cómo beneficia a tu resultado final y cómo te ahorra tiempo.',
      'sack': 'saco',
      'sack of flour': 'saco de harina',
      'sack of potatoes': 'saco de papas',
      'Sale price': 'Precio de venta',
      'salmon': 'salmón',
      'Sauces & Dressings': 'Salsas y Aderezos',
      'Save': 'Guardar',
      'save': 'guardar',
      'Saving': 'Guardando',
      'Scale': 'Escala',
      'school bake sales': 'ventas de pasteles escolares',
      'Search': 'Buscar',
      'Search by ingredient name or ID': 'Buscar por nombre de ingrediente o identificación',
      'Search for Other Menu Items': 'Buscar otros Elementos del Menú',
      'Seasonings & Spices': 'Condimentos y Especias',
      'Second': 'Segundo',
      'second': 'segundo',
      'Seconds': 'Segundos',
      'seconds': 'segundos',
      'Security': 'Seguridad',
      'Security Updates': 'Actualizaciones de seguridad',
      'Security updates': 'Actualizaciones de seguridad',
      'Select': 'Seleccionar',
      'select': 'selecciona',
      'Select all that apply.': 'Selecciona todas las opciones que correspondan.',
      'Select Another Image': 'Seleccionar Otra Imagen',

      'select another image': 'seleccionar otra imagen',
      'Select file': 'Seleccionar archivo',
      'select file': 'seleccionar archivo',
      'Select files': 'Seleccionar archivos',
      'select files': 'seleccionar archivos',
      'Select Image': 'Seleccionar Imagen',
      'select the': 'seleccionar el',
      "Select the format you prefer for dates.": "Selecciona el formato que prefieres para las fechas.",
      "Select the format you prefer for numbers: periods or commas for decimal separators.": "Selecciona el formato que prefieres para los números: puntos o comas para los separadores decimales.",
      'Select the option that most closely matches your ingredient or choose to enter your own estimate.':
        'Selecciona la opción que más se acerque a tu ingrediente o elige ingresar tu propia estimación.',
      'Selected unit of measure not applicable for this ingredient':
        'La unidad de medida seleccionada no es aplicable para este ingrediente',
      'Selecting "bundle" will require you to answer additional questions on whether you will add the fruit/vegetable to a Menu Item on a per unit basis or on a per volume basis.':
        'Seleccionar "manojo" te requerirá responder preguntas adicionales sobre si agregarás la fruta/verdura a un Elemento del Menú por unidad o por volumen.',
      "Sell Dishes": "Vender Platos",
      "Sell Ingredients": "Vender Ingredientes",
      'Set a password': 'Establecer una contraseña',
      'Set a temporary price': 'Establecer un precio temporal',
      'Set password': 'Establecer contraseña',
      'Settings': 'Configuración',
      'Shorteners, Pie Crusts, & Related': 'Cortadores, Corteza de Pastel y Relacionados',
      'Show groups': 'Mostrar grupos',
      'show groups': 'mostrar grupos',
      'Show less': 'Mostrar menos',
      'show less': 'mostrar menos',
      'Show more': 'Mostrar más',
      'show more': 'mostrar más',

      'shows a fixed weight': 'muestra un peso fijo',
      'shrimp': 'camarón',
      'Sign in': 'Iniciar sesión',
      'Sign in as a different user': 'Iniciar sesión como un usuario diferente',
      'Sign in instead': 'Iniciar sesión en su lugar',
      'Sign in to your Cocina Digital account': 'Inicia sesión en tu cuenta de Cocina Digital',
      'Sign Up': 'Registrarse',
      'Sign Up for Free!': '¡Regístrate gratis!',
      'Sign Up for Free': 'Regístrate gratis',
      'Sign up for free': 'Regístrate gratis',
      'Sign up for a free account and get started today!':
        '¡Regístrate para obtener una cuenta gratuita y comienza hoy!',
      'similar to a "dozen eggs per carton"': 'similar a "una docena de huevos por caja"',
      'Similarly, if you bought 3 heads of Romaine lettuce where you paid $1.50 per head, then enter 1.50 in the "Price (Before Taxes)" field.':
        'De manera similar, si compraste 3 cabezas de lechuga romana donde pagaste $1.50 por cabeza, entonces ingresa 1.50 en el campo "Precio (Antes de Impuestos)".',
      'Simply use the autocomplete field to find your ingredient, select it and then specify your quantity and unit of measure.': 
        'Simplemente usa el campo de autocompletar para encontrar tu ingrediente, selecciona y luego especifica tu cantidad y unidad de medida.',
      "Since entering many ingredients could result in a lot disorganization, we've created a field where you can select a category to which the ingredient would belong.":
        'Dado que ingresar muchos ingredientes podría generar mucha desorganización, hemos creado un campo donde puedes seleccionar una categoría a la que pertenecería el ingrediente.',

      'Skip': 'Omitir',
      'skip': 'omitir',

      'SKU': 'Referencia de Almacén',
      'So, how can we accomplish this in Cocina Digital?': 'Entonces, ¿cómo podemos lograr esto en Cocina Digital?',
      'So, I built Cocina Digital from the ground up to solve my own problems and in doing so, I believe that it will solve your food cost problems as well.':
        'Así que, construí Cocina Digital desde cero para resolver mis propios problemas y al hacerlo, creo que también resolverá tus problemas de costo de alimentos.',
      'So if you have a listing for both liter and quart, for example, just select one of the two options and we will do any conversions behind the scenes.':
        'Así que si tienes una lista para litro y cuarto, por ejemplo, solo selecciona una de las dos opciones y haremos cualquier conversión.',
      'If you have a listing for both ounces and grams, for example, just select one of the two options and we will do any conversions behind the scenes.':
        'Si tienes una lista para onzas y gramos, por ejemplo, solo selecciona una de las dos opciones y haremos cualquier conversión.',
      'Social Media': 'Redes sociales',
      'Some examples:': 'Algunos ejemplos:',
      'Some ingredients are sold by weight.': 'Algunos ingredientes se venden por peso.',
      'Some packages may list multiple units of measure such as both liter and quart or gallon and liter.':
        'Algunos paquetes pueden listar múltiples unidades de medida como litro y cuarto o galón y litro.',
      'Some packages may list multiple units of measure such as both ounces and grams.':
        'Algunos paquetes pueden listar múltiples unidades de medida como onzas y gramos.',
      'Some other examples:': 'Algunos otros ejemplos:',
      'Something like a tablespoon of dried oregano has an approximate weight of about 2 grams.':
        'Algo como una cucharada de orégano seco tiene un peso aproximado de alrededor de 2 gramos.',
      'Something went wrong!': '¡Algo salió mal!',
      'Sometimes, I ended up buying more supplies than I needed for food service at an event and ended up losing money.':
        'A veces, terminé comprando más suministros de los que necesitaba para el servicio de alimentos en un evento y el resultado fue la perdida de mi dinero.',
      'Sometimes, you need to note those approximate weights that require further review.':
        'A veces, necesitas anotar esos pesos aproximados que requieren una revisión más detallada.',
      'Sometimes, you need to note those ingredients that require further review.':
        'A veces, necesitas anotar esos ingredientes que requieren una revisión más detallada.',
      'Sounds simple enough': 'Suena bastante simple',
      'spaghetti': 'espagueti',
      'Spanish': 'Español',
      'Specify Portion Size': 'Especificar Tamaño de Porción',
      'Specify the markup that you wish to charge for the dish.':
        'Especifica el sobreprecio que deseas cobrar por el plato.',
      'Specify the portion of an ingredient that goes into a dish.':
        'Especifica la porción de un ingrediente que va en un plato.',
      'Specify the quantity of the ingredient you need in the compound ingredient.':
        'Especifica la cantidad del ingrediente que necesitas en el ingrediente compuesto.',
      'Specify the quantity of the ingredient you need in the Menu Item.':
        'Especifica la cantidad del ingrediente que necesitas en el Elemento del Menú.',
      'Specify the Unit of Measure of the ingredient.': 'Especifica la Unidad de Medida del ingrediente.',
      'stalk': 'tallo',
      'stalks': 'tallos',
      'stalk(s)': 'tallo(s)',
      'Standalone container': 'Contenedor independiente',
      'standalone container': 'contenedor independiente',
      'Start by selecting the weight type: pound, kilogram, ounce, or gram.':
        'Comienza seleccionando el tipo de peso: libra, kilogramo, onza o gramo.',
      'Start date must be before end date': 'La fecha de inicio debe ser anterior a la fecha de finalización',
      'Start Date of Temporary Price': 'Fecha de Inicio del Precio Temporal',
      'Start Over': 'Comenzar de Nuevo',
      'Start Tutorial': 'Iniciar Tutorial',
      'Start tutorial': 'Iniciar tutorial',
      'start tutorial': 'iniciar tutorial',
      'Start with a free plan. Upgrade to a paid plan for dedicated support and increased limits on the number of ingredients and menu items that you can manage.':
        'Comienza con un plan gratuito. Actualiza a un plan de pago para obtener soporte dedicado y límites aumentados en lo que puedes administrar.',
      "Start with Recipes": "Comenzar con Recetas",
      'Start Your Free Trial': 'Comienza Tu Prueba Gratuita',
      'Starter': 'Iniciador',
      'starter': 'iniciador',
      'STARTER': 'INICIADOR',
      "Starting Out Cook": "Cocinero Principiante",
      'Status': 'Estado',
      'stick(s)': 'tallo(s)',
      'stick (of butter)': 'barra (de mantequilla)',
      'Stock': 'Existencias',
      'stock': 'existencias',
      'Stocks & Broths': 'Caldo y Fondos',
      'Subject': 'Asunto',
      'Subject is required': 'Asunto es requerido',
      'Submit': 'Enviar',
      'Subscribe': 'Suscribirse',
      'subscribe': 'suscribirse',
      'Subscription Approved': 'Suscripción Aprobada',
      'Subscription Canceled': 'Suscripción Cancelada',
      'Successfully changed password': 'Contraseña cambiada exitosamente',
      'Successfully deleted approximate weight': 'Peso aproximado eliminado exitosamente',
      'Successfully deleted vendor': 'Vendedor eliminado exitosamente',
      'Successfully redeemed code': 'Código canjeado exitosamente',
      'Successfully submitted!': '¡Enviado exitosamente!',
      'such as a whole box or a sack of the fruit or vegetable': 'como una caja entera o un saco de la fruta o verdura',
      'such as buying a bundle of cilantro or Italian parsley, select':
        'como comprar un manojo de cilantro o perejil italiano, selecciona',
      "Suddenly, the modestly priced spreadsheet becomes a VERY expensive tool that can only be used on one device at a time since you can't easily copy your data from one device to another.":
        'De repente, la hoja de cálculo de precio moderado se convierte en una herramienta MUY costosa que solo se puede usar en un dispositivo a la vez, ya que no puedes copiar fácilmente tus datos de un dispositivo a otro.',
      'Sugar, Salt, Pepper, & Other Spices': 'Azúcar, Sal, Pimienta y Otras Especias',
      'Sugar, Salt, & Pepper': 'Azúcar, Sal y Pimienta',
      'sun-dried tomatoes': 'tomates secados al sol',
      'Support': 'Soporte',
      'Support by email with a response within 8 hours Monday through Friday during normal business hours':
        'Soporte por correo electrónico con una respuesta dentro de las 8 horas de lunes a viernes durante el horario comercial normal',
      'Support by email with a response within 24 hours Monday through Friday':
        'Soporte por correo electrónico con una respuesta dentro de las 24 horas de lunes a viernes',
      'Support by email with a response within 48 hours Monday through Friday':
        'Soporte por correo electrónico con una respuesta dentro de las 48 horas de lunes a viernes',
      'Sweets, Treats, & Snacks': 'Dulces, Golosinas y Bocadillos',
      'Synch Latest Prices': 'Sincronizar Últimos Precios',
      'Synch Latest Prices for Ingredients': 'Sincronizar Últimos Precios para Ingredientes',
      'T': 'C',
      't': 'c',
      'Tablespoon': 'Cucharada',
      'tablespoon': 'cucharada',
      'Tablespoon weight in grams': 'Peso de cucharada en gramos',
      'Tax Rate': 'Tasa de Impuesto',
      'Tax rate': 'Tasa de Impuesto',
      'Tax Rate must be a number': 'La Tasa de Impuesto debe ser un número',
      'Tax Rate only accepts values greater than 0': 'La Tasa de Impuesto solo acepta valores mayores que 0',
      'tbsp': 'cda',

      'Team': 'Equipo',
      'team': 'equipo',
      'Teaspoon': 'Cucharadita',
      'teaspoon': 'cucharadita',
      'Temporary Price': 'Precio Temporal',

      'Test Record': 'Registro de Prueba',
      'Test record': 'Registro de prueba',
      'test record': 'registro de prueba',

      'Thai': 'Tailandés',
      'Thank you for choosing to be a paid subscriber!': '¡Gracias por elegir ser un suscriptor de pago!',
      'Thank you for choosing to upgrade your subscription plan!':
        '¡Gracias por elegir actualizar tu plan de suscripción!',
      'Thank you for having considered Cocina Digital as part of your business.':
        'Gracias por haber considerado Cocina Digital como parte de tu negocio.',
      "That is how we'll do it in our example.": 'Así es como lo haremos en nuestro ejemplo.',
      "That said, don't feel that there is a right or wrong way to enter an ingredient under the Package tab or as Volume tab if your ingredient could qualify as either.":
        'Dicho esto, no sientas que hay una forma correcta o incorrecta de ingresar un ingrediente en la pestaña Paquete o como pestaña Volumen si tu ingrediente podría calificar como cualquiera de los dos.',
      'That said, which Ingredients should be entered in the Weight tab?':
        'Dicho esto, ¿qué Ingredientes deben ingresarse en la pestaña Peso?',
      'that we will discuss in a moment.': 'que discutiremos en un momento.',
      'The': 'El',
      'the': 'el',
      'The 3 Ways to Price Your Menu Item': 'Las 3 Formas de Precio para tu Elemento del Menú',
      'The Active section is what is used to indicate that your Menu Item is complete and could immediately be presented to a customer for use in placing an order.':
        'La sección Activo es la que se utiliza para indicar que tu Elemento del Menú está completo y podría presentarse inmediatamente a un cliente para su uso en la realización de un pedido.',
      'The Amount Produced field is where you enter the amount of the compound ingredient that the ingredients in the Calculated Price section will yield.':
        'El campo Cantidad Producida es donde ingresas la cantidad del ingrediente compuesto que los ingredientes en la sección Precio Calculado producirán.',
      'The answer is by using the Price Comparison Keywords field.': 'La respuesta es usando el campo Palabras Clave de Comparación de Precios.',
      'The base price of each Menu Item is what is used to calculate the price of the combination platter.':
        'El precio base de cada Elemento del Menú es lo que se utiliza para calcular el precio del plato combinado.',
      'The Basic Details section also includes a checkbox for':
        'La sección Detalles Básicos también incluye una casilla de verificación para',
      'The Basic Details section includes the Ingredient field, where you enter the name of the ingredient for which you are adding an approximate weight.':
        'La sección Detalles Básicos incluye el campo Ingrediente, donde ingresas el nombre del ingrediente para el cual estás agregando un peso aproximado.',
      "The Basic Details section also includes the Keywords field, where you can enter any keywords that you'd like to associate with the ingredient.":
        'La sección Detalles Básicos también incluye el campo Palabras Clave, donde puedes ingresar cualquier palabra clave que te gustaría asociar con el ingrediente.',
      'The Basic Details section includes the primary fields for the name of the ingredient, the place from which you bought it, and the date of when you checked the price that you are about to associate with the ingredient.':
        'La sección Detalles Básicos incluye los campos principales para el nombre del ingrediente, el lugar donde lo compraste y la fecha en que verificaste el precio que estás a punto de asociar con el ingrediente.',
      'The benefits, however, are well-worth the cost of a paid plan given dedicated support and the increased limits on the number of ingredients and menu items that you can manage.':
        'Los beneficios, sin embargo, valen la pena el costo de un plan de pago dado el soporte dedicado y los límites aumentados en la cantidad de ingredientes y elementos del menú que puedes administrar.',
      'The best way to try Cocina Digital at no cost to you.':
        'La mejor manera de probar Cocina Digital sin costo para ti.',
      "The brand is Member's Mark.": "La marca es Member's Mark.",

      'The brand name': 'El nombre de la marca',

      'The Brand/Manufacturer field is optional, but we encourage you to use it as you might be buying ingredients from different brands that differ in cost.':
        'El campo Marca/Fabricante es opcional, pero te recomendamos que lo uses ya que podrías estar comprando ingredientes de diferentes marcas que difieren en costo.',

      'The Brand/Manufacturer field is where you would enter the brand name of the ingredient.':
        'El campo Marca/Fabricante es donde ingresarías el nombre de la marca del ingrediente.',
      'The calculated price for the menu item will be automatically updated and displayed.':
        'El precio calculado para el elemento del menú se actualizará automáticamente y se mostrará.',
      'The Calculated Price in this case is the total cost of the ingredients that make up the compound ingredient.':
        'El Precio Calculado en este caso es el costo total de los ingredientes que componen el ingrediente compuesto.',
      'The Calculated Price section allows you to search for and include those ingredients that are used in your compound ingredient.':
        'La sección Precio Calculado te permite buscar e incluir aquellos ingredientes que se utilizan en tu ingrediente compuesto.',
      'The Calculated Price section allows you to search for and include those ingredients that are used in your menu item.':
        'La sección Precio Calculado te permite buscar e incluir aquellos ingredientes que se utilizan en tu elemento del menú.',
      'The Calculated Price section makes clear how much it is costing you to produce a single Menu Item based on the ingredients and quantity of ingredients that go into the dish.':
        'La sección Precio Calculado deja en claro cuánto te cuesta producir un solo Elemento del Menú en función de los ingredientes y la cantidad de ingredientes que van en el plato.',

      'The Calculated Price section is shown when the Compound Ingredient checkbox is selected.':
        'La sección Precio Calculado se muestra cuando se selecciona la casilla de verificación Ingrediente Compuesto.',

      'The Calculated Price will update automatically.': 'El Precio Calculado se actualizará automáticamente.',

      'The categories are fairly straightforward (meats, vegetables, pastas, and so on) and the category options are ordered by most frequently used rather than alphabetically.':
        'Las categorías son bastante sencillas (carnes, verduras, pastas, etc.) y las opciones de categoría están ordenadas por las más utilizadas en lugar de alfabéticamente.',

      'The Category selection allows for organizing ingredients into groups.':
        'La selección de Categoría permite organizar los ingredientes en grupos.',
      'The Category selection does not affect pricing nor the creation of Menu Items.':
        'La selección de Categoría no afecta el precio ni la creación de Elementos del Menú.',
      'The Cocina Digital Dashboard is where you manage your ingredients, menu items, approximate weights, and more.':
        'El Tablero de Control de Cocina Digital es donde administras tus ingredientes, elementos del menú, pesos aproximados y más.',
      'The code was already redeemed': 'El código ya fue canjeado',
      'The code was not found': 'El código no fue encontrado.',
      'The code you entered has expired.': 'El código que ingresaste ha expirado.',

      'The code you entered is incorrect.': 'El código que ingresaste es incorrecto.',
      'The Combo Calculated Price section allows you to search for and include other menu items that will then be used in your menu item combo.':
        'La sección Precio Calculado de Combo te permite buscar e incluir otros elementos del menú que luego se utilizarán en tu combinación de elementos del menú.',
      'The Combo Calculated Price section is where you select the other Menu Items that will be in your combination platter.':
        'La sección Precio Calculado de Combo es donde seleccionas los otros Elementos del Menú que estarán en tu plato combinado.',
      'The Combo Calculated Price section will be visible and the Calculated Price section will be hidden.':
        'La sección Precio Calculado de Combo será visible y la sección Precio Calculado estará oculta.',
      "The cost of ingredients go up and down, so it is important to keep track of the date of when you last checked the price of an ingredient. If it's been 6 months since you last checked the price of an ingredient that you use, you're most likely working with an outdated price.":
        'El costo de los ingredientes sube y baja, por lo que es importante realizar un seguimiento de la fecha en que verificaste por última vez el precio de un ingrediente. Si han pasado 6 meses desde la última vez que verificaste el precio de un ingrediente que usas, lo más probable es que estés trabajando con un precio desactualizado.',

      'The Compound Ingredient checkbox is used when you want to enter an ingredient that is made up of other ingredients.':
        'La casilla de verificación Ingrediente Compuesto se utiliza cuando deseas ingresar un ingrediente que está compuesto de otros ingredientes.',

      'The cost of your supplies changed?': '¿Tus suministros cambiaron de valor?',
      'The Currency field allows you to select the currency that was used when purchasing the ingredient.':
        'El campo Moneda te permite seleccionar la moneda que se utilizó al comprar el ingrediente.',
      'The Current Password is not correct': 'La Contraseña Actual no es correcta',
      'The Date Last Checked field represents the date of when you last verified the cost of the ingredient that you are entering.':
        'El campo Fecha de la Última Verificación representa la fecha en que verificaste por última vez el costo del ingrediente que estás ingresando.',
      'The default value for the Markup Percentage slider is 0%':
        'El valor predeterminado para el control deslizante Porcentaje de Sobreprecio es 0%',
      'The Delete button is used to permanently delete the Ingredient record and any images that may be associated with it.':
        'El botón Eliminar se utiliza para eliminar permanentemente el registro de Ingrediente y cualquier imagen que pueda estar asociada con él.',

      'The Description field allows you to enter any notes regarding the ingredient. It is an optional field.':
        'El campo Descripción te permite ingresar cualquier nota sobre el ingrediente. Es un campo opcional.',

      'The Description field can be used for miscellaneous comments or, if you wish, it is perfectly fine to leave it blank.':
        'El campo Descripción se puede utilizar para comentarios varios o, si lo deseas, está perfectamente bien dejarlo en blanco.',

      'The difference, however, is that the Volume tab is for ingredients that are sold in a container that is measured by volume.':
        'La diferencia, sin embargo, es que la pestaña Volumen es para ingredientes que se venden en un contenedor que se mide por volumen.',
      'The email address that you submitted is already confirmed.':
        'El correo electrónico que enviaste ya está confirmada.',
      'The field Brand/Manufacturer is optional, but useful if you buy a specific brand of an ingredient.':
        'El campo Marca/Fabricante es opcional, pero útil si compras una marca específica de un ingrediente.',
      'The field Date Last Checked is the date when you last checked the price for the ingredient that you are adding or editing.':
        'El campo Fecha de la Última Verificación es la fecha en que verificaste por última vez el precio del ingrediente que estás agregando o editando.',
      'The field Vendor is required and would be the name of the store or person from where you buy the ingredient.':
        'El campo Vendedor es requerido y sería el nombre de la tienda o persona de donde compras el ingrediente.',
      'The Fixed Pricing section is where you enter a fixed price for the Menu Item.':
        'La sección de Precios Fijos es donde ingresas un precio fijo para el Elemento del Menú.',

      'The following errors occurred:': 'Los siguientes errores ocurrieron:',
      'The following image shows that an ingredient is being associated to the "Fruits, Vegetables, & Fresh Herbs" category.':
        'La siguiente imagen muestra que un ingrediente se está asociando a la categoría "Frutas, Verduras y Hierbas Frescas".',
      'The following image shows that the ingredient "Fuji apple" is being added.':
        'La siguiente imagen muestra que se está agregando el ingrediente "manzana fuji".',
      'The following image shows the Combo Calculated Price section with 2 Menu Items added to the list of Menu Items for the combination platter.':
        'La siguiente imagen muestra la sección Precio Calculado de Combo con 2 Elementos del Menú agregados a la lista de Elementos del Menú para el plato combinado.',
      'The following image shows the Markup Percentage slider with a value of 33%.':
        'La siguiente imagen muestra el control deslizante Porcentaje de Sobreprecio con un valor de 33%.',
      'The following two fields will be included in your request and cannot be edited directly.':
        'Los siguientes dos campos se incluirán en tu solicitud y no se pueden editar directamente.',
      'The food cost manager that you can use on your phone, tablet, laptop, or desktop computer.':
        'El administrador de costo de alimentos que puedes usar en tu teléfono, tableta, computadora portátil o computadora de escritorio.',
      'The Ingredient field is where you would enter the name of the ingredient.':
        'El campo Ingrediente es donde ingresarías el nombre del ingrediente.',
      'The Keywords field allows you to associate terms with the ingredient by which users can search.':
        'El campo Palabras Clave te permite asociar términos con el ingrediente por los cuales los usuarios pueden buscar.',
      'The keywords must be the same for the ingredients that you wish to use in a price comparison.': 'Las palabras clave deben ser las mismas para los ingredientes que deseas usar en una comparación de precios.',
      'The keywords must be identical.': 'Las palabras clave deben ser idénticas.',
      'The Markup Percentage slider allows you to add a markup to the calculated price of the combination platter.':
        'El control deslizante Porcentaje de Sobreprecio te permite agregar un sobreprecio al precio calculado del plato combinado.',
      'The Menu Item you are viewing is currently in read-only mode because you have gone past the allowed number of Menu Items for your current plan.':
        'El Elemento del Menú que estás viendo está actualmente en modo de solo lectura porque has superado el número permitido de Elementos del Menú para tu plan actual.',
      'The Menu Items section is where you select the other Menu Items that will be in your Menu Item combination platter.':
        'La sección Elementos del Menú es donde seleccionas los otros Elementos del Menú que estarán en tu plato combinado de Elementos del Menú.',

      'The Menu Items section will be visible and the Calculated Price section will be hidden.':
        'La sección Elementos del Menú será visible y la sección Precio Calculado estará oculta.',
      'The name of the ingredient should be fairly generic and not include the brand/manufacturer, if any, of the ingredient.':
        'El nombre del ingrediente debe ser bastante genérico y no incluir la marca/fabricante, si corresponde, del ingrediente.',
      "the name that you give the dish is the name that you'll expect your customers to use when ordering from you.":
        'el nombre que le das al plato es el nombre que esperas que tus clientes usen cuando te pidan.',
      'The Notes section is optional and would be used if you have any comments or notes about the approximate weight record.':
        'La sección Notas es opcional y se utilizaría si tienes algún comentario o nota sobre el registro de peso aproximado.',
      'The Package tab is for ingredients that are sold in a container that is measured by a fixed weight or a fixed fluid amount.':
        'La pestaña Paquete es para ingredientes que se venden en un contenedor que se mide por un peso fijo o una cantidad de fluido fija.',
      'the packaged item is a liquid': 'el artículo envasado es un líquido',
      'the packaged item is not a liquid': 'el artículo envasado no es un líquido',
      'The Pending Review section is optional.': 'La sección Revisión Pendiente es opcional.',

      'The Portion Size dropdown menu allows you to select the quantity of the Menu Item that you are adding to your combination platter.':
        'El menú desplegable Tamaño de Porción te permite seleccionar la cantidad del Elemento del Menú que estás agregando a tu plato combinado.',
      'The portion sizes are not exact amounts, but rather, they are relative values such as 1/4, 1/2, and so on.':
        'Los tamaños de porción no son cantidades exactas, sino que son valores relativos como 1/4, 1/2, y así sucesivamente.',
      'The reason why the ingredient name is "Fuji apple" is because the ingredient is a specific type of apple and just saying "apple" would be too generic given the vast types of apples that exist.':
        'La razón por la que el nombre del ingrediente es "manzana fuji" es porque el ingrediente es un tipo específico de manzana y simplemente decir "manzana" sería demasiado genérico dado los vastos tipos de manzanas que existen.',
      'The Pricing section is where you would enter the price for an ingredient based on which option you had selected in the "Unit Sold By" section.':
        'La sección Precios es donde ingresarías el precio de un ingrediente en función de la opción que hayas seleccionado en la sección "Vendido en Unidades de".',
      'The purpose of using a food cost calculator is to remove the guesswork of pricing a dish and help establish a baseline food cost to then add a profit margin.':
        'El propósito de usar una calculadora de costo de alimentos es eliminar la suposición de fijar un precio a un plato y ayudar a establecer un costo de alimentos base para luego agregar un margen de beneficio.',
      'The Tax Rate field is optional.': 'El campo Tasa de Impuesto es opcional.',
      'The Temporary Price field is where you enter a specific price for a Menu Item that is based on defined start and end dates.':
        'El campo Precio Temporal es donde ingresas un precio específico para un Elemento del Menú que se basa en fechas de inicio y finalización definidas.',
      'The Temporary Pricing section is where you enter a temporary price for the Menu Item.':
        'La sección Precios Temporales es donde ingresas un precio temporal para el Elemento del Menú.',
      'The "This Record is Active" indicates whether the approximate weight is ready for use.':
        'El "Este Registro Está Activo" indica si el peso aproximado está listo para su uso.',
      'The Unit of Measure field is where you enter the unit of measure for the yield.':
        'El campo Unidad de Medida es donde ingresas la unidad de medida para el rendimiento.',
      'The "Unit Sold By" section is used to categorize how an ingredient is sold.':
        'La sección "Vendido en Unidades de" se utiliza para categorizar cómo se vende un ingrediente.',
      'The Unit Sold By section is represented by 4 tabs that you can click on:':
        'La sección Unidad Vendida Por está representada por 4 pestañas en las que puedes hacer clic:',
      'The Unit Sold By section is where you specify how you purchase (or purchased) an ingredient.':
        'La sección Unidad Vendida Por es donde especificas cómo compras (o compraste) un ingrediente.',

      'The use of Pending Review is optional and is provided as an easy way to tag an approximate weight record that you may want to revisit later.':
        'El uso de Revisión Pendiente es opcional y se proporciona como una forma fácil de etiquetar un registro de peso aproximado que es posible que desees revisar más tarde.',
      'The Volume tab is moderately similar to the Package tab.':
        'La pestaña Volumen es moderadamente similar a la pestaña Paquete.',
      'The vendor associated with this ingredient was previously deleted.': 'El vendedor asociado con este ingrediente fue eliminado previamente.',
      'The Vendor field is where you would enter the name of the place from which you bought the ingredient.':
        'El campo Vendedor es donde ingresarías el nombre del lugar desde el que compraste el ingrediente.',
      'The Yield is the amount of the compound ingredient that is produced by using the values entered into the Calculated Price section.':
        'El Rendimiento es la cantidad del ingrediente compuesto que se produce utilizando los valores ingresados en la sección Precio Calculado.',
      'The Yield section contains 2 fields:': 'La sección Rendimiento contiene 2 campos:',
      'The Yield section is shown when the Compound Ingredient checkbox is selected.':
        'La sección Rendimiento se muestra cuando se selecciona la casilla de verificación Ingrediente Compuesto.',
      "Then, when you create your combination platter, you'll be able to select the Menu Items that you've already created.":
        'Entonces, cuando crees tu plato combinado, podrás seleccionar los Elementos del Menú que ya has creado.',
      'then answer': 'entonces responde',
      'Then do the same when entering the ribeye steak from Best Value Meat Supplier.': 'Luego haz lo mismo al ingresar el bistec de ribeye de Best Value Meat Supplier.',
      'then enter the generic ingredient name': 'entonces ingresa el nombre genérico del ingrediente',
      'then the brand is': 'entonces la marca es',
      'There was an error updating your newsletter preferences. Please try again.': 'Hubo un error al actualizar tus preferencias de boletín. Por favor intenta de nuevo.',
      "There's no need to read a manual or watch countless YouTube videos to figure something out.": 'No es necesario leer un manual o ver innumerables videos de YouTube para descubrir algo.',
      'They are usually only set in response to actions made by you which amount to remembering your settings, a request for services, such as setting your privacy preferences, logging in, or filling in forms.':
        'Generalmente solo se establecen en respuesta a acciones realizadas por ti que equivalen a recordar tus ajustes, una solicitud de servicios, como configurar tus preferencias de privacidad, iniciar sesión o completar formularios.',
      'They will serve the purpose of helping customers find your menu items when they search for terms such as "chicken parmesan" or "steak" or "fried chicken," as examples.':
        'Servirán para ayudar a los clientes a encontrar tus elementos del menú cuando busquen términos como "pollo parmesano" o "filete" o "pollo frito", como ejemplos.',
      'These are just examples.': 'Estos son solo ejemplos.',
      'There are no Approximate Weights that match your search criteria.':
        'No hay Pesos Aproximados que coincidan con tus criterios de búsqueda.',
      'There are no Ingredients that match your search criteria.':
        'No hay Ingredientes que coincidan con tus criterios de búsqueda.',
      'There are no Menu Items that match your search criteria.':
        'No hay Elementos del Menú que coincidan con tus criterios de búsqueda.',
      'There was a problem with trying to switch your subscription plan.':
        'Hubo un problema al intentar cambiar tu plan de suscripción.',
      'This applies to professionals ranging from the part-time home cook selling cupcakes on the side, to a full scale Michelin-starred restaurant.':
        'Esto se aplica a profesionales que van desde el cocinero casero a tiempo parcial que vende cupcakes en el lado, hasta un restaurante de estrella Michelin a gran escala.',
      'This account has not been confirmed. Please check your email for a confirmation code.':
        'Esta cuenta no ha sido confirmada. Por favor revisa tu correo electrónico para obtener un código de confirmación.',
      'This account was previously confirmed': 'Esta cuenta fue confirmada previamente',
      'This action cannot be reversed.': 'Esta acción no se puede deshacer.',
      'This allows you to apply one markup against the calculated price of the combination platter instead of managing the markup of each menu item in the combination platter.':
        'Esto te permite aplicar un sobreprecio contra el precio calculado del plato combinado en lugar de administrar el sobreprecio de cada elemento del menú en el plato combinado.',
      'This assumes, of course, that you have already entered the ingredient before now using it as part of your compound ingredient.':
        'Esto asume, por supuesto, que ya has ingresado el ingrediente antes de usarlo ahora como parte de tu ingrediente compuesto.',
      'This compound ingredient has the latest prices for ingredients.':
        'Este ingrediente compuesto tiene los últimos precios para ingredientes.',
      'This could be the name of an actual store (a supermarket, for example), but can just as well be a website such as Amazon.com if you bought the ingredient online.':
        'Este podría ser el nombre de una tienda real (un supermercado, por ejemplo), pero también puede ser un sitio web como Amazon.com si compraste el ingrediente en línea.',
      'This could be the case if you are buying a head of lettuce, for example, or a bundle of cilantro.':
        'Este podría ser el caso si estás comprando una cabeza de lechuga, por ejemplo, o un manojo de cilantro.',
      'This email is already registered': 'Este correo electrónico ya está registrado',
      'This email is already registered, but has not been confirmed by code': 'Este correo electrónico ya está registrado, pero no ha sido confirmado por código',
      'This Entry is Pending Review': 'Esta entrada está pendiente de revisión',
      'This field is optional, but recommended, as the keywords are used in the search functionality of the application.':
        'Este campo es opcional, pero recomendado, ya que las palabras clave se utilizan en la funcionalidad de búsqueda de la aplicación.',
      'This functionality is available to you with temporary pricing.':
        'Esta funcionalidad está disponible para ti con precios temporales.',
      'This increases the likelihood that the ingredient will be found when searching for it regardless of when searching for "apple" or "apples," for example.':
        'Esto aumenta la probabilidad de que se encuentre el ingrediente cuando se busca, independientemente de cuándo se busque "manzana" o "manzanas", por ejemplo.',
      'This is a': 'Este es un',
      'This is a Compound Ingredient': 'Este es un Ingrediente Compuesto',
      'This is a free plan': 'Este es un plan gratuito',
      'This is an area where an online-based food cost calculator will outperform a standalone spreadsheet:':
        'Esta es un área donde una calculadora de costo de alimentos basada en línea superará a una hoja de cálculo independiente:',
      'This is common when adding minced garlic, diced onions or tomatoes, or other fruits or vegetables that are routinely cut into smaller pieces before being used in a recipe.':
        'Esto es común cuando se agrega ajo picado, cebolla o tomates en cubitos, u otras frutas o verduras que se cortan rutinariamente en trozos más pequeños antes de ser utilizados en una receta.',
      'This is common when adding salt or other dried spices and is also common when adding sauces to a dish.':
        'Esto es común cuando se agrega sal u otras especias secas y también es común cuando se agregan salsas a un plato.',
      'This is critical and cannot be overstated.': 'Esto es crítico y no puede ser exagerado.',
      'This is helpful if you wish to then search for all Menu Items that use the same keyword.':
        'Esto es útil si deseas buscar todos los Elementos del Menú que utilizan la misma palabra clave.',
      'This is no cause for alarm, but you will need to answer yes to one or both questions to allow Cocina Digital to do work behind-the-scenes on how to determine costs for the ingredient when you add it to a Menu Item.':
        'Esto no es motivo de alarma, pero deberás responder sí a una o ambas preguntas para permitir que Cocina Digital realice un trabajo entre bastidores sobre cómo determinar los costos del ingrediente cuando lo agregues a un Elemento del Menú.',
      'This is so you have an opportunity to fill in all fields and/or upload any images associated with your dish before deciding to go live.':
        'Esto es para que tengas la oportunidad de completar todos los campos y/o subir cualquier imagen asociada con tu plato antes de decidir estar en vivo.',
      "This is the currency that will be used by default when calculating and listing prices.": 'Esta es la moneda que se utilizará de forma predeterminada al calcular y listar precios.',
      'This is the most accurate way to price your Menu Item':
        'Esta es la forma más precisa de fijar el precio de tu Elemento del Menú',
      "This is the most common date format in the United States.": 'Este es el formato de fecha más común en los Estados Unidos.',
      "This is the most common date format in the world.": 'Este es el formato de fecha más común en el mundo.',
      'This is useful if you want to set a certain price for a limited time as would be the case with promotional items on your menu.':
        'Esto es útil si deseas establecer un precio determinado por un tiempo limitado, como sería el caso de los artículos promocionales en tu menú.',
      'This is your current login username and cannot be changed.':
        'Este es tu nombre de usuario actual y no se puede cambiar.',
      'This is your current plan': 'Este es tu plan actual',
      'This may take from 1 to 5 minutes.': 'Esto puede tardar de 1 a 5 minutos.',
      'This menu item is a combination platter': 'Este elemento del menú es un plato combinado',
      'This might be the case if you always buy a certain brand of extra virgin olive oil, for example.':
        'Este podría ser el caso si siempre compras una marca determinada de aceite de oliva extra virgen, por ejemplo.',
      'This possibly happened because you were on a paid plan with a greater limit of Menu Items and either canceled that plan and/or downgraded to plan with less capacity, or if you were on a temporary privileged plan, based on having redeemed a code, and your enrollment in that plan has since expired.':
        'Esto posiblemente sucedió porque estabas en un plan pago con un límite mayor de elementos del menú y cancelaste ese plan y/o bajaste a un plan con menos capacidad, o si estabas en un plan privilegiado temporal, basado en haber canjeado un código, y tu inscripción en ese plan ya expiró.',
      'This record is active': 'Este registro está activo',
      'This Record is Active': 'Este Registro Está Activo',
      'This search feature is not yet available, but planned for a release in the near future.':
        'Esta función de búsqueda aún no está disponible, pero está planeada para su lanzamiento en un futuro próximo.',
      "This way, you'll know exactly what to do when you get to each field.":
        'De esta manera, sabrás exactamente qué hacer cuando llegues a cada campo.',
      'This will allow you to continue creating your approximate weight, but will also make it easier to filter for those approximate weights that are pending review so you may return to them later.':
        'Esto te permitirá continuar creando tu peso aproximado, pero también facilitará el filtrado de aquellos pesos aproximados que están pendientes de revisión para que puedas regresar a ellos más tarde.',
      'This will allow you to continue creating your ingredient, but will also make it easier to filter for those Ingredients that are pending review so you may return to them later.':
        'Esto te permitirá continuar creando tu ingrediente, pero también facilitará el filtrado de aquellos Ingredientes que están pendientes de revisión para que puedas regresar a ellos más tarde.',
      'This would be the case if buying a bottle of olive oil, for example.':
        'Este sería el caso si compras una botella de aceite de oliva, por ejemplo.',
      'This would generally apply to meats, poultry, and seafood.':
        'Esto generalmente se aplica a carnes, aves de corral y mariscos.',
      'through your machine': 'a través de tu máquina',
      'Time is money as they say, so why waste yours?': 'El tiempo es oro como dicen, ¿por qué desperdiciar el tuyo?',
      'To': 'A',
      'To add a keyword, enter the keyword in the Keywords field and then press Enter key to save it.':
        'Para agregar una palabra clave, ingresa la palabra clave en el campo Palabras Clave y luego presiona la tecla Enter para guardarla.',
      'To add a markup, simply move the slider to the right to increase the markup percentage up to 400%.':
        'Para agregar un sobreprecio, simplemente mueve el control deslizante hacia la derecha para aumentar el porcentaje de sobreprecio hasta un 400%.',
      'To add a price comparison keyword, enter the keyword in the Keywords field and then press the Enter (Return) key to save it.': 'Para agregar una palabra clave de comparación de precios, ingresa la palabra clave en el campo Palabras Clave y luego presiona la tecla Enter para guardarla.',
      "To avoid any issues, we have disabled the currency selection for now since you decided to provide a country name.": 'Para evitar cualquier problema, hemos deshabilitado la selección de moneda por ahora ya que decidiste proporcionar un nombre de país.',
      'To avoid this, you must manually synchronize the latest prices of the ingredients that make up a compound ingredient and accept the prices if they have changed.':
        'Para evitar esto, debes sincronizar manualmente los últimos precios de los ingredientes que componen un ingrediente compuesto y aceptar los precios si han cambiado.',
      'To begin searching for other menu items that you need to build your combination platter, click in the Menu Item field of the Combo Calculated Price section.':
        'Para comenzar a buscar otros elementos del menú que necesitas para construir tu plato combinado, haz clic en el campo Elemento del Menú de la sección Precio Calculado de Combo.',
      'To change the currency for existing records, edit each record individually.':
        'Para cambiar la moneda de los registros existentes, edita cada registro individualmente.',
      'To confirm, please type': 'Para confirmar, por favor escribe',
      "To delete a keyword, simply click the X icon that appears in the keyword's box.":
        'Para eliminar una palabra clave, simplemente haz clic en el icono X que aparece en el cuadro de la palabra clave.',
      'To further clarify, if this ingredient is used in any recipe for a menu item that calls for, as an example, a fraction of a unit of this ingredient (e.g. 1/2 of an onion) or 2 whole potatoes or 3 eggs, then answer':
        'Para aclarar aún más, si este ingrediente se utiliza en cualquier receta para un elemento del menú que requiere, como ejemplo, una fracción de una unidad de este ingrediente (por ejemplo, 1/2 cebolla) o 2 papas enteras o 3 huevos, entonces responde',
      'To further clarify, if this ingredient is used in any recipe for a Menu Item that calls for, as an example, a fraction of a unit of this ingredient (e.g. 1/2 of an onion) or 2 whole potatoes or 3 eggs, then answer': 'Para aclarar aún más, si este ingrediente se utiliza en cualquier receta para un Elemento del Menú que requiere, como ejemplo, una fracción de una unidad de este ingrediente (por ejemplo, 1/2 cebolla) o 2 papas enteras o 3 huevos, entonces responde',
      "To help you visualize it, here's a picture of a cheeseburger:":
        'Para ayudarte a visualizarlo, aquí hay una imagen de una hamburguesa con queso:',
      'To keep things simple, we created a dedicated tab for fruits and vegetables, which, unsurprisingly, is called the Fruits & Vegetables tab.':
        'Para mantener las cosas simples, creamos una pestaña dedicada para frutas y verduras, que, como era de esperar, se llama pestaña Frutas & Verduras.',
      'To keep your data secure, you will be automatically logged out in:':
        'Para mantener tus datos seguros, se cerrará la sesión automáticamente en:',
      'To make a menu item record active, check the box next to "This record is active".':
        'Para activar un registro de elemento del menú, marca la casilla junto a "Este registro está activo".',
      'To make an ingredient record active, check the box next to "This Record is Active".':
        'Para activar un registro de ingrediente, marca la casilla junto a "Este Registro Está Activo".',
      'To make it even easier, the form is broken up into sections to group similar items.':
        'Para hacerlo aún más fácil, el formulario se divide en secciones para agrupar elementos similares.',
      'to this question': 'a esta pregunta',
      'to this question.': 'a esta pregunta.',
      'To update the price of a Menu Item, you must edit the Menu Item directly and accept any price changes based on ingredients used in the dish.':
        'Para actualizar el precio de un Elemento del Menú, debes editar el Elemento del Menú directamente y aceptar cualquier cambio de precio según los ingredientes utilizados en el platillo.',
      'To use: type a keyword and either press the enter key or the comma key on your keyboard.':
        'Para usar: escribe una palabra clave y presiona la tecla Enter o la tecla de coma en tu teclado.',
      'To view the Combo Calculated Price section, check the checkbox "This menu item is a combination platter" in the Combo section of the form.':
        'Para ver la sección Precio Calculado de Combo, marca la casilla "Este elemento del menú es un plato combinado" en la sección Combo del formulario.',
      'To view the Menu Items section, check the checkbox':
        'Para ver la sección Elementos del Menú, marca la casilla de verificación',
      'Today': 'Hoy',
      'today': 'hoy',
      'Tomato': 'Tomate (Jitomate)',
      'Too many failed attempts. Please try again later.':
        'Demasiados intentos fallidos. Por favor, inténtalo de nuevo más tarde.',
      "Too often, I simply guessed what I had spent to come up with a dish and either was charging too much and couldn't attract customers or charging too little and couldn't make a profit.":
        'Con demasiada frecuencia, simplemente adivinaba lo que había gastado para crear un plato y cobraba demasiado y no pude atraer clientes o cobraba muy poco y no pude obtener ganancias.',
      'Transaction Date': 'Fecha de Transacción',
      'transaction date': 'fecha de transacción',
      'TRANSACTION DATE': 'FECHA DE TRANSACCIÓN',
      'Trying to mentally tally up the cost of the 20 dishes based on updated costs of ingredients can take minutes or hours to accomplish, is error prone, and completely unnecessary.':
        'Intentar sumar mentalmente el costo de los 20 platos basado en los costos actualizados de los ingredientes puede llevar minutos u horas para lograrlo, es propenso a errores y completamente innecesario.',
      'tsp': 'cdta',
      'Tutorials are also listed in our Help Center.': 'Los tutoriales también se enumeran en nuestro Centro de Ayuda.',
      'U.S.': 'EE. UU.',
      'U.S. Dollar': 'Dólar Estadounidense',
      'U.S. Dollar is now the default currency.': 'El Dólar Estadounidense es ahora la moneda predeterminada.',
      'Unable to figure something out?': '¿No puedes resolver algo?',
      'Unit of Measure': 'Unidad de Medida',
      'Unit of measure': 'Unidad de medida',
      'unit of measure': 'unidad de medida',
      'Unit of Measure is a required field': 'Unidad de Medida es un campo requerido',
      'Unit of Measure is not valid': 'Unidad de Medida no es válida',
      'Unit Sold As': 'Vendido en Unidades de',
      'Unit Sold By': 'Vendido en Unidades de',
      'United States': 'Estados Unidos',
      'Units': 'Unidades',
      "Unless you are growing your own hens, you'll generally buy eggs in a package where a package may contain a dozen eggs.":
        'A menos que cultives tus propias gallinas, generalmente comprarás huevos en un paquete donde un paquete puede contener una docena de huevos.',
      'update': 'actualizar',
      'Update': 'Actualizar',
      'Upgrade Plan': 'Actualizar Plan',
      'Upgrade to a paid plan that allows for the number of Menu Items that you currently have.':
        'Actualiza a un plan de pago que permita la cantidad de Elementos del Menú que tienes actualmente.',

      'Upgrade to Business Plan': 'Actualizar a Plan de Negocio',
      'Upgrade to Professional Plan': 'Actualizar a Plan Profesional',
      'Upload': 'Subir',
      'upload': 'subir',
      'Upload any images associated with this ingredient. This is optional, but useful for identifying ingredients visually when creating a Menu Item.':
        'Sube cualquier imagen asociada con este ingrediente. Esto es opcional, pero útil para identificar visualmente los ingredientes al crear un Elemento del Menú.',
      'Upload any images associated with this menu item. This is optional.':
        'Sube cualquier imagen asociada con este elemento del menú. Esto es opcional.',
      'Uploading images are optional.': 'Subir imágenes es opcional.',
      'Upgrade to Business': 'Actualizar a Negocio',
      'Upgrade to Starter': 'Actualizar a Iniciador',
      'Upgrade to Professional': 'Actualizar a Profesional',
      'Upon confirmation from PayPal, you will be immediately switched to the new plan:':
        'Una vez confirmado por PayPal, se cambiará inmediatamente al nuevo plan:',
      'Upon confirmation from PayPal, you will be immediately upgraded to the new plan:':
        'Una vez confirmado por PayPal, se actualizará inmediatamente al nuevo plan:',
      'Use it to enter the tax rate that was applied, if any, to the ingredient when you purchased it.':
        'Úsalo para ingresar la tasa de impuesto que se aplicó, si corresponde, al ingrediente cuando lo compraste.',
      'Use the Images section to upload images related to the Menu Item that you are designing.':
        'Utiliza la sección Imágenes para subir imágenes relacionadas con el Elemento del Menú que estás diseñando.',
      'Use the Keywords field to associate any keywords with the Menu Item.':
        'Utiliza el campo Palabras Clave para asociar cualquier palabra clave con el Elemento del Menú.',
      'Use the Markup Percentage slider to increase or decrease the price of the Menu Item.':
        'Utiliza el control deslizante Porcentaje de Recargo para aumentar o disminuir el precio del Elemento del Menú.',
      'Use the Quantity and the Unit of Measure fields to specify how much of the ingredient will be used in your compound ingredient.':
        'Utiliza los campos Cantidad y Unidad de Medida para especificar cuánto del ingrediente se utilizará en tu ingrediente compuesto.',
      'Use the Quantity and the Unit of Measure fields to specify how much of the ingredient will be used in your menu item.':
        'Utiliza los campos Cantidad y Unidad de Medida para especificar cuánto del ingrediente se utilizará en tu elemento del menú.',
      'Use the sliders above (Scale & Image Rotation) to zoom in and out or to rotate your image.':
        'Utiliza los controles deslizantes de arriba (Escala y Rotación de Imagen) para acercar y alejar o para rotar tu imagen.',

      'Use the Status section to indicate whether the approximate weight is active or inactive.':
        'Utiliza la sección Estado para indicar si el peso aproximado está activo o inactivo.',
      'Use the Status section to indicate whether the ingredient is active or inactive.':
        'Utiliza la sección Estado para indicar si el ingrediente está activo o inactivo.',
      'Use the Status section to indicate whether the menu item is active or inactive.':
        'Utiliza la sección Estado para indicar si el elemento del menú está activo o inactivo.',
      'Use the Unit of Measure field to specify how much of the menu item should be used upon being added to the combo.':
        'Utiliza el campo Unidad de Medida para especificar cuánto del elemento del menú se debe utilizar al agregarlo a la combinación.',
      'Use the "Weight in grams per tablespoon" field if you wish to enter the approximate weight of a tablespoon of an ingredient.':
        'Utiliza el campo "Peso en gramos por cucharada" si deseas ingresar el peso aproximado de una cucharada de un ingrediente.',
      'Use the "Weight in grams per unit" field if you wish to enter the approximate weight of an ingredient in its entirety.':
        'Utiliza el campo "Peso en gramos por unidad" si deseas ingresar el peso aproximado de un ingrediente en su totalidad.',
      'Useful if you plan to sell your dish and need to add a profit margin.': 'Útil si planeas vender tu plato y necesitas agregar un margen de beneficio.',
      'User already confirmed': 'Usuario ya confirmado',
      'User does not exist': 'El usuario no existe',
      'User profile updated': 'Perfil de usuario actualizado',
      'User profile updated!': '¡Perfil de usuario actualizado!',
      'Username': 'Nombre del Usuario',
      'username': 'nombre de usuario',
      'Users with laptops': 'Usuarios con computadoras portátiles',
      'Using now': 'Usando ahora',
      'Using our egg example, we would say that our package of eggs contains 12 individual eggs.':
        'Usando nuestro ejemplo de huevo, diríamos que nuestro paquete de huevos contiene 12 huevos individuales.',
      'Using our ribeye steak example, you could enter the keyword "ribeye steak" in the Keywords field for that ingredient record that is associated to the first vendor, which is ABC Meat Market in our example.': 'Usando nuestro ejemplo de bistec de ribeye, podrías ingresar la palabra clave "bistec de ribeye" en el campo Palabras Clave para ese registro de ingrediente que está asociado al primer vendedor, que es ABC Meat Market en nuestro ejemplo.',
      'Using temporary price': 'Usando precio temporal',
      'vegetable': 'verdura',
      'Vegetables': 'Verduras',
      'Vendor': 'Vendedor',
      'vendor': 'vendedor',
      'Vendor field requires attention': 'El campo Vendedor requiere atención',
      'Vendor is a required field': 'Vendedor es un campo requerido',
      'Vendor List Table': 'Tabla de Lista de Vendedores',
      'Vendors': 'Vendedores',
      'vendors': 'vendedores',
      'Vietnamese': 'Vietnamita',
      'View': 'Ver',
      'View all available plans': 'Ver todos los planes disponibles',
      'View all plan details': 'Ver todos los detalles del plan',
      'View all Subscription Plans': 'Ver todos los Planes de Suscripción',
      'View Existing Ingredients': 'Ver Ingredientes Existentes',
      'View Existing Menu Items': 'Ver Elementos del Menú Existentes',
      'View Your Existing Approximate Weights': 'Ver Tus Pesos Aproximados Existentes',
      'View Plans': 'Ver Planes',
      'view plans': 'ver planes',
      'Viewable on smart phones, tablets, laptops, and desktops':
        'Visible en teléfonos inteligentes, tabletas, computadoras portátiles y computadoras de escritorio',
      'Vinegar': 'Vinagre',
      'vinegar': 'vinagre',
      'Volume': 'Volumen',
      'volume': 'volumen',
      'Want to apply a markup of 10% or 30% to a dish?': '¿Quieres aplicar un recargo del 10% o 30% a un plato?',
      'was the': 'fue el',
      'We appreciate you reviewing Cocina Digital and providing feedback on your experience by directly contacting us at':
        'Agradecemos que revises Cocina Digital y nos brindes comentarios sobre tu experiencia contactándonos directamente en',
      'We are 100% online and available to you on any device with an Internet connection.':
        'Estamos 100% en línea y siempre disponibles para ti en cualquier dispositivo con conexión a Internet.',
      'We are aware that at some vendors, meats are also sold in packages, but we suggest entering meats in the Weight tab.':
        'Somos conscientes de que en algunos vendedores, las carnes también se venden en paquetes, pero sugerimos ingresar las carnes en la pestaña Peso.',
      'We are privileged to serve you.': 'Tenemos el privilegio de servirte.',
      'We call those "unit" purchases and the option to choose in the Fruits & Vegetables tab is "bundle".':
        'Llamamos a esas compras "unidad" y la opción a elegir en la pestaña Frutas & Verduras es "manojo".',
      'We can enter them in any order we want.': 'Podemos ingresarlos en el orden que queramos.',
      'We can see that we paid $3.28 per pound.': 'Podemos ver que pagamos $3.28 por libra.',
      'We cannot refund once you purchased a subscription, but you can always':
        'No se podrá realizar un reembolso una vez adquirida una suscripción, la cancelación se puede realizar siempre',
      'We cover a lot of ingredients, but we cannot guarantee coverage of every ingredient known to man.':
        'Cubrimos muchos ingredientes, pero no podemos garantizar la cobertura de cada ingrediente conocido por el hombre.',
      "We encourage you to look at our how-to articles, but if you want to jump right in, begin by adding your first Ingredient.": 'Te animamos a que veas nuestros artículos de cómo hacerlo, pero si deseas comenzar de inmediato, comienza agregando tu primer Ingrediente.',
      'We found approximate weights (in grams) for a single quantity of':
        'Encontramos pesos aproximados (en gramos) para una sola cantidad de',
      'We found approximate weights (in grams) for a single unit of':
        'Encontramos pesos aproximados (en gramos) para una sola unidad de',
      'We found approximate weights (in grams) for a tablespoon of':
        'Encontramos pesos aproximados (en gramos) para una cucharada de',

      'We found estimated weights (in grams) for a single quantity of':
        'Encontramos pesos estimados (en gramos) para una sola cantidad de',
      'We found estimated weights (in grams) for a single unit of':
        'Encontramos pesos estimados (en gramos) para una sola unidad de',
      'We found estimated weights (in grams) for a tablespoon of':
        'Encontramos pesos estimados (en gramos) para una cucharada de',
      "We have saved your selections to give you the best user experience while using Cocina Digital.": 'Hemos guardado tus selecciones para brindarte la mejor experiencia de usuario mientras usas Cocina Digital.',
      'We hope you are enjoying your experience with Cocina Digital and if you are ready to upgrade to a paid plan, of course we invite you to do so.':
        'Esperamos que estés disfrutando de tu experiencia con Cocina Digital y si estás listo para actualizar a un plan de pago, por supuesto te invitamos a hacerlo.',
      "We hope you'll return in the future.": 'Esperamos que regreses en el futuro.',
      "We know that there may be situations where you could go either way, so if you choose the Volume tab, we've tried to accommodate you by allowing you to work with either a fixed weight or an unknown weight.":
        'Sabemos que puede haber situaciones en las que puedas ir en cualquier dirección, por lo que si eliges la pestaña Volumen, hemos tratado de acomodarte permitiéndote trabajar con un peso fijo o un peso desconocido.',
      "We present you with some paths that you can follow to get started.": 'Te presentamos algunos caminos que puedes seguir para comenzar.',
      'We recommend at least a tablet for the best viewing experience, and a laptop or larger screen for the best editing experience.':
        'Recomendamos al menos una tableta para obtener la mejor experiencia de visualización y una computadora portátil o una pantalla más grande para obtener la mejor experiencia de edición.',
      'We recommend that you answer yes to both questions for the greatest flexibility when designing your menu items and determining costs.':
        'Recomendamos que respondas sí a ambas preguntas para obtener la mayor flexibilidad al diseñar tus elementos del menú y determinar los costos.',
      'We use cookies on our site': 'Usamos cookies en nuestro sitio',
      'We use cookies to enable you to use our site, understand how you use our site, and improve your overall experience.':
        'Usamos cookies para permitirte usar nuestro sitio, comprender cómo usas nuestro sitio y mejorar tu experiencia general.',
      "We'll discuss the": 'Discutiremos el',
      "We'll discuss the Fruits & Vegetables tab in a moment.":
        'Discutiremos la pestaña Frutas & Verduras en un momento.',
      "We'll quickly go over each tab and look at some examples.":
        'Repasaremos rápidamente cada pestaña y veremos algunos ejemplos.',
      "We'll need to create a new ingredient record for each of the following:":
        'Necesitaremos crear un nuevo registro de ingrediente para cada uno de los siguientes:',
      "We'll progress through each field of each section starting at the top.":
        'Progresaremos a través de cada campo de cada sección comenzando desde la parte superior.',
      "We've disabled the currency selection because you've entered a country name": 'Hemos deshabilitado la selección de moneda porque has ingresado un nombre de país',
      "We've got the right plan for you": 'Tenemos el plan adecuado para ti',
      'Weight': 'Peso',
      'weight': 'peso',
      'Weight in grams per tablespoon': 'Peso en gramos por cucharada',
      'Weight in grams per unit': 'Peso en gramos por unidad',
      'Weight / Measurement has not been verified': 'Peso / Medida no ha sido verificado',
      'Welcome!': '¡Bienvenido!',
      "Welcome! Let's get you started": '¡Bienvenido! Vamos a comenzar',
      "Welcome! Let's Get You Started": '¡Bienvenido! Vamos a Comenzar',
      'Welcome to': 'Bienvenido a',
      'Welcome to Cocina Digital!': '¡Bienvenido a Cocina Digital!',
      'Well, why not?': 'Bueno, ¿por qué no?',
      'What best describes you?': '¿Qué te describe mejor?',
      'What do I do now?': '¿Qué hago ahora?',
      'What exactly do we mean by that?': '¿Qué queremos decir exactamente con eso?',
      'What is a Food Cost Calculator?': '¿Qué es una Calculadora de Costos de Alimentos?',
      'What is Cocina Digital?': '¿Qué es Cocina Digital?',
      'What is the fixed weight?': '¿Cuál es el peso fijo?',
      'What is the unit of measure?': '¿Cuál es la unidad de medida?',
      'What is the unit of measure for each of the containers in the package?':
        '¿Cuál es la unidad de medida para cada uno de los contenedores en el paquete?',
      'What next?': '¿Qué sigue?',
      'What type of weight are we talking about?': '¿De qué tipo de peso estamos hablando?',
      'When calculating the price of your compound ingredient, the current price of any of the ingredients used is the price that is applied.':
        'Al calcular el precio de tu ingrediente compuesto, el precio actual de cualquiera de los ingredientes utilizados es el precio que se aplica.',
      'When I started turning my passion for cooking into a small business, I realized that it was more complicated than I thought it would be to calculate how much money I had spent on supplies to create a single dish.':
        'Cuando comencé a convertir mi pasión por la cocina en un pequeño negocio, me di cuenta de que era más complicado de lo que pensaba calcular cuánto dinero había gastado en suministros para crear un solo plato.',
      'When in doubt, you can select the last option, which is “Miscellaneous,” but do make an effort to select the most sensible category when possible.':
        'Cuando tengas dudas, puedes seleccionar la última opción, que es "Misceláneo", pero haz un esfuerzo por seleccionar la categoría más sensata cuando sea posible.',
      'When satisfied with the image size and rotation, click the "Crop" button to crop your image.':
        'Cuando estés satisfecho con el tamaño y la rotación de la imagen, haz clic en el botón "Recortar" para recortar tu imagen.',
      'When the checkbox "Set a temporary price" is checked, as shown in the following image, the fields for the start and end date for the temporary price are made available.':
        'Cuando se marca la casilla "Establecer un precio temporal", como se muestra en la siguiente imagen, los campos para la fecha de inicio y finalización del precio temporal están disponibles.',
      'When the checkbox for "This Entry is Pending Review" is selected, a dropdown menu to specify a reason will be made visible. Select a reason that applies to your situation or select "Other" if you have a unique case.':
        'Cuando se selecciona la casilla de verificación "Esta entrada está pendiente de revisión", se hará visible un menú desplegable para especificar un motivo. Selecciona un motivo que se aplique a tu situación o selecciona "Otro" si tienes un caso único.',
      'When this checkbox is selected, some fields in the form are hidden, while other fields are shown that will then allow a user to enter data related to a compound ingredient.':
        'Cuando esta casilla está seleccionada, algunos campos del formulario están ocultos, mientras que otros campos se muestran que luego permitirán a un usuario ingresar datos relacionados con un ingrediente compuesto.',
      'When used, Fixed Pricing takes precedence over any pricing that is calculated based on the ingredients that are added to the menu item (the Calculated Price).':
        'Cuando se usa, los Precios Fijos tienen prioridad sobre cualquier precio que se calcule en función de los ingredientes que se agregan al elemento del menú (el Precio Calculado).',
      'When you check this checkbox, the section for selecting Ingredients later in the form will change to a selection field for choosing the other Menu Items that will be in your Menu Item combination platter.':
        'Cuando marques esta casilla, la sección para seleccionar Ingredientes más adelante en el formulario cambiará a un campo de selección para elegir los otros Elementos del Menú que estarán en tu plato combinado de Elementos del Menú.',
      'When you check this checkbox, the section for selecting Ingredients later in the form will instead change to a selection field for choosing the other Menu Items that will be in your Menu Item combination platter.':
        'Cuando marques esta casilla, la sección para seleccionar Ingredientes más adelante en el formulario cambiará a un campo de selección para elegir los otros Elementos del Menú que estarán en tu plato combinado de Elementos del Menú.',
      'When you select the checkbox for Combo, additional fields are shown in the form.':
        'Cuando seleccionas la casilla de verificación para Combo, se muestran campos adicionales en el formulario.',
      "Where should you start?": '¿Dónde deberías comenzar?',
      'Whether you sell one menu item or 100,000 menu items, the performance and reliability of the food cost calculator should not go down as the number of dishes goes up.':
        'Ya sea que vendas un elemento del menú o 100,000 elementos del menú, el rendimiento y la confiabilidad de la calculadora de costos de alimentos no deberían disminuir a medida que aumenta el número de platos.',
      'which are other types of apples': 'que son otros tipos de manzanas',
      'Who Should Use a Food Cost Calculator?': '¿Quién Debería Usar una Calculadora de Costos de Alimentos?',
      'whole serving': 'porción entera',
      'Why?': '¿Por qué?',
      'Why a cheeseburger?': '¿Por qué una hamburguesa con queso?',
      '"Why is it Fuji apple? What happened to being generic?"':
        '"¿Por qué es manzana Fuji? ¿Qué pasó con ser genérico?"',
      'Why is this button disabled?': '¿Por qué este botón está deshabilitado?',
      'will accept most any name that you enter into the Ingredient field.':
        'aceptará casi cualquier nombre que ingreses en el campo Ingrediente.',
      '"Why would we want to know what the weight is of a tablespoon of an ingredient?"':
        '"¿Por qué querríamos saber cuál es el peso de una cucharada de un ingrediente?"',
      'With Cocina Digital, there are no spreadsheets.': 'Con Cocina Digital, no hay hojas de cálculo.',
      'With the Combo Calculated Price section viewable, you can search for the other Menu Items that you need to build your combination platter.':
        'Con la sección Precio Calculado de la Combinación visible, puedes buscar los otros Elementos del Menú que necesitas para construir tu plato combinado.',
      'With the Menu Items section viewable, you can search for the other Menu Items that you need to build your combination platter.':
        'Con la sección Elementos del Menú visible, puedes buscar los otros Elementos del Menú que necesitas para construir tu plato combinado.',

      'Without a food cost calculator, determining the cost of a dish is just guesswork and likely to be wrong.':
        'Sin una calculadora de costos de alimentos, determinar el costo de un plato es solo una conjetura y probablemente esté equivocado.',
      'Would you add a teaspoon, tablespoon, or cup of this ingredient to a recipe?':
        '¿Agregarías una cucharadita, cucharada o taza de este ingrediente a una receta?',
      'would you add a teaspoon, tablespoon, or cup of this ingredient to a recipe?':
        '¿agregarías una cucharadita, cucharada o taza de este ingrediente a una receta?',
      'Write something': 'Escribe algo',
      'write something': 'escribe algo',
      'Yes': 'Sí',
      'yes': 'sí',
      'Yes, the items are containers': 'Sí, los artículos son contenedores',
      'Yesterday': 'Ayer',
      'yesterday': 'ayer',
      'Yield': 'Rendimiento',
      'yield': 'rendimiento',
      "You're subscribed to Cocina Digital, so now let's make you the hero of food cost management that we know you can be!": 'Estás suscrito a Cocina Digital, ¡así que ahora hagámos que seas el héroe de la gestión de costos de alimentos que sabemos que puedes ser!',
      'You are currently enrolled as a Beta Tester': 'Actualmente estás inscrito como Beta Tester',
      'You are currently on the': 'Actualmente estás en el plan de',

      'You are not restricted to just entering the grade of the ingredient.':
        'No estás restringido a ingresar solo la calidad del ingrediente.',
      "You are now onboarded!": '¡Ahora estás configurado!',
      "You are now subscribed to Cocina Digital! Let's turn you into the hero of food cost management!": '¡Ahora estás suscrito a Cocina Digital! ¡Vamos a convertirte en el héroe de la gestión de costos de alimentos!',
      'You can also adjust the markup percentage to see how it affects the final price.': 
        'También puedes ajustar el porcentaje de recargo para ver cómo afecta el precio final.',
      'You can always change this later in your account settings.': 'Siempre puedes cambiar esto más tarde en la configuración de tu cuenta.',
      'You can delete menu items to stay below the Beta Tester limit':
        'Puedes eliminar elementos del menú para permanecer por debajo del límite de Beta Tester',
      "You can delete menu items to stay below your plan's limit":
        'Puedes eliminar elementos del menú para permanecer por debajo del límite de tu plan',

      'You can name your Menu Item anything that you like': 'Puedes nombrar tu Elemento del Menú como quieras',

      "You can name your Menu Item anything that you like, but ideally, the name that you give the dish is the name that you'll expect your customers to use when ordering from you.":
        'Puedes nombrar tu Elemento del Menú como quieras, pero idealmente, el nombre que le des al plato es el nombre que esperarás que tus clientes usen cuando te pidan.',
      'You can set your browser to block or alert you about these cookies.':
        'Puedes configurar tu navegador para bloquear o alertarte sobre estas cookies.',
      'You can upload one or multiple images at a time.': 'Puedes subir una o varias imágenes a la vez.',
      'You can upgrade and downgrade whenever you want': 'El plan puede ser modificado en cualquier momento',

      'You can upgrade your plan to have a higher limit': 'Puedes actualizar tu plan para tener un límite más alto',

      'You can use it to enter information such as the grade of the ingredient, for example.':
        'Puedes usarlo para ingresar información como la calidad del ingrediente, por ejemplo.',
      "You can view and download all your previous invoices here. If you've just made a payment, it may take a few hours for it to appear in the table below.":
        'Puede ver y descargar todas sus facturas anteriores aquí. Si acaba de realizar un pago, puede tardar unas horas en aparecer en la tabla siguiente.',
      'You canceled your subscription': 'Has cancelado tu suscripción',
      'You deserve better and your customers need you focused on other aspects of your kitchen or business.':
        'Te mereces algo mejor y tus clientes necesitan que te enfoques en otros aspectos de tu cocina o negocio.',

      'You do not need to select more than one unit of measure.':
        'No es necesario seleccionar más de una unidad de medida.',
      'You do that in the': 'Lo haces en el',
      'You do that in the Ingredients Add/Edit form.': 'Lo haces en el formulario Agregar/Editar Ingredientes.',
      'You have exceeded the limit of attempts to reset your password. Please try again later.':
        'Has excedido el límite de intentos para restablecer tu contraseña. Por favor, inténtalo de nuevo más tarde.',
      'You have reached the maximum number of Menu Items that you can create as a Beta Tester.':
        'Has alcanzado el número máximo de Elementos del Menú que puedes crear como Beta Tester.',
      'You have reached the maximum number of Menu Items that you can create under your current plan.':
        'Has alcanzado el número máximo de Elementos del Menú que puedes crear en tu plan actual.',

      "You invest a lot of your time and money into your business, so don't try to save a few bucks by managing the cost of your ingredients on a trial plan.":
        'Inviertes mucho de tu tiempo y dinero en tu negocio, así que no intentes ahorrar unos pocos dólares administrando el costo de tus ingredientes en un plan de prueba.',
      'You may cancel your subscription at any time.': 'Puedes cancelar tu suscripción en cualquier momento.',
      'You may click the Close button below to close this window.':
        'Puedes hacer clic en el botón Cerrar a continuación para cerrar esta ventana.',
      "You may have bought 10 pounds of chicken breasts, but you shouldn't enter the price you paid for all 10 pounds of chicken breasts.":
        'Puede que hayas comprado 10 libras de pechugas de pollo, pero no debes ingresar el precio que pagaste por las 10 libras de pechugas de pollo.',
      "You now have the power of Cocina Digital at your fingertips and we can't wait to see how you use it.":
        'Ahora tienes el poder de Cocina Digital al alcance de tu mano y estamos ansiosos por ver cómo lo usas.',

      'You may now put Cocina Digital to work for you.': 'Ahora puedes poner a Cocina Digital a trabajar para ti.',
      'you might ask.': 'te preguntarás.',
      'you might be wondering.': 'te preguntarás.',
      'You need to add at least one ingredient in order to use the Food Cost Calculator.': 'Necesitas agregar al menos un ingrediente para poder usar la Calculadora de Costos de Alimentos.',
      'you need to know the true cost of a dish before you can determine a profit margin.':
        'necesitas conocer el costo real de un plato antes de poder determinar un margen de beneficio.',
      'You will be billed at the new price starting at the time of your next billing period:':
        'Se te facturará al nuevo precio a partir de la hora de tu próximo período de facturación:',
      'You will continue to have full access to your plan until the end of the current billing period.':
        'Seguirás teniendo acceso completo a tu plan hasta el final del período de facturación actual.',
      'You will continue to have full access to your subscription plan until the end of the current billing period.':
        'Seguirás teniendo acceso completo a tu plan de suscripción hasta el final del período de facturación actual.',
      'You will have access to your plan until the end of your current billing period.':
        'Tendrás acceso a tu plan hasta el final de tu período de facturación actual.',
      'Your account has been successfully confirmed': 'Tu cuenta ha sido confirmada con éxito',
      'Your answer to the questions allows Cocina Digital to determine the cost per portion of an ingredient as they are used in a Menu Item.':
        'Tu respuesta a las preguntas permite a Cocina Digital determinar el costo por porción de un ingrediente a medida que se utilizan en un Elemento del Menú.',
      'Your decision helps us to continue to improve our service, pay the staff, and cover the expenses for the site.':
        'Tu decisión nos ayuda a continuar mejorando nuestro servicio, pagar al personal y cubrir los gastos del sitio.',
      'Your email address was successfully verified.': 'Tu correo electrónico se verificó correctamente.',

      'Your Message': 'Tu Mensaje',
      'Your Organizations': 'Tus Organizaciones',
      'Your password was previously reset. Please check your email for a confirmation code.':
        'Tu contraseña fue restablecida anteriormente. Por favor revisa tu correo electrónico para obtener un código de confirmación.',
      'Your plan has been successfully changed!': '¡Tu plan se ha cambiado con éxito!',
      'You work hard to run your business.': 'Trabajas duro para dirigir tu negocio.',
      'You work hard to run your business. We work hard to make it easier.':
        'Trabajas duro para dirigir tu negocio. Trabajamos duro para facilitarlo.',
      "You've been automatically logged out due to inactivity":
        'Has sido desconectado automáticamente debido a la inactividad',
      'Your Current Plan': 'Tu Plan Actual',
      'Your Current Plan and Transaction History': 'Tu Plan Actual e Historial de Transacciones',
      'Your email address has not been verified': 'Tu correo electrónico no ha sido verificado',
      'Your email address has not been verified.': 'Tu correo electrónico no ha sido verificado.',
      'Your email has not been verified.': 'Tu correo electrónico no ha sido verificado.',
      'Your newsletter preferences have been updated successfully.': 'Tus preferencias de boletín se han actualizado con éxito.',
      'Your Newsletters': 'Tus Boletines',
      'Your subscription expires in 1 day': 'Tu suscripción expira en 1 día',
      'Your subscription expires in 2 days': 'Tu suscripción expira en 2 días',
      'Your subscription expires in 3 days': 'Tu suscripción expira en 3 días',
      'Your subscription expires in 4 days': 'Tu suscripción expira en 4 días',
      'Your subscription expires in 5 days': 'Tu suscripción expira en 5 días',
      'Your subscription expires in 6 days': 'Tu suscripción expira en 6 días',
      'Your subscription expires in 7 days': 'Tu suscripción expira en 7 días',
      'Your subscription expires in 8 days': 'Tu suscripción expira en 8 días',
      'Your subscription expires in 9 days': 'Tu suscripción expira en 9 días',
      'Your subscription expires in 10 days': 'Tu suscripción expira en 10 días',
      'Your subscription expires in 11 days': 'Tu suscripción expira en 11 días',
      'Your subscription expires in 12 days': 'Tu suscripción expira en 12 días',
      'Your subscription expires in 13 days': 'Tu suscripción expira en 13 días',
      'Your subscription expires in 14 days': 'Tu suscripción expira en 14 días',
      'Your subscription expires in 15 days': 'Tu suscripción expira en 15 días',
      'Your subscription expires in 16 days': 'Tu suscripción expira en 16 días',
      'Your subscription expires in 17 days': 'Tu suscripción expira en 17 días',
      'Your subscription expires in 18 days': 'Tu suscripción expira en 18 días',
      'Your subscription expires in 19 days': 'Tu suscripción expira en 19 días',
      'Your subscription expires in 20 days': 'Tu suscripción expira en 20 días',
      'Your subscription expires in 21 days': 'Tu suscripción expira en 21 días',
      'Your subscription expires in 22 days': 'Tu suscripción expira en 22 días',
      'Your subscription expires in 23 days': 'Tu suscripción expira en 23 días',
      'Your subscription expires in 24 days': 'Tu suscripción expira en 24 días',
      'Your subscription expires in 25 days': 'Tu suscripción expira en 25 días',
      'Your subscription expires in 26 days': 'Tu suscripción expira en 26 días',
      'Your subscription expires in 27 days': 'Tu suscripción expira en 27 días',
      'Your subscription expires in 28 days': 'Tu suscripción expira en 28 días',
      'Your subscription expires in 29 days': 'Tu suscripción expira en 29 días',
      'Your subscription expires in 30 days': 'Tu suscripción expira en 30 días',
      'Your subscription expires in 31 days': 'Tu suscripción expira en 31 días',
      'Your subscription has been successfully canceled and you will not be billed again.':
        'Tu suscripción se ha cancelado correctamente y no se te volverá a facturar.',
      'Your transaction has been successfully approved by PayPal.':
        'Tu transacción ha sido aprobada correctamente por PayPal.',
      'Your tier': 'Tu nivel',
      'Zip/Postal Code': 'Código Postal',
      'Zip/Postal code': 'Código Postal',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
