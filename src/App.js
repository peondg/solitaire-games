import "./App.css";
import Header from "./Components/HeaderComponent";
import Footer from "./Components/FooterComponent";
import Home from "./Components/HomeComponent";
import PirateGold from "./Components/PirateGoldComponent";
import LazyBoy from "./Components/LazyBoyComponent";
import Klondike from "./Components/KlondikeComponent";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/pirateGold" component={PirateGold} />
          <Route path="/lazyboy" component={LazyBoy} />
          <Route path="/klondike" component={Klondike} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
