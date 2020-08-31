import React, { useState } from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

function Products(props) {
  const [count, setCount] = useState(100);

  const deleteProducts =(id) => {
    console.log(id)
  };

  return (
    <div>
      <ProductList onDelete={deleteProducts} products={props.productList}/>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    productList: state.productList,
  };
};

export default connect(mapStateToProps)(React.memo(Products));
