import React from 'react';
import './App.css';
import { createStructuredSelector } from 'reselect';
import HomePage from './pages/homepage/homepage.component'
import { connect } from 'react-redux'
import { Route, Switch, Redirect }  from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import HeaderComponent from './components/header-component/header.component'
import SignInSignup from './pages/signin-signup/signin-signup.component'
import { auth , createUserProfileDocument} from './components/firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.action'
import { selectCurrentUser } from './redux/user/user.selector';

class App extends React.Component{

  // constructor(){
  //   super();
  //   this.state = {
  //     currentUser : null
  //   }
  // }
  unSubscribeFromAuth = null
  componentDidMount(){

    const{setCurrentUser} = this.props
     this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot =>{
         setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          })
          console.log(this.state)
        })
        
      }else{
        setCurrentUser(userAuth)
      }
    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <HeaderComponent/>
        <Switch>
          <Route exact={true} path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/signin' render={() => 
            this.props.currentUser ? (
            <Redirect to='/' />
            ): (
            <SignInSignup/>)}/>
        </Switch>
      </div>
    )
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps )(App);
