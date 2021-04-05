import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Route, Switch }  from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import HeaderComponent from './components/header-component/header.component'
import SignInSignup from './pages/signin-signup/signin-signup.component'
import { auth , createUserProfileDocument} from './components/firebase/firebase.utils'

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }
  unSubscribeFromAuth = null
  componentDidMount(){
     this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot =>{
          this.setState({
            currentUser:{
              id: snapshot.id,
              ...snapshot.data()
            }
          })
          console.log(this.state)
        })
        
      }else{
        this.setState({currentUser: userAuth})
      }
    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <HeaderComponent currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact={true} path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInSignup}/>
        </Switch>
      </div>
    )
  }
}

export default App;
