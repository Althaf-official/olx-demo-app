
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase/config'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function App() {
  return (
    <div>
      <button onClick={async () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth,'mascreation007@gmail.com', '12345678')
          .then((userCredential) => {
            console.log(userCredential)
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            const querySnapshot =  getDocs(collection(db, "products"));
            console.log(querySnapshot)
            querySnapshot.forEach((doc) => {
              console.log(doc);
            })
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage)
          });
      }}>click me</button>
    </div>
  );
}
export default App;
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

