import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "./actions";
import { postUsers,delUsers,updateUsers } from "./actions";
import { styled } from "styled-components";

const Table = styled.table`
  border: 2px solid pink;
  table-collapse: collapse;
  background-color: violet;
`;
const TableRow = styled.tr`
  border: 2px solid black;
`;
const Tabledata = styled.td`
  border: 2px solid orange;
  background-color: lightblue;
`;

const FetchRedux = () => {
  const dispatch = useDispatch();
  const [post, setPost] = useState("");
  const { loading, users, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const deleteOnClick = (index) => {
    const DelData = users.filter((_, i) => i !== index);
    dispatch(delUsers(DelData,index));
  };
  const updateOnClick = (index) => {
    console.log(users);
    console.log(index);
    const updateInput=prompt('enter new title')
    const newData=[...users]
    // console.log(updateData);
    // const newData = [...data];
    // newData[index] = formUpData;
    // dispatch(addToArr(newData));
    // console.log(newData[index]);
    // const dataEmpty = { firstname: "", age: "" };
    // setFormUpData(dataEmpty);

    dispatch(updateUsers({ title: updateInput },index))
  };
  const postReqData = (e) => {
    console.log(e.target.value);
    setPost(e.target.value);
  };

  const clickToPost = () => {
    dispatch(postUsers({ title: post }));
  };

  // if (loading) {
  //   return <h1>loading...</h1>;
  // }
  // if (error) {
  //   return <h1>Error...:{error.message}</h1>;
  // }

  return (
    <div>
      <Table>
        <TableRow>
          <th>Title</th>
          <th>DELETE</th>
          <th>UPDATE</th>
        </TableRow>
        {users.map((e, index) => (
          <TableRow>
            <Tabledata>{e.title}</Tabledata>
            <Tabledata>
              <button onClick={() => deleteOnClick(index+1)}>Delete</button>
            </Tabledata>
            <Tabledata>
              <button onClick={() => updateOnClick(index+1)}>Update</button>
            </Tabledata>
          </TableRow>
        ))}
      </Table>
      <input type="text" placeholder="topost" onChange={postReqData}></input>
      <button onClick={clickToPost}>Post</button>
    </div>
  );
};

export default FetchRedux;
