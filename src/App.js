import { firebase } from './firebase/config'
function App() {
  return (
    <div>
      <button onClick={() => {
        // get document
        const liam = await firebase.fireStore().collection('users').doc('liam').get()
      }}>click me</button>
    </div>
  );
}

export default App;
