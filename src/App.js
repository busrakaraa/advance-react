import React from "react";
import './App.css';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',

  },
  dark : {
    foreground: '#ffffff',
    background: '#222222',
  },
}  

//1. Create context
const ThemeContext = React.createContext(themes.dark);

//2. Create Provider
//3. Create Consumer to use the data

const ThemedButton = () => {
  return(
    <ThemeContext.Consumer>
      {
          value => (
            <button>Themed button ! {value.background}</button>
          )
      }
   
    </ThemeContext.Consumer>
   
  );
}

const Toolbar = () => (
  <ThemedButton/>
)


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ThemeContext.Provider value={themes.dark}>
          <Toolbar />
        </ThemeContext.Provider>
      </div>
    );
  }
}



export default App;
