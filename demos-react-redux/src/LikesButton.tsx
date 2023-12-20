import { useDispatch, useSelector } from 'react-redux';
import { likesSelector } from './store/selectors';
import { incrementLikes } from './store/slices';

type Props = {
  count: number;
  onIncrement(): void;
}

export function LikesButton({ count, onIncrement }: Props) {
  console.log('LikesButton');

  return (
    <button onClick={() => onIncrement()}>count is {count}</button>
  );
}

function LikesButtonContainer() {
  const count = useSelector(likesSelector);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(incrementLikes())
  }

  return <LikesButton count={count} onIncrement={handleIncrement} />
}

export default LikesButtonContainer;
