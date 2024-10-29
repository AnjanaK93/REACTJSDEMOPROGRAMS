import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Display from './components/Display'
import Movie from './components/Movie'
import Color from './components/Color'
import Number from './components/Number'
import Person from './components/Person'
import FruitObjectArray from './components/FruitObjectArray'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ActorList from './components/actor/ActorList'
import ProductList from './components/product/ProductList'
import ButtonClick from './components/ButtonClick'
import Counter from './components/Counter'
import ToggleMovie from './components/ToggleMovie'
import MovieComponent from './components/MovieComponent'
import PersonClick from './components/PersonClick'
import inputDemo from './components/InputDemo'
import InputDemo from './components/InputDemo'
import EcomList from './components/ecommerce/EcomList'
import EcomAdd from './components/ecommerce/EcomAdd'
import EcomAddValidation from './components/ecommerce/EcomAddValidation'
import ToDoList from './components/todo-app/ToDoList'
import Error  from './components/Eror'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import HeaderApp from './components/HeaderApp'
import VenueList from './components/training/venue/VenueList'
import CohortList from './components/training/cohort/CohortList'
import HeaderTraining from './components/training/HeaderTraining'
//import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
     {/* <h2>This is App Component!</h2> */}
     {/* <Display></Display>
     <Movie></Movie>
     <Color></Color>
     <Number></Number>
     <Person></Person>
     <FruitObjectArray></FruitObjectArray>
     <ActorList></ActorList> 
     <ProductList></ProductList>
     <ButtonClick></ButtonClick>
     <Counter></Counter>
     <ToggleMovie></ToggleMovie> */}
     {/* <MovieComponent></MovieComponent>
     <PersonClick></PersonClick>
     <InputDemo></InputDemo> */}
     {/* <EcomList></EcomList> */}
      {/* <EcomAdd></EcomAdd> */}
      {/* <EcomAddValidation></EcomAddValidation> */}
     {/* <ToDoList></ToDoList> */}
     {/* <VenueList></VenueList>
     <CohortList></CohortList> */}
     
     <BrowserRouter>
     {/* <HeaderTraining></HeaderTraining> */}
     <HeaderApp></HeaderApp>
     <Routes>
      <Route path='/' element={<Counter/>}></Route>
      <Route path='/todo' element={<ToDoList/>}></Route>
      <Route path='/ecommerce' element={<EcomList></EcomList>}></Route>
      <Route path='/fruit' element={<FruitObjectArray/>}></Route>
      {/* <Route path='/venue' element={<VenueList/>}></Route>
      <Route path='/cohort' element={<CohortList/>}></Route> */}
      <Route path='/training' element={<HeaderTraining/>}>
        <Route path='venue-list' element={<VenueList/>}></Route>
        <Route path='cohort-list' element={<CohortList/>}></Route>
      </Route>
      <Route path="/*" element={<Error/>}></Route>
     </Routes>
     </BrowserRouter>
   </>
  );
}

export default App;
