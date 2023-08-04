import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "./actions";
import { postUsers, delUsers, updateUsers } from "./actions";
import { styled } from "styled-components";
import { connect } from "react-redux";
// import { Button } from "antd";
import { Menu, Dropdown, Button, Icon, message, Input } from "antd";

const Table = styled.table`
  border: 2px solid pink;
  table-collapse: collapse;
  background-color: lightblue;
  width: 100%;
`;
const TableRow = styled.tr`
  border: 2px solid black;
`;
const Tabledata = styled.td`
  border: 2px solid orange;
  background-color: lightblue;
`;

const FetchRedux = ({ users, dispatchData }) => {
  const dispatch = useDispatch();
  const [post, setPost] = useState("");
  const [update, setupdate] = useState("");
  const { loading, error } = useSelector((state) => state);
  // const { users } = useSelector((state) => state);

  const [indexVal, setindex] = useState(null);
  useEffect(() => {
    dispatchData();
  }, []);

  const deleteOnClick = (index) => {
    // const DelData = users.filter((_, i) => i !== index);
    dispatch(delUsers(index));
  };
  const updateOnClick = (index) => {
    setindex(index - 1);
    console.log(index);
    const updateInput = prompt("enter new title");
    const newData = [...users];
    newData[index] = { id: index + 1, title: updateInput };
    dispatch(updateUsers(index, newData));
    console.log(update);
    // const newData = [...data];
    // newData[index] = formUpData;
    // dispatch(addToArr(newData));
    // console.log(newData[index]);
    // const dataEmpty = { firstname: "", age: "" };
    // setFormUpData(dataEmpty);
    // dispatch(updateUsers({ title: updateInput }, index));
  };
  const postReqData = (e) => {
    console.log(e.target.value);
    setPost(e.target.value);
  };

  const clickToPost = () => {
    const postid = users.length + 1;
    dispatch(postUsers({ id: postid, title: post }));
  };

  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    return <h1>Error...:{error.message}</h1>;
  }

  return (
    <div>
      <Table>
        <TableRow>
          <th>ID</th>
          <th>Title</th>
          <th>DELETE</th>
          <th>UPDATE</th>
        </TableRow>
        {users.map((e, index) => (
          <TableRow>
            <Tabledata>{e.id}</Tabledata>
            <Tabledata>{e.title}</Tabledata>
            <Tabledata>
              <Button type="primary" onClick={() => deleteOnClick(index)}>
                Delete
              </Button>
            </Tabledata>
            <Tabledata>
              <Button type="primary" onClick={() => updateOnClick(index)}>
                Update
              </Button>
            </Tabledata>
          </TableRow>
        ))}
      </Table>
      <Input type="text" placeholder="topost" onChange={postReqData}></Input>
      <Dropdown>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Hover me
        </a>
      </Dropdown>
      <Button type="primary" onClick={() => clickToPost()}>
        Post
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const useDispatchToProps = (dispatch) => {
  return {
    dispatchData: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, useDispatchToProps)(FetchRedux);
