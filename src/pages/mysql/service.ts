import { request } from 'umi'
import { message } from 'antd';
export const getRemoteList = async () => {
  // const data = [
  //     {
  //         key: '1',
  //         name: 'John Brown',
  //         age: 32,
  //         address: 'New York No. 1 Lake Park',
  //         tags: ['nice', 'developer'],
  //     },
  //     {
  //         key: '2',
  //         name: 'Jim Green',
  //         age: 42,
  //         address: 'London No. 1 Lake Park',
  //         tags: ['loser'],
  //     },
  //     {
  //         key: '3',
  //         name: 'Joe Black',
  //         age: 32,
  //         address: 'Sidney No. 1 Lake Park',
  //         tags: ['cool', 'teacher'],
  //     },
  // ];
  return request('/api/users', {
    method: 'get',
  })
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

}
export const editRemote = async ({ id, values }) => {
  console.log(id)
  return request(`/api/users/${id}`, {
    method: 'put',
    data: values
  })
    .then(function (response) {
      console.log('editRemote：'+response)
      message.success('编辑成功！');
    })
    .catch(function (error) {
      console.log('editRemote：'+error)
      message.error('编辑失败！');
    });

}
export const createRemote = async (value) => {
  return request('/api/users', {
    method: 'post',
    data: value
  })
    .then(function (response) {

      message.success('新增成功！');
    })
    .catch(function (error) {
      message.error('新增失败！');
    });

}

export const deleteRemote = async (id) => {
  return request(`/api/users/${id}`, {
    method: 'delete'
  })
    .then(function (response) {
      message.success('删除成功！');
    })
    .catch(function (error) {
      message.error('删除失败！');
    });

}