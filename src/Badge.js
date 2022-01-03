import React from "react";
import { connect } from "react-redux";

const Badge = ({ products }) => {
  return (
    <div>
      <center>
        <button type="button">
          Total Products
          <span>{products.length}</span>
        </button>
      </center>
    </div>
  );
};
const mapStateToProps = (state) => ({
  products: state,
});
export default connect(mapStateToProps)(Badge);
