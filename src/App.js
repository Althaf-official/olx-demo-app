import { firebase } from './firebase/config'
function App() {
  return (
    <div>
      <button onClick={() => {
        // get document
        firebase.fireStore().collection('users').doc('IUIXHh63sTjxFE3yqm3l').get().then(data=>{

        })
      }}>click me</button>
    </div>
  );
}

export default App;
