import React, { useEffect } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import Product from "./porduct";
import {
  setCategories,
  setProdusts,
  setFilterId,
  addToCart
} from "../../store/actions";

const Products = props => {
  useEffect(() => {
    props.getProducts();
    if (props.cardData.length === 0) {
      props.getCategories();
    }
  }, [props]);

  return (
    <section className="productPageWraper">
      <nav className="leftNav">
        {props.cardData
          .filter(data => data.enabled)
          .map((data, i) => (
            <a
              className={classnames({
                link: 1,
                selected: props.filter.filterID === data.id
              })}
              key={i}
              onClick={() => props.setfilter(data.id)}
            >
              {data.name}
            </a>
          ))}
      </nav>
      <select
        className="productDrop"
        onChange={e => {
          props.setfilter(e.target.value);
        }}
        value={props.filter.filterID}
      >
        <option value="">Please select</option>
        {props.cardData
          .filter(data => data.enabled)
          .map(data => (
            <option value={data.id} key={data.id}>
              {data.name}
            </option>
          ))}
      </select>
      <div className="produtsBody">
        {props.ProductData.filter(
          product =>
            product.category === props.filter.filterID ||
            props.filter.filterID === ""
        ).map(product => (
          <Product
            key={product.id}
            {...product}
            clicked={() => props.addToCart(product.id)}
          />
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    cardData: state.api.categories,
    ProductData: state.api.products,
    filter: state.filter
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(setCategories()),
    getProducts: () => dispatch(setProdusts()),
    setfilter: id => dispatch(setFilterId(id)),
    addToCart: id => dispatch(addToCart(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
