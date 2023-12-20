import { connect } from "react-redux";
import { nameSelector } from "./store/selectors";
import { Component, ReactNode } from "react";
import { RootState } from "./store/types";
import { Dispatch } from "@reduxjs/toolkit";
import { updateName } from "./store/slices";

type Props = {
  prenom: string;
  onValueChange(value: string): void;
}
class HelloWorld extends Component<Props> {
  render(): ReactNode {
    // const [name, setName] = useState('Toto');
    // const name = useSelector(nameSelector);
    // const dispatch = useDispatch();
  
    // console.log('Helloworld');
    const { prenom, onValueChange } = this.props;
    
  
    function setName(newName: string) {
      onValueChange(newName);
    }
  
    return <div>
      <input value={prenom} onChange={(e) => setName(e.target.value)} />
      <p>Hello {prenom}</p>
    </div>
  }
}

function mapStateToProps(state: RootState) {
  return {
    prenom: nameSelector(state),
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    onValueChange(value: string) {
      dispatch(updateName(value));
    }
  }
}

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(HelloWorld);

// <ExternalComponent>
//    <HelloWorld prenom={nameSelector(state)}></HelloWorld>
// </ExternalComponent>