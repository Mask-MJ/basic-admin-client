import { userControllerCreate, userControllerUpdate } from '@/services/basic/yonghuguanli';
import { ModalForm, ProFormText } from '@ant-design/pro-components';
import React from 'react';
import { Button, Form, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

type SetFormProps = {
  row?: API.UserEntity;
};

export default (props: SetFormProps) => {
  const [form] = Form.useForm<API.CreateUserDto>();
  const messageText = props.row ? '修改' : '新增';
  return (
    <ModalForm
      title={`${messageText}用户`}
      width="400px"
      layout="horizontal"
      trigger={
        props.row ? (
          <a key="config">{messageText}</a>
        ) : (
          <Button type="primary">
            <PlusOutlined /> {messageText}
          </Button>
        )
      }
      form={form}
      modalProps={{ destroyOnClose: true }}
      onFinish={async (value) => {
        if (props.row) {
          await userControllerUpdate({ id: props.row.id }, props.row);
        } else {
          await userControllerCreate(value);
        }
        message.success(`${messageText}成功`);
        return true;
      }}
    >
      <ProFormText
        rules={[{ required: true, message: '昵称为必填项' }]}
        label="昵称"
        width="md"
        name="nickname"
      />
    </ModalForm>
  );
};
