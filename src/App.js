import logo from './logo.svg';
import './App.css';

// hook provider by react-redux
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "./store/index";

function App() {

  // accessing global state within a component
  // we can do this 'ad-hoc' in any component in the component tree, however nested the component may be
  const shop = useSelector((state) => state.shop);
  console.log("shop: ", shop);

  const dispatch = useDispatch()

  const allActions = bindActionCreators(actions, dispatch);
  console.log("allActions: ", allActions);

  // destructure
  const { addWidget, removeWidget } = allActions; 

  return (
    <div className="App">
      <h1>{shop}</h1>
      <button onClick={() => addWidget(1)}> Add Widget</button>
      <button onClick={() => removeWidget(1)}> Remove Widget</button>
    </div>
  );
}

export default App;
