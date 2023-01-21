import { useState } from "react";
import ProductTable from "./FilterableProduct/components/ProductTable";
import SearchBar from "./FilterableProduct/components/SearchBar";
import { ElectronicsProduct, SportingProducts } from "./FilterableProduct/Data";
import { arraySearch, stockCheck } from "./FilterableProduct/utils/SearchLogic";
import "./index.css";

function App() {
  const [sportProducts, setSportsProducts] = useState(SportingProducts);
  const [elecProducts, setElecProducts] = useState(ElectronicsProduct);

  const handleOnChangeForSearch = async (e) => {
    let value = e.target.value;
    if (value.length >= 1) {
      let allSportProduct = await arraySearch(sportProducts, value);
      let allElecProduct = await arraySearch(elecProducts, value);
      setSportsProducts(allSportProduct);
      setElecProducts(allElecProduct);
    } else {
      setSportsProducts(SportingProducts);
      setElecProducts(ElectronicsProduct);
    }
  };

  const handleOnChangeForCheck = async (e) => {
    let value = e.target.checked;

    if (value) {
      let checkedSport = await stockCheck(sportProducts, value);
      let checkedElec = await stockCheck(elecProducts, value);
      setSportsProducts(checkedSport);
      setElecProducts(checkedElec);
    } else {
      setSportsProducts(SportingProducts);
      setElecProducts(ElectronicsProduct);
    }
  };

  return (
    <div className="App">
      <SearchBar
        SearchHandle={handleOnChangeForSearch}
        CheckHandle={handleOnChangeForCheck}
      />
      <ProductTable SportArray={sportProducts} ElectArray={elecProducts} />
    </div>
  );
}

export default App;
