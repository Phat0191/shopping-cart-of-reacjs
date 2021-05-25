import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Card from '../Content/Card';
import axios from 'axios';
import { fixControlledValue } from 'antd/lib/input/Input';
export class Product extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading:false,
      _drink:[],
      _user:[],
      _searching:[],
      value: "",
      data: [{id: "1",
      categories: 40349,
      name: "Generic Steel Shoes",
      detail_image: "http://placeimg.com/640/480",
      description: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      price: "689.00"}],
      searchText: false
    }
    this.filterData= this.filterData.bind(this);
  }

  filterData(e) {
    console.log(this.state._drink);
    this.setState({value: e.target.value});
    console.log(this.state.value);
    if (this.state.value === "")
      { this.setState({
        data: this.state._drink.data,
      });
      console.log(this.state._data);}
    else {
      const filtered = this.state._drink.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(this.state.value)));
      this.setState({
        data: filtered.data,
      });
      console.log(this.state.data);
    }
  }

  getDataDrink = () => {
    axios({
        method: 'GET',
        url: 'http://localhost:8080/api/products',
        data: null
    }).then(res => {
        this.setState({ 
          loading:true,
          _drink: res.data,
        });

    }).catch(err => { }); 
}

  componentDidMount(){
    this.getDataDrink();
  }

//   deleteProduct = (id) => {
//      callApi(`/Product/${id}`,'DELETE',null).then((item)=>{
//         this.setState({
//            _products:this.state._products.filter(product=>product.id!=id)
//         })
//      })
//   }

  render() {
    const {loading,_drink} = this.state;
    if(!loading){
       return(
          <h1>Loading...</h1>
       )
    }
    
    return (
      <div>
      <div className="col-lg-12 form-group">
        <label className="text-small text-uppercase" htmlFor="address">Address line 2</label>
        <input className="form-control form-control-lg" id="addressalt" type="text" placeholder="Apartment, Suite, Unit, etc (optional)" onChange={this.filterData}/>
      </div>
      <section className="py-5">
              <div className="row">
                        { 
                          
                            this.state._drink.map(item=>{
                              return (<Card id={item.id} name={item.name} detail_image={item.detail_image} price={item.price}></Card>);
                            })
                             
                           }
                    
                     </div>
                     {/* <button onClick={this.handleClick("Handmade")}>Click Me</button>; */}
            </section>
            </div>
    )
  }
}
 
export default Product;
