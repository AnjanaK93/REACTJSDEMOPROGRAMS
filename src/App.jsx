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
import VenueAdd from './components/training/venue/VenueAdd'
import CohortView from './components/training/cohort/CohortView'
import CohortAdd  from './components/training/cohort/CohortAdd'
import JsonPlaceHolder from './components/JsonPlaceHolder'
import HeaderTrainingHttp from './components/training copy/HeaderTrainingHttp'
import VenueListHttp from './components/training copy/venue-http/VenueListHttp'
import VenueAddHttp from './components/training copy/venue-http/VenueAddHttp'
import CohortListHttp from './components/training copy/cohort-http/CohortListHttp'
import CohortAddHttp from './components/training copy/cohort-http/CohortAddHttp'
import CohortViewHttp from './components/training copy/cohort-http/CohortViewHttp'
import CohortEditHttp from './components/training copy/cohort-http/CohortEditHttp'

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
     {/* <VenueAdd></VenueAdd> */}
     
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
        <Route path='venue-add' element={<VenueAdd/>}></Route>
        <Route path='cohort-list' element={<CohortList/>}></Route>
        <Route path='cohort-add' element={<CohortAdd/>}></Route>
        <Route path='cohort-view/:cid' element={<CohortView/>}></Route>
      </Route>
      <Route path='/training copy' element={<HeaderTrainingHttp/>}>
        <Route path='venue-list-http' element={<VenueListHttp/>}></Route>
        <Route path='venue-add-http' element={<VenueAddHttp/>}></Route>
        <Route path='cohort-list-http' element={<CohortListHttp/>}></Route>
        <Route path='cohort-add-http' element={<CohortAddHttp></CohortAddHttp>}></Route>
        <Route path='cohort-edit-http/:cid' element={<CohortEditHttp/>}></Route>
        <Route path='cohort-view-http/:cid' element={<CohortViewHttp/>}></Route>
      </Route>
      <Route path='/fake-api' element={<JsonPlaceHolder/>}></Route>
      <Route path="/*" element={<Error/>}></Route>
     </Routes>
     </BrowserRouter>
   </>
  );
}

export default App;
