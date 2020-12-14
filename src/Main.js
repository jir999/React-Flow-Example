// @flow
import * as React from "react";

import ChildComponent from "./ChildComponent";

type Props = {
  children?: React.Node,
  name: string,
  amount: number
};

function MainComponent(props: Props): React.Node {
  const increase = (amount: number) => {
    console.log(amount);
  };

  return (
    <div onClick={() => {}}>
      <ChildComponent name={props.name} amount={props.amount}></ChildComponent>
    </div>
  );
}

export default MainComponent;
