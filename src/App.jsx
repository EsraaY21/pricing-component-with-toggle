import PricingArticle from "./components/PricingArticle";
import SwitchContainer from "./components/SwitchContainer";
import { useState } from "react";

function App() {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked((prev) => !prev);
  };

  const pricingData = [
    {
      type: "Basic",
      monthlyPrice: "$19.99",
      annualPrice: "$199.99",
      storage: "500 GB Storage",
      users: "2 Users Allowed",
      sendLimit: "Send up to 3 GB",
    },
    {
      type: "Professional",
      monthlyPrice: "$24.99",
      annualPrice: "$249.99",
      storage: "1 TB Storage",
      users: "5 Users Allowed",
      sendLimit: "Send up to 10 GB",
    },
    {
      type: "Master",
      monthlyPrice: "$39.99",
      annualPrice: "$399.99",
      storage: "2 TB Storage",
      users: "10 Users Allowed",
      sendLimit: "Send up to 20 GB",
    },
  ];

  return (
    <>
      <main>
        <section className="pricing_section">
          <h1>Our Pricing</h1>
          <SwitchContainer checked={checked} onToggle={handleToggle} />
          <div className="pricing_features">
            {pricingData.map((pricingItem) => (
              <PricingArticle
                pricingItem={pricingItem}
                key={pricingItem.type}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
