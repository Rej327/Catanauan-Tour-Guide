import React, { useEffect } from "react";
import NavigatonInOtherPage from "../components/common/NavigatonInOtherPage";
import Footer from "../components/common/Footer";
import BankItem from "../components/item_page/bank_item_page/BankItem";
const BankItemPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavigatonInOtherPage />
      <div className="pb-2">
        <BankItem />
      </div>
      <Footer />
    </div>
  );
};

export default BankItemPage;
