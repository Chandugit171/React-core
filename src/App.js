import logo from './logo.svg';
import Employee from './Employee';
import Hospital from './Hospital';
import BankDetails from './BankDetails';
import HandlerMethod from './HandlerMethod';
import Parent from './Parent';
import FunctionalParent from './FunctionalParent';
import ArrayMap from './ArrayMap';
import './App.css';
function App() {
  return (
    <div className="App">
      <Employee/>
      <hr></hr>
      <div>
        <h1 style={{marginTop:20}}>Functional component.....</h1>
        <Hospital/>
        <BankDetails/>
      <hr></hr>
      <HandlerMethod/><hr></hr>
      <Parent/>
      <hr></hr>
      <FunctionalParent />
      {/* <iframe width="299" height="393" src="https://www.youtube.com/embed/MzeYR1UvchA?list=PLNRAO669WN3L7RcoNA0crLprxpbldWZk8" title="REACT JS IN TELUGU | what is the difference between state and props in React JS ... ?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}



      <hr />
      <ArrayMap />
      

      </div>
      
      
    </div>
  );
}

export default App;
