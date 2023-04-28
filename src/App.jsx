import './App.css';
import { Route, Routes } from "react-router-dom";
import CreateProduct from './components/CreateProduct';
import FoodList from './components/FoodList';
import { SingleFood } from './pages/SingleFood';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <Routes>
      <Route path='/' element={<FoodList />} />
      <Route path='/single-food' element={<SingleFood />} />
      <Route path='/create' element={<CreateProduct />} />
      <Route path='/edit' element={<EditProduct />} />

    </Routes>
  )
}

export default App;

