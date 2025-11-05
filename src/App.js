import Counter from './Counter/Counter.jsx';
import Form from './Forms/Forms.jsx';
import {Routes,Route} from 'react-router-dom';
import Nav from './Nav/Nav.jsx';
import Padding from './Padding/Padding.jsx';
import Border from './Border/Border.jsx';
import Margin from './Margin/Margin.jsx';
import Box from './Box/Box.jsx';
import Forms from './Forms/Forms.jsx';
import Rendering from './Rendering/Rendering.jsx';
import Images from './Images/Imges.jsx';
import Animation from './Animations/Animation.jsx';
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
        <Route path='/Box' element={<Box/>}/>
        <Route path='/Forms' element={<Forms/>}/>
        <Route path='/Rendering' element={<Rendering/>}/>
        <Route path='/Images' element={<Images/>}/>
        <Route path='/Animation' element={<Animation/>}/>
      </Routes>
    </>
  );
}
export default App;