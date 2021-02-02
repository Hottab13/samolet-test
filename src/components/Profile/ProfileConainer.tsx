import React from "react";
import { connect, useSelector } from "react-redux";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";
import { AppStateType } from "../../redux/ReduxStore";

interface IMyProps {}

interface IReactRouterParams {
  orderId: string | undefined;
}

const ProfileContainer: React.FC<
  IMyProps & RouteComponentProps<IReactRouterParams>
> = (props) => {
  const data = useSelector((state: AppStateType) => state.dataReducer.data);
  const orderId: any = props.match.params.orderId;
  if (data[orderId] === undefined) {
    return <Redirect to={"/"} />;
  }
  return (
    <div style={{ marginTop: "50px" }}>
      <h1>Подробная информация о библиотеке</h1>
      {Object.entries(data[orderId - 1]).map(([key, value]) => {
        return (
          <div key={key}>
            {key}:<b>{value}</b>
          </div>
        );
      })}
    </div>
  );
};

export default compose<React.ComponentType>(
  connect(null, null),
  withRouter
)(ProfileContainer);
