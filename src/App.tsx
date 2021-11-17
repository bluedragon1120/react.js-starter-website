import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import HomePage from "./pages/HomePage";
import ShadowGalactic from "./pages/ShadowGalactic";
import DogeVanderlinde from "./pages/DogeVanderlinde";
import CrossBlockchainWallet from "./pages/CrossBlockchainWallet";
import ColonyX from "./pages/ColonyX";
import Vanderswap from "./pages/Vanderswap";

function App() {
  return (
    <BrowserRouter>
      <Switch className="leftVerticalLine">
        <Route path="/" component={HomePage} exact />
        <Route path="/ShadowGalactic" component={ShadowGalactic} exact />
        <Route path="/DogeVanderlinde" component={DogeVanderlinde} exact />
        <Route
          path="/CrossBlockchainWallet"
          component={CrossBlockchainWallet}
          exact
        />
        <Route path="/ColonyX" component={ColonyX} exact />
        <Route path="/Vanderswap" component={Vanderswap} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
