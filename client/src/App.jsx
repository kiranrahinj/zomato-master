

import HomeLayoutHoc from "./HOC/Home.Hoc";
import Temp from "./Component/temp";

function App() {
return <>

< HomeLayoutHoc path="/" exact component={Temp}/>

</>
}

export default App;
