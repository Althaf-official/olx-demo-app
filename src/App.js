
import { collection,  getDocs } from "firebase/firestore";
import {db} from './firebase/config'


function App() {
  return (
    <div>
      <button onClick={async() => {
      const querySnapshot =await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      })      
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
