// import Item from 'antd/lib/list/Item';
import React,{Fragment,Component} from 'react';


// process.env.REACT_APP_NAME_VARIABLE=window.Item; (lấy dữ liệu all)
window.window.window.total=0;
export default class Card extends Component { 
 
  shoppingCart=[];
  constructor(prop){
    super(prop);
    this.state={
      reload:false,
    }
  }
  componentWillMount (){
    this.getDate();
}
getDate=()=>{
  var getItem= JSON.parse(localStorage.getItem('ShoppingCart'));
   console.log(getItem)
   this.shoppingCart=getItem;
  }

  // Plus Product
  plusPro=(index)=>{
    this.shoppingCart[index].quantity= this.shoppingCart[index].quantity + 1;
   window.total=0;
    localStorage.setItem('ShoppingCart',JSON.stringify(this.shoppingCart))
    this.setState({
      reload: !this.state.reload,
    })
  }

  // Minus product
  misusPro=(index)=>{
    if(this.shoppingCart[index].quantity > 1){
      this.shoppingCart[index].quantity= this.shoppingCart[index].quantity - 1;
      window.total=0;
      localStorage.setItem('ShoppingCart',JSON.stringify(this.shoppingCart))
      this.setState({
        reload: !this.state.reload,
      })
    }
  }

  // Delete a product
  deletePro=(id)=>{
    this.shoppingCart.splice(id,1);
    localStorage.setItem('ShoppingCart',JSON.stringify(this.shoppingCart))
    window.total=0;
    this.setState({
      reload: !this.state.reload,
    })
    alert("Removed!")
  }

  // Push Data into JSON
  pushData=()=>{
    console.log(this.shoppingCart)
  }

    render() {
      console.log(this.shoppingCart)
      if(this.shoppingCart==null){
        return (      
          <Fragment>
               <table style={{width:'100%'}}>
              <thead style={{backgroundColor:'#0d0c0c', color:'#faf9f7'}}>
                <tr>
                  <th style={{padding:'10px 65px'}}>Img</th>
                  <th style={{padding:'10px'}}>Product</th>
                  <th style={{padding:'10px'}}>Price</th>
                  <th style={{padding:'10px'}}>Quantity</th>
                  <th style={{padding:'10px',columnCount:'2'}}></th>
                  <th></th>
                </tr>
              </thead>
              </table>
          </Fragment>
        )
      }

      else{
        return (      
         <Fragment>
            <table style={{width:'100%'}}>
              <thead style={{backgroundColor:'#0d0c0c', color:'#faf9f7' }}>
                <tr>
                  <th style={{padding:'10px 65px'}}>Img</th>
                  <th style={{padding:'10px'}}>Product</th>
                  <th style={{padding:'10px'}}>Price</th>
                  <th style={{padding:'10px'}}>Quantity</th>
                  <th style={{padding:'10px',columnCount:'2'}}>Total</th>
                  <th></th>
                </tr>
              </thead>
            <tbody>
            {
            this.shoppingCart.map((Product,index)=>{
          window.total=window.total + Product.quantity*Product.price
              return(
                <Fragment>
                <tr style={{borderBottom:'3px solid #8a8987'}}>
                  <td style={{paddingTop:'5px',paddingBottom:'5px'}}><img src={Product.detail_image} style={{width:'150px',height:'120px'}}></img></td>
                  <td>{Product.name}</td>
                  <td>$ &nbsp;{Product.price}</td>
                  <td>
                  <i className="fas fa-minus"style={{color:'red', paddingRight:'9px'}} onClick={()=>this.misusPro(index)} ></i>
                 <input type="text" value={Product.quantity} style={{width:'35px',paddingLeft:'8px'}}/> 
                  <i className="fas fa-plus" style={{color:'red', paddingLeft:'8px'}}onClick={()=>this.plusPro(index)} ></i>
                  </td>
                  <td>$ &nbsp;{Product.quantity*Product.price}</td>
                  <td><i className="far fa-trash-alt" style={{color:'red'}} onClick={()=>this.deletePro(index)}> </i></td>
                </tr>
                </Fragment>
              );
            }) 
          }
    </tbody>
    </table>   
    <div className="row" style={{marginTop:'20px'}}>
      <div className='col-sm-3' style={{marginLeft:'55px'}}>
      <div style={{border:'2px solid #c9c8c3', width:'220px',}}>
        <div className='row'>
          <div className='col-sm-6' style={{padding:'10px'}}>
            <p1 style={{paddingLeft:'25px'}} >DISCOUNT</p1>
          </div>
          <div className='col-sm-6'style={{padding:'10px'}}>
            <p1 style={{paddingLeft:'30px'}}>$ &nbsp;0.00 </p1>
          </div>
        </div>
      </div>
      </div>

      <div className='col-sm-3' style={{marginLeft:'80px'}}>
      <div style={{border:'2px solid #c9c8c3', width:'220px',}}>
        <div className='row'>
          <div className='col-sm-6' style={{padding:'10px'}}>
            <p1 style={{paddingLeft:'25px'}}>DELIVERY</p1>
          </div>
          <div className='col-sm-6'style={{padding:'10px'}}>
            <p1 style={{paddingLeft:'30px'}}>$ &nbsp;0.00 </p1>
          </div>
        </div>
      </div>
      </div>
     
      <div className='col-sm-3' style={{marginLeft:'80px'}}>
      <div style={{border:'2px solid #c9c8c3', width:'220px',}}>
        <div className='row'>
          <div className='col-sm-6' style={{padding:'10px'}}>
            <p1 style={{paddingLeft:'25px'}}>SUBTOTAL</p1>
          </div>
          <div className='col-sm-6'style={{padding:'10px'}}>
            <p1>$ &nbsp;{window.window.total} </p1>
          </div>
        </div>
      </div>
      </div>
    </div>
    <button style={{marginLeft:'79.2%',marginBottom:'20px', marginTop:'30px'}} type="submit" onClick={()=>this.pushData()} className='btn btn-outline-success'>Check out</button>
  </Fragment>
        );
      }
    }
   
  }
  
