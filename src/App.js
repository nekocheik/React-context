import React, { useContext, useState } from 'react';
import logo from './logo.svg';
import ContexValue from './contexts/ContextValue'
import './App.css';


const ChildDiv = () => {
  return (
    <div>
      <ContexValue.Consumer>
        {value => 
          (
            <span>
            {value.isLog  ? 'is log' : 'is not log'}
            </span>
          )
        }
      </ContexValue.Consumer>
    </div>
  );
}


const App = () => {
  const [ isLog , setIsLog ] = useState(false)


  return (
    <div className="App"  >
      <ContexValue.Provider value={ {isLog , setIsLog} }>
        <ChildDiv />
      </ContexValue.Provider>
    </div>
  );
}

export default App;
