import React,{useState} from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Blog from './pages/Blog'
import Post from "./pages/Post";
import Contact from "./pages/contact";
import useFetch from "./hooks/useFetch";
import NotFound from './components/NotFound'
   
function App() {
  const allData = useFetch("https://blogservercm.herokuapp.com/post");
  const [dark, setDark] = useState("");
  const doc = document.body;
  if(dark){
      doc.classList.add(dark);
  }else{
    
    if(doc.classList.contains("dark")){

      doc.classList.remove("dark")
    }
  }
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <Home allData={allData} setDark={setDark} dark={dark}/>
          </Route>
          <Route path="/blog/:id" exact={true}>
            <Post setDark={setDark} dark={dark}/>
          </Route>
          <Route path="/blog" exact={true}>
            <Blog allData={allData} setDark={setDark} dark={dark}/>
          </Route>
          <Route path="/contact">
            <Contact setDark={setDark} dark={dark}/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
