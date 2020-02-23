import React from "react";
import { Multiselect } from "multiselect-react-dropdown";
import Product from "../component/product";

export default class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      furnitureStyleOptions: [],
      deliveryTimeOptions: [
        { name: "1 Week", id: 1, maximumDeliveryDays: 7 },
        { name: "2 Weeks", id: 2, maximumDeliveryDays: 14 },
        { name: "1 Months", id: 3, maximumDeliveryDays: 31 },
        { name: "More", id: 4, maximumDeliveryDays: 365 }
      ],
      nameFilter: "",
      furnitureFilter: [],
      timeFilter: [],
      searchResult: []
    };
  }
  componentDidMount = () => {
    this.loadData();
  };

  loadData = async () => {
    const url = "http://www.mocky.io/v2/5c9105cb330000112b649af8";
    const response = await fetch(url, {
      method: "GET"
    });
    const data = await response.json();

    //restructure furniture style json to match with multipleselect requirement
    var furnitureStyle = data.furniture_styles.map(style => {
      return { name: style, key: style };
    });

    this.setState({
      data,
      furnitureStyleOptions: furnitureStyle,
      searchResult: data.products
    });
  };

  filterData = e => {
    var data = JSON.parse(JSON.stringify(this.state.data));
    var furnitureList = this.state.furnitureFilter.map(style => {
      return style.name;
    });
    var MaximumDeliveryDays = Math.max.apply(
      null,
      this.state.timeFilter.map(time => {
        return time.maximumDeliveryDays;
      })
    );
    if (
      this.state.timeFilter.length === 0 &&
      this.state.furnitureFilter.length === 0 &&
      this.state.nameFilter === ""
    ) {
      //reset back to original data if there no filter
      this.setState({ searchResult: this.state.data.products });
    } else {
      var result = data.products.filter(product => {
        if (this.state.nameFilter === "") {
          if (this.state.furnitureFilter.length === 0) {
            return product.delivery_time <= MaximumDeliveryDays;
          } else if (this.state.timeFilter.length === 0) {
            return product.furniture_style.some(r => furnitureList.includes(r));
          } else {
            return (
              product.furniture_style.some(r => furnitureList.includes(r)) &&
              product.delivery_time <= MaximumDeliveryDays
            );
          }
        } else if (this.state.furnitureFilter.length === 0) {
          if (this.state.nameFilter.length === 0) {
            return product.delivery_time <= MaximumDeliveryDays;
          } else if (this.state.timeFilter.length === 0) {
            return product.name.includes(this.state.nameFilter);
          } else {
            return (
              product.name.includes(this.state.nameFilter) &&
              product.delivery_time <= MaximumDeliveryDays
            );
          }
        } else if (this.state.timeFilter.length === 0) {
          if (this.state.nameFilter === "") {
            return product.furniture_style.some(r => furnitureList.includes(r));
          } else if (this.state.furnitureFilter.length === 0) {
            product.name.includes(this.state.nameFilter);
          } else {
            return (
              product.furniture_style.some(r => furnitureList.includes(r)) &&
              product.name.includes(this.state.nameFilter)
            );
          }
        } else {
          return (
            product.name.includes(this.state.nameFilter) &&
            product.furniture_style.some(r => furnitureList.includes(r)) &&
            product.delivery_time <= MaximumDeliveryDays
          );
        }
      });
      this.setState({ searchResult: result });
    }
  };

  onChangeFilterFurnitureName = e => {
    this.setState(
      {
        nameFilter: e.target.value
      },
      () => this.filterData()
    );
  };

  renderProductCard = () => {
    return this.state.searchResult.length === 0
      ? null
      : this.state.searchResult.map(product => {
          return <Product data={product} key={product.name} />;
        });
  };

  onSelectFurnitureStyle = selectedList => {
    this.setState({ furnitureFilter: selectedList }, () => this.filterData());
  };

  onRemoveFurnitureStyle = selectedList => {
    this.setState({ furnitureFilter: selectedList }, () => this.filterData());
  };

  onSelectDeliveryTime = selectedList => {
    this.setState(
      {
        timeFilter: selectedList
      },
      () => this.filterData()
    );
  };

  onRemoveDeliveryTime = selectedList => {
    this.setState(
      {
        timeFilter: selectedList
      },
      () => this.filterData()
    );
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="box">
            <div className="header">
              <div className="row">
                <div className="col-lg-6 col-12 p20">
                  <input
                    type="text"
                    name="name"
                    className="text"
                    placeholder=" Search Furniture"
                    onKeyUp={this.onChangeFilterFurnitureName}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-12 p20">
                  <Multiselect
                    options={this.state.furnitureStyleOptions} // Options to display in the dropdown
                    selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                    onSelect={this.onSelectFurnitureStyle} // Function will trigger on select event
                    onRemove={this.onRemoveFurnitureStyle} // Function will trigger on remove event
                    displayValue="name" // Property name to display in the dropdown options
                    showCheckbox={true}
                    placeholder="Furniture Style"
                  />
                </div>
                <div className="col-lg-6 col-12 p20">
                  <Multiselect
                    options={this.state.deliveryTimeOptions} // Options to display in the dropdown
                    selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                    onSelect={this.onSelectDeliveryTime} // Function will trigger on select event
                    onRemove={this.onRemoveDeliveryTime} // Function will trigger on remove event
                    displayValue="name" // Property name to display in the dropdown options
                    placeholder="Delivery Time"
                  />
                </div>
              </div>
            </div>
            <div className="content row">{this.renderProductCard()}</div>
          </div>
        </div>
      </>
    );
  }
}
