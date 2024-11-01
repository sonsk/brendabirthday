import logo from './logo.svg';
import './App.css';
import './tailwind.css';
import countAge from './components/countAge';
import AgeMessage from './components/AgeMessage';
import BirthdayConfetti from  './components/BirthdayConfetti'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const age = countAge();

  return (
    <div className="App min-h-screen bg-blue-50">
      <div className="">
        <Header/>
      </div>
      <div className="hidden lg:block relative">
        <div className="relative w-full md:w-1/2 mx-auto flex justify-center items-center">
          <div className="absolute top-0 left-0 w-full  flex justify-center items-center ">
            <img src="cake.png" className="cake" alt="hbd"/>
          </div>
        </div>
      </div>
      <AgeMessage age={age} />
    
      <div className=" bottom-0 md:text-5xl text-2xl font-bold ">
        <Footer/>
      </div>
   

  
      <BirthdayConfetti/>
    
    </div>
  );
}

export default App;
