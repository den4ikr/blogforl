import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import PostBlockContainer from './components/PostBlock/PostBlockContainer';
import PostsContainer from './components/Posts/PostsContainer';
import { AppStateType } from './redux/redux-store';
import { initiliseApp } from "./redux/app-reducer";
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Preloader from './components/Preloader/Preloader';

type PropsType = {
  initilised: boolean,
  initiliseApp: () => void,
}

const App: React.FunctionComponent <PropsType> = (props) => {

  useEffect ( () => {
    props.initiliseApp ()
  }, [] )

  if (!props.initilised) {
    return (
      <Preloader />
    )
  }

  return (
    <div>
      <Header />
      <div className = "container" >
        <Route exact path = "/" render = { () => <PostsContainer /> } />
        <Route exact path = "/postblock/:postId?" render = { () => <PostBlockContainer /> } />
      </div>
    </div>
  );
}

let mapStateToProps = (state: AppStateType) => {
  return {
    initilised: state.app.initilised,
  }
}

export default connect (mapStateToProps, {initiliseApp})(App);
