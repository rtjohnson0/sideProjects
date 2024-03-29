import React from 'react'

export default class Weather extends React.Component{
render(){
    return(
        <div className="weather__info">
          
          { this.props.city  && this.props.country && <p className='weather__key'>Location:<span className='weather__value'>{ this.props.city }, { this.props.country } </span></p> }
            
         { this.props.temperature && <p className='weather__key'>Temperature: <span className='weather__value'>{ this.props.temperature } </span></p> }
           {this.props.humidity && <p className='weather__key'>Humidiy: <span className='weather__value'>{ this.props.humidity } </span></p> }
           {this.props.humidity && <p className='weather__key'>Conditions: <span className='weather__value'>{ this.props.description }</span></p> }

           {this.props.error && <p className='weather__key'>Error: <span className='weather__error'>{ this.props.error }</span></p> }
            

        </div>

    );
}



}