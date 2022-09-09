import Navbar from "./components/Navbar"
import Course from "./components/Course"
import Special from "./components/Special"
const App = () => {
  return (
<>
<Navbar />
<Course category = "anime" genero = "otaku" cantidad = "10"/>
<Course category = "cine" genero = "fantasia" cantidad = "10"/>
<Special unlimited = "piezas ilimitadas" /> 
</>
  );
}
export default App;

