
import { collection,  addDoc } from "firebase/firestore";
import {db} from './firebase/config'


function App() {
  return (
    <div>
      <button onClick={async() => {
      await addDoc(collection(db, "products"), {
        name: "Los Angeles",
        price: 14000
      }); 
      }}>click me</button>
    </div>
  );
}

export default App;
