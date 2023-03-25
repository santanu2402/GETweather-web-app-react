import { useState } from 'react';
import './App.css';
import LoadingBar from 'react-top-loading-bar';
import bg from '../src/assets/video/bg.mp4'
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar'
import Current from './components/currentweather/Current';
import Forecast from './components/Forcast/Forecast';
import Footer from './components/Footer/Footer';
function App() {
  const [curweth, setCurweth] = useState(null);
  const [forcweth, setForcaweth] = useState(null);
  const [progress, setProgress] = useState(0);
 
  const handleOnSearchChange = (searchData) => {

    const [lat, lon] = searchData.value.split(" ");
    // setProgress(0);
    const currentWeather = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bc13a98d647368f0b8f365bf422ecc8c&units=metric`)
    const forcastWeather = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=bc13a98d647368f0b8f365bf422ecc8c&units=metric`)
    
    Promise.all([currentWeather, forcastWeather]).then(async (response) => {
      setProgress(0)
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurweth({ city: searchData.label, ...weatherResponse });
      setForcaweth({ city: searchData.label, ...forecastResponse });
setProgress(100)
    }).catch((e) => console.log(e));
    
  }
  return (
    <>
    <video className='bgv' autoPlay loop muted>
        <source src={bg} type='video/mp4'/>
    </video>
      <LoadingBar color='aqua' progress={progress} />
  
      <Navbar onSearchChange={handleOnSearchChange} setProgress={setProgress} />

      <div>{(!curweth && !forcweth) ? <About /> : ''}</div>
      {curweth && <Current data={curweth} />}  {/*if curweth is not null*/}
      {forcweth && <Forecast data={forcweth} />}
     <Footer/>

    </>
  );
}
export default App;
