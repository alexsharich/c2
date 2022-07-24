import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './UI/components/header/Header';
import { Routing } from './UI/routing/Routing';
import { LoginPage } from './UI/pages/loginPage/LoginPage';
import { Footer } from './UI/components/footer/Footer';
import { BasicModal } from './UI/components/modals/basicModal/BasicModal';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from './BLL/store';
import { Modal1 } from './UI/components/modals/modal1/Modal1';
import { setModalAC } from './BLL/modalReducer';


function App() {

  const dispatch =useDispatch()
  const isModal = useSelector<AppRootStateType, boolean>(state => state.modal.isModal)
  const closeModal = () => {
    dispatch(setModalAC(false))
  }

  return (
    <div className="App">
      {isModal && <BasicModal closeModal={closeModal} children={<Modal1 />} />}
      <Header />
      <Routing />
      <Footer />

    </div>
  );
}

export default App;
