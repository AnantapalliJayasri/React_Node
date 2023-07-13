import logo from "./logo.svg";
import "./App.css";
import Sample from './Sample.js';
import BasicWebpage from "./BasicWebpage";
function App() {
 
  return (
    
    <div className="App">
        {/* we can use this when we are using http module
        <form action="/app1.js" method="post" className="form">
          <button type="submit">Connected?</button>
        </form> */}
        {/* we can use this when we are using express js with post method 
        <form action="/post" method="post" className="form">
          <button type="submit">Connected?</button>
      </form> */}
      <BasicWebpage/>
      
     {/* <h1>{username}</h1>  */}
    </div>
  );
}
  
export default App;
