import React from "react";
import { connect } from "react-redux";
import Item from "./item";
import { toggleCart, checkout } from "./../../store/actions";
import i18next from "i18next";

class Cart extends React.Component {
  state = {};
  componentDidMount() {}
  render() {
    const { toggleCart, totalItem, totalValue, checkout } = this.props;
    return (
      <div className="cart">
        <section className="cart-myCart">
          <h3 className="cart-myCart--head">
            My Cart<span className="cart-myCart--sub">( {totalItem} item)</span>
          </h3>
          <button
            className="close"
            aria-label="close cart"
            autoFocus
            onClick={() => toggleCart()}
          ></button>
        </section>
        {totalItem > 0 ? (
          <div className="cart-items">
            <Item />
          </div>
        ) : (
          <section className="cart-noItem">
            <h4 className="cart-noItem--header">{i18next.t("CartNoItem")}</h4>
            <p className="cart-noItem--sub">{i18next.t("FavItemsMessage")}</p>
          </section>
        )}
        <div className="cart-footer">
          {totalItem > 0 ? (
            <React.Fragment>
              <p className="cart-footer--promo">{i18next.t("PromoMessage")}</p>
              <button
                className="cart-footer-checkout"
                onClick={() => checkout()}
              >
                <p>{i18next.t("CheckOut")}</p>
                <p>Rs.{totalValue}</p>
              </button>
            </React.Fragment>
          ) : (
            <button
              className="cart-footer-checkout cart-footer--start"
              onClick={() => checkout()}
            >
              {i18next.t("Shopping")}
            </button>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    totalItem: state.cart.totalItem,
    totalValue: state.cart.cartTotal
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleCart: () => dispatch(toggleCart()),
    checkout: () => dispatch(checkout())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
