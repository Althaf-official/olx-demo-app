
import { doc,  deleteDoc } from "firebase/firestore";
import {db} from './firebase/config'


function App() {
  return (
    <div>
      <button onClick={async() => {
      await deleteDoc(doc(db, "products","NA9s2cOZCCMVhULJgYmf"));
      }}>click me</button>
    </div>
  );
}

export default App;
