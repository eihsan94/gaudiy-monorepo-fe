import { useParams } from "react-router-dom";

const Prices = () => {
  const { pair } = useParams();

  // You can now use the 'pair' variable to make API calls or fetch data
  // For example: fetchPriceData(pair);

  return (
    <div>
      <h1>Prices for: {pair?.toUpperCase()}</h1>
    </div>
  );
};

export default Prices;
