import Header from "./components/Header.jsx"
import MyCard from "./components/MyCard.jsx"
import Footer from "./components/Footer.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/index.css"

function App() { 
  return (
    <>
      <Header title="Adopta un perrito" />
      <MyCard 
      image="https://placedog.net/200/200" 
      dogName="Julio"
      description="Cachorro de 5 meses, cariñoso y jugueton busca un hogar"
      colorButton="success"
      textButton="Husky"
      />
      <MyCard 
      image="https://placedog.net/201/200" 
      dogName="Julio"
      description="Cachorro de 5 meses, cariñoso y jugueton busca un hogar"
      colorButton="danger"
      textButton="Corgi"
      />
      <MyCard 
      image="https://placedog.net/202/200" 
      dogName="Julio"
      description="Cachorro de 5 meses, cariñoso y jugueton busca un hogar"
      colorButton="primary"
      textButton="Bulldog"
      />
      <MyCard 
      image="https://placedog.net/203/200" 
      dogName="Julio"
      description="Cachorro de 5 meses, cariñoso y jugueton busca un hogar"
      colorButton="warning"
      textButton="Border Collie"
      />
      <Footer info="Explora nuestra galeria de adopcion de perros para encontrar a tu compañero perfecto"/>
    </>
  )
}

export default App
