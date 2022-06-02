
import { doc,  setDoc } from "firebase/firestore";
import {db} from './firebase/config'


function App() {
  return (
    <div>
      <button onClick={async() => {
      await setDoc(doc(db, "products","qyIgEVxu9qG0eDcUVG2s"), {
        name: "california"
      });      
      }}>click me</button>
    </div>
  );
}

export default App;
