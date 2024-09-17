# TKDApp ecommerce - React Native

Una aplicación de comercio electrónico desarrollada con React Native que ofrece la venta de productos de artes marciales; en especial, de Taekwondo ITF.

## Funcionalidades Principales

### Pantalla de Login

- Se visualizan los campos usuario y contraseña.
- Hay un acceso directo a "Registro" para aquellos usuarios que no posean una cuenta
  
<img src="https://res.cloudinary.com/ijac-it-solutions/image/upload/v1726600856/img/tdkApp/n9mvcpyo4pyytjn9aixt.jpg" width="300" >

### Pantalla de Registro

- Se visualizan los campos usuario, contraseña y confirmar contraseña.
- Hay un acceso directo a "Login" para aquellos usuarios que posean una cuenta
  
<img src="https://res.cloudinary.com/ijac-it-solutions/image/upload/v1726600856/img/tdkApp/wkymwiehitp0byw9sapg.jpg" width="300" >

### Pantalla de Cuenta

- **Acceso seguro:** Solo los usuarios registrados y autenticados pueden acceder a la pantalla de perfil y realizar compras.
- **Información del usuario:** Muestra detalles del usuario. Por ejemplo: nombre, dirección, avatar, etcétera.
  
<img src="https://res.cloudinary.com/ijac-it-solutions/image/upload/v1726599415/img/tdkApp/kmusl68nix9zvvlr7bst.jpg" width="300" >



### Autenticación con Firebase

- Utiliza el sistema de autenticación de Firebase para gestionar el acceso de usuarios.
- Permite a los usuarios iniciar sesión y registrarse de manera segura.

### Pantalla de Categorías

- Muestra una selección de categorías de productos en tarjetas.
- Al hacer clic en una categoría, se navega a la pantalla de productos correspondiente.
  
<img src="https://res.cloudinary.com/ijac-it-solutions/image/upload/v1726599415/img/tdkApp/dqlbpbwvdenfqosqd93c.jpg" width="300" >

### Pantalla de Productos

- Lista todos los productos en tarjetas con nombre, breve descripción,  foto y precio.
- Incluye un buscador para filtrar productos por nombre.
- Al hacer clic en un producto, se navega a la pantalla del detalle del producto.
  
<img src="https://res.cloudinary.com/ijac-it-solutions/image/upload/v1726599415/img/tdkApp/ordczsldsshpregpx4ys.jpg" width="300" >

### Pantalla de Detalle de Productos

- Enuncia el producto con su foto, titulo, descripción y precio.
- Se visualiza el botón de compra para agregarlo al carrito. 
  
<img src="https://res.cloudinary.com/ijac-it-solutions/image/upload/v1726599416/img/tdkApp/k8su33syhfs2py13b6nm.jpg" width="300" >

### Pantalla de Detalles del Producto

- Proporciona una descripción detallada del producto.
- Muestra el precio y el stock disponible.
- Permite agregar el producto al carrito.

<img src="https://res.cloudinary.com/ijac-it-solutions/image/upload/v1726599416/img/tdkApp/yftg7wz8x3v4wubs2yvm.jpg" width="300" >

### Pantalla de Carrito

- Proporciona una breve descripción detallada del producto.
- Se puede eliminar el producto del carrito.
- Muestra el total y un botón para confirmar.

<img src="https://res.cloudinary.com/ijac-it-solutions/image/upload/v1726599416/img/tdkApp/yftg7wz8x3v4wubs2yvm.jpg" width="300" >

### Pantalla de Pedidos

- Proporciona una breve descripción detallada los pedidos.
- Se puede visualizar la fecha y hora de su realización
- Se puede ingresar al detalle de la orden.

<img src="https://res.cloudinary.com/ijac-it-solutions/image/upload/v1726599415/img/tdkApp/okygfalnpg2yqcny6ada.jpg" width="300" >

### Navegación Inferior

```javascript 

  const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          ...styles.tabBar,
        },
      }}
    >
      <Tab.Screen
        name="ShopStack"
        component={ShopStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabBarIcon focused={focused} text="Shopping" icon="shop" 
            />;
          },
        }}
      />
      <Tab.Screen
        name="CartStack"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabBarIcon
                focused={focused}
                text="Carrito"
                icon="shopping-cart"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="OrdersStack"
        component={OrdersStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabBarIcon focused={focused} text="Pedidos" icon="list" />;
          },
        }}
      />
       <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabBarIcon focused={focused} text="Perfil" icon="user" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

```

- **Pestaña 1 - Shopping:** Categorías y productos (stack principal).
- **Pestaña 2 - Carrito:** Detalles del carrito de compras con resumen y botón para finalizar la orden.
- **Pestaña 3 - Pedidos:** Historial de órdenes realizadas.
- **Pestaña 4 - Perfil:** Información del usuario, ubicación y carga de imagen de perfil.

## Tecnologías Utilizadas

- **Firebase Authentication:** Implementa el sistema de autenticación de Firebase para gestionar la seguridad de la aplicación.
- **React Native Navigation Stack:** Gestiona la navegación entre pantallas.
- **React Native Navigation Buttom tap:** Gestiona la navegación entre pestañas.
- **Expo-Location:** Permite acceder y gestionar la ubicación del usuario.
- **Expo-Picker-Image:** Facilita la carga de imágenes de perfil.
- **Redux:** Centraliza y gestiona el estado de la aplicación.
- **RTK Query y Firebase:** Realiza operaciones de lectura/escritura en la base de datos.

## Instalación

1. Clonar el repositorio: `git clone https://github.com/tu-usuario/tu-aplicacion.git`
2. Instala las dependencias: `npm install`
3. Configura las claves de API para servicios externos (Expo-Location, Firebase, etc.).
4. Configura las credenciales de Firebase en tu proyecto.
5. Ejecuta la aplicación: `npm start`

## Contacto

Para consultas, preguntas o dudas; contactar a carrizoja@gmail.com.