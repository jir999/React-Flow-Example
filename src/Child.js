// @flow
import * as React from "react";

type Props = {
  name: string,
  amount: number
};

const ChildComponent = (props: Props): React.Node => {
  return <div> {props.name} </div>;
};

export default ChildComponent;
