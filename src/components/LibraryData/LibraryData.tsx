import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "antd";
import { Container } from "react-grid-system";
import { AppStateType } from "../../redux/ReduxStore";
import { Table, Tooltip } from "antd";
import { getDataTC } from "../../redux/DataReducer";

export const LibraryData: React.FC = () => {
  const data = useSelector((state: AppStateType) => state.dataReducer.data);
  const loading = useSelector(
    (state: AppStateType) => state.dataReducer.isFetching
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataTC());
  }, []);
  const columns = [
    {
      title: "Ордер",
      dataIndex: "order",
      key: "order",
      fixed: "left",
      width: 50,
      render: (order: number) => (
        <NavLink to={`order/` + order}>
          {" "}
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            size={{
              xs: 24,
              sm: 32,
              md: 40,
              lg: 64,
              xl: 80,
              xxl: 100,
            }}
          >
            {order}
          </Avatar>
        </NavLink>
      ),
    },
    {
      title: "Название",
      dataIndex: "fullname",
      key: "fullname",
      fixed: "left",
      width: 120,
      sorter: (a: { fullname: string }, b: { fullname: string }) => {
        const nameA = a.fullname.toLowerCase(),
          nameB = b.fullname.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      },
      ellipsis: {
        showTitle: false,
      },
      render: (fullname: {} | null | undefined) => (
        <Tooltip placement="topLeft" title={fullname}>
          {fullname}
        </Tooltip>
      ),
    },
    {
      title: "Регион",
      dataIndex: "territory",
      key: "territory",
      fixed: "left",
      width: 120,
      sorter: (a: { territory: string }, b: { territory: string }) => {
        const nameA = a.territory.toLowerCase(),
          nameB = b.territory.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      },
      ellipsis: {
        showTitle: false,
      },
      render: (territory: {} | null | undefined) => (
        <Tooltip placement="topLeft" title={territory}>
          {territory}
        </Tooltip>
      ),
    },
    {
      title: "Пользователей",
      dataIndex: "users",
      key: "users",
      width: 100,
      sorter: (a: { users: number }, b: { users: number }) => a.users - b.users,
    },
    {
      title: "Просмотров",
      dataIndex: "visits",
      key: "visits",
      width: 80,
      sorter: (a: { visits: number }, b: { visits: number }) =>
        a.visits - b.visits,
    },
  ] as any;
  return (
    <Container fluid>
      <div style={{ marginTop: "50px" }}>
        <Table
          columns={columns}
          dataSource={data}
          loading={loading}
          scroll={{ x: 850 }}
        />
      </div>
    </Container>
  );
};
