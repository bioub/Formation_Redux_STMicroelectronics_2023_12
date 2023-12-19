import { useDispatch, useSelector } from "react-redux";
import { nameSelector } from "./store/selectors";
import { updateName } from "./store/slices";

function HelloWorld() {
  // const [name, setName] = useState('Toto');
  const name = useSelector(nameSelector);
  const dispatch = useDispatch();

  console.log('Helloworld');
  

  function setName(newName: string) {
    dispatch(updateName(newName));
  }

  return <div>
    <input value={name} onChange={(e) => setName(e.target.value)} />
    <p>Hello {name}</p>
  </div>
}

export default HelloWorld;
