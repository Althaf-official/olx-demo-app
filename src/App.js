
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
//crud operation completed

// in firestore database anyone can read ,write. now i changed to only authenticated person only can read and write
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }



export default App;
