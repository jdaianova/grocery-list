import './App.css';
import GroceryList from './GroceryList';
import imageBasket from './img/shopping-basket.png';

function App() {

  return (
    <div className='app'>

      <img className='title-image' src={imageBasket} alt='shopping basket' />
      <GroceryList />

    </div>
  );
}

export default App;