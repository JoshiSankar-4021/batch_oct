import Counter from './Counter/Counter.jsx';
import Form from './Forms/Forms.jsx';
import {Routes,Route} from 'react-router-dom';
import Nav from './Nav/Nav.jsx';
import Padding from './Padding/Padding.jsx';
import Border from './Border/Border.jsx';
import Margin from './Margin/Margin.jsx';
function App(){
  return(
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Counter/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/padding' element={<Padding/>}/>
        <Route path='/border' element={<Border/>}/>
        <Route path='/Margin' element={<Margin/>}/>
      </Routes>
    </>
  );
}
export default App;