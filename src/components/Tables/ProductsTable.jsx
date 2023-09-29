import { Table } from 'react-bootstrap'

const ProductsTable = ({products}) => {

  const limitedProducts = products.slice(0, 3);

  return (
    <Table striped="columns">
    <thead>
    <tr>
              <th>Imagen</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Stock</th>
              <th>Actions</th>
          </tr>
    </thead>
    <tbody>
      {limitedProducts.map((product, index) => (
        <tr key={product._id}>
        <td>
          <img
            className="w-25"
            src={product.image.url}
            alt={product.name}
          />
        </td>
        <td>{product.name}</td>
        <td>${product.price}</td>
        <td >{product.description}</td>
        <td>{product.stock}</td>
      </tr>
      ))}
    </tbody>

  </Table>
  )
}

export default ProductsTable