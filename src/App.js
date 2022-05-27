import { firebase } from './firebase/config'
function App() {
  return (
    <div>
      <button onClick={() => {
        // get document
        firebase.fireStore().collection('users').doc('liam').get().then(data=>{
          
        })
      }}>click me</button>
    </div>
  );
}

export default App;
