import React, {useState} from 'react';

import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

import './index.css';

function App() {

 const [count, setCount] = useState(0);

 function renderPage(){
   switch(count){
    case 0:
      return <About></About>;
      
    case 1:
      return <Portfolio></Portfolio>
      
    case 2:
      return <ContactForm></ContactForm>
      
    case 3: 
      return <Resume></Resume>
      
    default: 
      return <About></About>
    
   }
   
 }

  return (
    <div>
        <Header setCount = {setCount}></Header>
        
        <main className="mainPage">
        {renderPage()}
        </main>
       
        <Footer></Footer>
    </div>
  );
}

export default App;
