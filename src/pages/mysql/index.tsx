import React from 'react'
import { Table, Tag, Space } from 'antd';
import { connect } from 'umi'
import {userModal} from './components'
import { UserModal } from './components/userModal';
const index = ({ users }) => {
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },{
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
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  return <div className='userlist'>
    <Table columns={columns} dataSource={users.data} />
    <UserModal visible={false}></UserModal>
    </div>
}

const mapStateToProps = ({ users }) => {
  return {
    users
  };
}

export default connect(mapStateToProps)(index);