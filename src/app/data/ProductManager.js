import React from 'react';

class ProductManager {
    constructor(props) {
        this.products = this.props.products;

    }

    getProducts() {
        // return this.products;
    }

    addProduct() {
        //....
    }
}

class Basket extends React.Component {
    render() {
      const filterText = this.props.filterText;
      const inStockOnly = this.props.inStockOnly;
  
      const rows = [];
      let lastCategory = null;
  
      this.props.products.forEach((product) => {
        if (product.name.indexOf(filterText) === -1) {
          return;
        }
        if (inStockOnly && !product.stocked) {
          return;
        }
        if (product.category !== lastCategory) {
          rows.push(
            <ProductCategoryRow
              category={product.category}
              key={product.category} />
          );
        }
        rows.push(
          <ProductRow
            product={product}
            key={product.name}
          />
        );
        lastCategory = product.category;
      });
  
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }
  


const SOFADATA =
[
    {category: "2-seat sofa", price: "$199", stocked: true, name: "Sofa A"},
    {category: "2-seat sofa", price: "$299", stocked: true, name: "Sofa B"},
    {category: "2-seat sofa", price: "$269", stocked: false, name: "Sofa C"},
    {category: "3-seat sofa", price: "$799", stocked: true, name: "Sofa D"},
    {category: "3-seat sofa", price: "$469", stocked: false, name: "Sofa E"},
    {category: "3-seat sofa", price: "$499", stocked: true, name: "Sofa F"}
  ];

//   products = SOFADATA

export default ProductManager;