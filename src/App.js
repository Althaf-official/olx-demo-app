import { Firebase } from './firebase/config'
function App() {
  return (
    <div>
      <button onClick={() => {
        // get document
        Firebase.fireStore().collection('products').get().then(data=>{
        })
      }}>click me</button>
    </div>
  );
}

export default App;
