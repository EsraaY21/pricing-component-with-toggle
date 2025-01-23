import React from "react";

export default function PricingArticle({ pricingItem }) {
  const { type, monthlyPrice, annualPrice, storage, users, sendLimit } =
    pricingItem;

  return (
    <article className="pricing_features_item">
      <h2>{type}</h2>
      <h3 className="price">{monthlyPrice}</h3>
      <ul className="pricing_features_item_list">
        <li>{storage}</li>
        <li>{users}</li>
        <li>{sendLimit}</li>
      </ul>

      <a href="" className="pricing_features_item_link">
        Learn more
      </a>
    </article>
  );
}
