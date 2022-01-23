import { Modal, Button } from 'antd'

export const UserModal = (props) => {

    return (
        <Modal
            title="Modal"
            okText="确认"
            cancelText="取消"
            visible={props.visible}
        >
            hello
        </Modal>
    )
}