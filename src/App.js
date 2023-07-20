import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QuizHome from './Pages/QuizHome';
import './App.css'
import Question from './Pages/Questions';
import Resposta from './Pages/Resposta';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<QuizHome/>}></Route>
        <Route path='/quiz' element={<Question/>}></Route>
        <Route path='/respostas/:id' element={<Resposta/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
