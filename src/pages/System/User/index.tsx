import type { ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button, message, Popconfirm } from 'antd';
import React from 'react';
import SetForm from './SetForm';
import { userControllerRemove, userControllerFindAll } from '@/services/basic/yonghuguanli';
import { FormattedMessage, useIntl } from '@umijs/max';

const handleRemove = async (id: number) => {
  const hide = message.loading('正在删除');
  try {
    await userControllerRemove({ id });
    hide();
    message.success('删除成功，即将刷新');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败，请重试');
    return false;
  }
};

const TableList: React.FC = () => {
  const intl = useIntl();
  const popconfirmTitle = intl.formatMessage({
    id: 'component.table.action.delete.title',
  });
  const columns: ProColumns<API.UserEntity>[] = [
    { title: '账号', dataIndex: 'account' },
    { title: '昵称', dataIndex: 'nickname' },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      // valueType: 'dateTime',
      valueType: 'dateRange',
      render: (_, record) => {
        return <span>{record.createdAt.toString()} </span>;
      },
      search: {
        transform: (value) => {
          return {
            'params[beginTime]': value[0],
            'params[endTime]': value[1],
          };
        },
      },
    },
    { title: '更新时间', dataIndex: 'updatedAt', valueType: 'option' },
    {
      title: '操作',
      dataIndex: 'action',
      valueType: 'option',
      render: (_, record) => (
        <>
          <SetForm key="config" row={record} />
          <Popconfirm title={popconfirmTitle} onConfirm={() => handleRemove(record.id)}>
            <Button type="link">
              <FormattedMessage id="component.table.action.delete" />
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.UserEntity, API.UserControllerFindAllParams>
        rowKey="id"
        toolBarRender={() => [<SetForm key="primary" />]}
        request={userControllerFindAll}
        columns={columns}
      />
    </PageContainer>
  );
};

export default TableList;
