
import { collection, getDocs } from "firebase/firestore";
import {db} from './firebase/config'

function App() {
  return (
    <div>
      <button onClick={async() => {
       const querySnapshot =await getDocs(collection(db, "products"));
       querySnapshot.forEach((doc) => {
         console.log(doc.data());
       })
      }}>click me</button>
    </div>
  );
}

export default App;
