import NavBar from './components/Nav/NavBar';
import config from './config/config';
import './index.css';


function App() {

  fetch(config.BASE_URL +  '/550?api_key=' + config.TOKEN).then(res => {
    return res.json();
  }).then(res => console.log(res));


  return (
    <div className="mx-auto bg-gray-100 h-screen w-screen">
      
      <NavBar />
    </div>
  );
}

export default App;
