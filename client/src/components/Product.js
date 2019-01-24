import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import RaisedButton from 'material-ui/RaisedButton';
import NavigateNext from 'material-ui/svg-icons/image/navigate-next';
import '../styles/Product.css';

const Product = ({ item }) => (
  <div className="product">
    <div className="content">
      <img src={item.info.photo} />
      <div className="content-left">
        <h3>{item.info.name}</h3>
        <div className="content-info">
          <div><b>Назва: </b><span>{item.info.name}</span></div>
          <div><b>Адреса: </b><span>{item.info.dimensions}</span></div>
          <div><b>Час роботи: </b><span>{item.info.weight}</span></div>
        </div>
      </div>
      <div className="content-right">
        <div className="content-info">
          <p><b>Середня ціна харчування:</b></p>
          <h2>{numeral(item.info.price).format('$0,0.00')}</h2>
        </div>
        <RaisedButton
          containerElement={<Link to={`/product/${item._id}`} />}
          className="btn"
          label="Детальніше"
          labelPosition="before"
          primary={true}
          icon={<NavigateNext />}
        />
      </div>
    </div>
  </div>
);

export default Product;