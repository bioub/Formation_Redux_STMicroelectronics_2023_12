import { useDispatch, useSelector } from 'react-redux';
import { likesSelector } from './store/selectors';
import { incrementLikes } from './store/slices';

function LikesButton() {
  // const [count, setCount] = useState(0);
  const count = useSelector(likesSelector);
  const dispatch = useDispatch();

  function setCount() {
    dispatch(incrementLikes());
  }

  console.log('LikesButton');

  return (
    <button onClick={() => setCount()}>count is {count}</button>
  );
}

export default LikesButton;
