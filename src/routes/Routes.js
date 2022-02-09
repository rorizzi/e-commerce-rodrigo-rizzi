import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import ItemDetailContainer from "../components/item-detail-container/ItemDetailContainer";
import ItemListContainer from "../components/item-list-container/ItemListContainer";
import NavBar from "../components/navbar/NavBar";
import NotFound from "../components/not-found/NotFound";

const Routes = () => {
  return (
    <>
        <BrowserRouter>            
            <NavBar/>
            <Switch>
                <Route exact path="/" element={<ItemListContainer welcome="Bienvenido a APOLON"/>} />
                <Route exact path="/category/:idCategory" element={<ItemListContainer />} />
                <Route exact path="/item/:idItem" element={<ItemDetailContainer />} />
                <Route exact path="/category/:idCategory/item/:idItem" element={<ItemDetailContainer />} />
                <Route exact path="/*" element={<NotFound />} />
            </Switch>
        </BrowserRouter>
    </>

  );
};

export default Routes;
