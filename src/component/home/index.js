import React, { Suspense } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import Offer from "./offer";
import { setCategories, setFilterId } from "./../../store/actions";

const Card = React.lazy(() => import("./card"));

class Products extends React.Component {
  componentDidMount() {
    this.props.getCategories();
  }
  render() {
    return (
      <section className="home">
        <Offer />
        <div className="home-shadowSaprater"></div>
        {this.props.cardData
          .sort((a, b) => a.order - b.order)
          .map(card =>
            card.enabled ? (
              <React.Fragment key={card.id}>
                <Suspense fallback={<div>Loading...</div>}>
                  <Card
                    url={card.imageUrl}
                    heading={card.name}
                    info={card.description}
                    btnLable={"Explore-" + card.key}
                    rowRev={card.order % 2}
                    cardId={card.id}
                    onClick={() => {
                      this.props.changePage();
                      this.props.setfilter(card.id);
                    }}
                  />
                  <div className="home-shadowSaprater"></div>
                </Suspense>
              </React.Fragment>
            ) : null
          )}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    cardData: state.api.categories
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(setCategories()),
    setfilter: id => dispatch(setFilterId(id)),
    changePage: () => dispatch(push("/product"))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
