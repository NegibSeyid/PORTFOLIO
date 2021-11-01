import React, { useEffect } from "react";
import { Switch, Route, useLocation, useHistory, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import {Couple, Famille, Bapteme, Bebe, Mariage, Grosesse} from "./pages/Projects";
import Contact from "./pages/Contact";
import prestations from "./pages/prestations";

import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  let history = useHistory();

  useEffect(() => {
    const handleScrollToElement = (e) => {
      console.log(e.wheelDeltaY);
      const url = window.location.origin + "/";

      const wheelRouter = (after, before) => {
        if (e.wheelDeltaY < 0) {
          setTimeout(() => {
            history.push(after);
          }, 500);
        } else if (e.wheelDeltaY > 0) {
          setTimeout(() => {
            history.push(before);
          }, 500);
        }
      };

      switch (window.location.href.toString()) {
        case url:
          if (e.wheelDeltaY < 0) {
            setTimeout(() => {
              history.push("Couple");
            }, 500);
          }
          break;

          case url + "Bapteme":
            wheelRouter("Bapteme", "");
            break;
        case url + "Mariage":
          wheelRouter("Mariage", "");
          break;
        case url + "Bebe":
          wheelRouter("Bebe", "");
          break;

    
       
        case url + "Grosesse":
          wheelRouter("Grosesse", "");
          break;
            case url + "Grosesse":
          wheelRouter("Grosesse", "");
          break;

          case url + "Famille":
            wheelRouter("Famille", "");
            break;
         
        
        default:
          console.log("nothing");
      }
    };
    window.addEventListener("wheel", handleScrollToElement);
  }, [history]);

  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route path="/couple" component={Couple} />
        <Route path="/Bebe" component={Bebe} />
        <Route path="/Famille" component={Famille} />
        <Route path="/Bapteme" component={Bapteme} />
        <Route path="/contact" component={Contact} />
        <Route path="/prestations" component={prestations} />

        <Route path="/Mariage" component={Mariage} />
        <Route path="/Grosesse" component={Grosesse} />

        <Redirect to='/' />
      </Switch>
    </AnimatePresence>
  );
};

export default App;
