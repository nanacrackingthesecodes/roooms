import './App.css';
import Rooms from './components/Rooms/Rooms';
import Products from './components/Products/Products';
import Information from './components/Information/Information';
import Cat from './components/Cat/Cat';
import Ideasfor from './components/Ideasfor/Ideasfor';
import Cozysets from "./components/Cozysets/Cozysets";
import Additional from "./components/Additional/Additional";

function App() {
  return (
    <div className="App">
      <Rooms/>
      <Products/>
      <Information/>
      <Cat/>
      <Ideasfor/>
      <Cozysets/>
      <Additional/>
    </div>
  );
}

export default App;