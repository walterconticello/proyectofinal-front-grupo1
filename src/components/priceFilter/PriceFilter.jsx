import { Form, InputGroup } from "react-bootstrap";

const PriceFilter = ({ priceRange, setPriceRange }) => {
  const handlePriceChange = (event) => {
    const newPriceRange = event.target.value.split("-").map(parseFloat);
    setPriceRange(newPriceRange);
  };

  return (
    <Form.Group>
      <Form.Label>Rango de precios</Form.Label>
      <InputGroup>
        <Form.Control
          type="range"
          min={0}
          max={100}
          step={1}
          value={priceRange.join("-")}
          onChange={handlePriceChange}
        />
      </InputGroup>
      <div className="d-flex justify-content-between">
        <span>{priceRange[0]}</span>
        <span>{priceRange[1]}</span>
      </div>
    </Form.Group>
  );
};

export default PriceFilter;
