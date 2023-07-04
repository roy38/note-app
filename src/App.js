import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import NoteForm from './components/NoteForm';
import MyTable from './components/MyTable';
import Login from './components/LoginForm';
import Register from './components/RegisterForm';
import './App.css';

function App() {
  return (
    <>
      <Header/>
        <main className='red-color'>
          <Container>
            <Routes>
              <Route path="/" element={ <MyTable/> } />
              <Route path="/addnote" element={ <NoteForm/> } />
              <Route path="/login" element={ <Login/> } />
              <Route path="/register" element={ <Register/> } />
            </Routes>
          </Container>
        </main>
      <Footer/>
    </>
  );
}

export default App;
