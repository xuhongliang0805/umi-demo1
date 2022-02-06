import React, { useState } from 'react'
import { Table, Tag, Space, Popconfirm } from 'antd';
import { connect } from 'umi'
import { userModal } from './components'
import { UserModal } from './components/userModal';
const index = ({ users, dispatch }) => {
  const [modalVisible, setVisible] = useState(false);
  const [record, setRecord] = useState(undefined);
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'time',
      dataIndex: 'create_time',
      key: 'create_time',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a onClick={() => {
            editHandler(record);
          }}>Edit</a>
          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={()=>{deleteHandler(record.id)}}
            okText="Yes"
            cancelText="No"
          >
          <a >Delete</a>
        </Popconfirm>
        </Space >
      ),
    },
  ];
const deleteHandler=(id) => {
  console.log(id)
  dispatch({
    type: 'users/deleteRemote',
    payload: id
  })
}
const okModalHandler = (values) => {
  setVisible(false);
  let id = record?.id;
  dispatch({
    type: 'users/editRemote',
    payload: { id, values }
  })
}
const closeModalHandler = () => {
  setVisible(false);
}
const editHandler = (record) => {
  setVisible(true);
  setRecord(record);
}
return <div className='userlist'>
  <Table columns={columns} dataSource={users.data} rowKey="id" />
  <UserModal visible={modalVisible} record={record} closeModalHandler={closeModalHandler} okModalHandler={okModalHandler}></UserModal>
</div>
}

const mapStateToProps = ({ users }) => {
  return {
    users
  };
}

export default connect(mapStateToProps)(index);