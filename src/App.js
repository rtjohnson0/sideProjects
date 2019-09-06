import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import Weather from './components/Board'
import { async } from 'q';




const API_KEY='755b45bb7cbba9bf98a9f846e5291876'


class App extends React.Component {
  state ={
    temperature: undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined
    

  }
  
  getWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;

    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    const data = await api_call.json();
    if(city && country ){
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      city:data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      error:""

    })
  } else{
    this.setState({
      temperature: undefined,
      city:undefined,
      country:undefined,
      humidity:undefined,
      description:undefined,
      error:"Please Enter the value."

  }
    )}
  }

  render(){

  
  return (
   <div>
     <div className="wrapper">
       <div className="main">
         <div className="container">
           <div className="row">
             <div className="col-xs-8 title-container">
     <Header />
     </div>
        <div className="col m-7 form-container">
          <Form getWeather={this.getWeather}/>
          <Weather temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
  
  

  );
}
}
export default App;
