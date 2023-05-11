import { useEffect } from 'react';
import './App.css';
import Content from './component/content';
import Navbar from './component/navbar';


function App() {
  useEffect(() => {
    document.title = 'YEMDb';
  }, []);



  return (
    <>
    
      <Navbar />
      <Content />
    </>
  );
}

export default App;
