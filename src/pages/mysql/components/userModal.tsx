import { Modal, Button, Form, Input } from 'antd'
import { useForm } from 'antd/lib/form/Form';
import React,{useEffect} from 'react';

export const UserModal = (props) => {
    const { visible, record, closeModalHandler,okModalHandler } = props;
    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
   
    useEffect(()=>{
        form.setFieldsValue(record);
    },[visible])

    const onOk=()=>{
        form.submit();

    }
    return (
        <Modal
            title="Modal"
            okText="确认"
            cancelText="取消"
            visible={visible}
            onCancel={closeModalHandler}
            onOk={onOk}
            forceRender 
        >
            <Form form={form}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
               onFinish={okModalHandler}
            >
                <Form.Item
                    label="username"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="email"
                    name="email"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="time"
                    name="create_time"
                >
                    <Input readOnly></Input>
                </Form.Item>
            </Form>
        </Modal>
    )
}