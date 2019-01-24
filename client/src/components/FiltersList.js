import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import { setFilter } from '../actions/filterActions';
import '../styles/FiltersList.css';

export class FiltersList extends React.Component {
  handleCheck = (e) => {
    this.props.setFilter(e.target.name, e.target.value);
  };

  render() {
    return (
      <div className="filtersList">
        <List>
          <Subheader className="subheader">Пошук за:</Subheader>
          <ListItem 
            className="listItem"
            primaryText="Ціна"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="Менше 10" name="priceRange" value="<10" onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="10 - 50" name="priceRange" value="10-50" onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="50 - 150" name="priceRange" value="50-150" onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="150 і більше" name="priceRange" value="150>" onCheck={this.handleCheck} />
            ]}
          />
          <ListItem 
            className="listItem"
            primaryText="Назва"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="МакДональдз" name="brand" value="mak" onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="Час Поїсти" name="brand" value="chp" onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="Ферма" name="brand" value="ferm" onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="Коза Ностра" name="brand" value="koz " onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="Крила" name="brand" value="krl" onCheck={this.handleCheck} />,      
            ]}
          />
       <ListItem 
            className="listItem"
            primaryText="Адреса"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="Бульвар Шевченка" name="repair" value="shev" onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="Смілянська" name="repair" value="smil" onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="Остафія Дашкоовича" name="repair" value="ost" onCheck={this.handleCheck} />
            ]}
          />
          <ListItem 
            className="listItem"
            primaryText="Тип закладу"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="Фастфуд" name="replist" value="fast" onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="Ресторан" name="replist" value="rest" onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="Столова" name="replist" value="stol" onCheck={this.handleCheck} />,
            ]}
          />
        </List>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filterType, filter) => dispatch(setFilter(filterType, filter))
});

export default connect(null, mapDispatchToProps)(FiltersList);