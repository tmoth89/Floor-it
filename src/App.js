import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import  * as authActions from './actions/authActions.js';
import CanvasPage from './containers/canvasPage';
import Drag from './components/Drag';
import SignIn from './components/SignIn';

//map state to props
const mapStateToProps = (store) => ({
  firstVarVal: store.auth.firstVarVal,
  userNameStr: store.auth.userNameStr,
  passwordStr: store.auth.passwordStr  
});

//map dispatch to props
const mapDispatchToProps = (dispatch) => ({
   updateFirstVarVal: (e) => dispatch(authActions.firstAction(e.target.value))
}); 

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayFurniture: false,
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.setState({
        displayFurniture: true,
    });
  }

  render(){  
    const headerStyle = {
      textAlign: 'center',
      fontSize: '52px',
      color: 'white',
      fontStyle: 'Impact', 
    }

    const buttonStyle = {
      backgroundColor: 'white',
      width: '1800px',
      height: '100px',
      marginLeft: '15px',
    }

    

    return(
      <Fragment>
<<<<<<< HEAD
        <SignIn/>
        <h1 style={headerStyle}> Floor-it! </h1>
        
      <Canvas />
     
=======
    
 {/* <button className="btn" onClick={this.onButtonClick} style={buttonStyle}> Spawn Furniture </button> */}
        {/* <h1 style={headerStyle}> Floor-it! </h1> */}
       
        <CanvasPage/>
>>>>>>> 4813081f75172126b53eb1fa4b8601552a406bb1
        
         <button className="btn" onClick={this.onButtonClick} style={buttonStyle}> Spawn Furniture </button>
        {this.state.displayFurniture ? <Drag/> : null}
     
     
      
<<<<<<< HEAD
  


      {/* <input className="mr-input" onChange={(e) => {
        this.props.updateFirstVarVal(e);
      }}>TYPE HERE</input> */}
      {/* <p>{this.props.firstVarVal}</p> */}

=======
          
>>>>>>> 4813081f75172126b53eb1fa4b8601552a406bb1
      </Fragment>
    );
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(App);
