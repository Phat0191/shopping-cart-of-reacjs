import React, { Component, Fragment } from 'react';
import Product from './Trending';


window.Item=[];
export default class Card extends Component { 
  constructor(props){
    super(props)
    if(localStorage.getItem('ShoppingCart')){
      window.Item=JSON.parse(localStorage.getItem('ShoppingCart'))
    }
  }

Itemcard=()=>{
  var arr=({
     id: this.props.id,
    name: this.props.name,
    quantity: 1,
    detail_image: this.props.detail_image,
    price: this.props.price,
  });
  this.Pushitemcard(arr);
} 

  Pushitemcard=(arr)=>{
    var kt=0;
    var item_arr=arr;
    // console.log(item_arr.name)
    if(window.Item==''){
      window.Item.push(item_arr)
      this.pushLocal()
    }
    else{
      window.Item.map(item=>{
      if(item.name==item_arr.name){
        item.quantity=item.quantity+1;
        kt=1;
        this.pushLocal()
      }
    })
    if(kt==0){
      window.Item.push(item_arr)
      this.pushLocal()
    }}     
  //  console.log(window.Item)
   }
   
   pushLocal=()=>{
    localStorage.setItem('ShoppingCart',JSON.stringify(window.Item));
  }

  render() {
      return (       
       <Fragment>
         <div className="col-lg-3 col-sm-6">
                <div className="product text-center skel-loader">
                  <div className="d-block mb-3 position-relative"><a className="d-block" href="detail.html"><img className="img-fluid w-100" src={[this.props.detail_image]} alt="..." /></a>
                    <div className="product-overlay">
                      <ul className="mb-0 list-inline">
                        <li className="list-inline-item m-0 p-0"><button type="button" className="btn btn-sm btn-dark" onClick={()=>this.Itemcard()} >Add To Card</button></li>
                      </ul>
                    </div>
                  </div>
                  <h6> <a className="reset-anchor" href="detail.html">{this.props.name}</a></h6>
                  <p className="small text-muted">${this.props.price}</p>
                </div>
              </div>
       </Fragment>
      );
  }
}