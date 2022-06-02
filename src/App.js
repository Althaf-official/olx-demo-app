
import { doc,  deleteDoc } from "firebase/firestore";
import {db} from './firebase/config'


function App() {
  return (
    <div>
      <button onClick={async() => {
      await deleteDoc(doc(db, "products","aiyiW7LjJ3hUmrAKICG8")).then(()=>{
        console.log('Done')
      })
      }}>click me</button>
    </div>
  );
}

export default App;
