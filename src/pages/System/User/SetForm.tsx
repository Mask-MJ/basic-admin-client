import { userControllerCreate, userControllerUpdate } from '@/services/basic/yonghuguanli';
import { ModalForm, ProFormSelect, ProFormText } from '@ant-design/pro-components';
import React from 'react';
import { Button, Form, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useIntl } from '@umijs/max';

type SetFormProps = {
  row?: API.UserEntity;
};

export default (props: SetFormProps) => {
  const intl = useIntl();
  const [form] = Form.useForm<API.CreateUserDto>();
  const messageText = props.row
    ? intl.formatMessage({ id: 'component.table.action.update' })
    : intl.formatMessage({ id: 'component.table.action.create' });
  return (
    <ModalForm
      title={`${messageText}用户`}
      width="400px"
      layout="horizontal"
      trigger={
        props.row ? (
          <Button type="link">{messageText}</Button>
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
        rules={[{ required: true, message: '账号为必填项' }]}
        label="账号"
        name="account"
      />
      <ProFormText
        rules={[{ required: true, message: '用户昵称为必填项' }]}
        label="用户昵称"
        name="nickname"
      />
      <ProFormText
        rules={[{ required: true, message: '用户密码为必填项' }]}
        label="用户密码"
        name="password"
      />
      <ProFormSelect label="角色" name="password" />
    </ModalForm>
  );
};
