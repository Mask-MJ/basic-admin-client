import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { message } from 'antd';
import React, { useRef } from 'react';
import SetForm from './SetForm';
import { userControllerRemove, userControllerFindAll } from '@/services/basic/yonghuguanli';

/**
 * 删除节点
 *
 * @param selectedRows
 */

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
  const actionRef = useRef<ActionType>();
  /** 国际化配置 */

  const columns: ProColumns<API.UserEntity>[] = [
    { title: '账号', dataIndex: 'account' },
    { title: '昵称', dataIndex: 'nickname' },
    {
      title: '是否是管理员',
      dataIndex: 'isAdmin',
      hideInForm: true,
      renderText: (val: boolean) => (val ? '是' : '否'),
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <>
          <SetForm key="config" row={record} />
          <a
            key="subscribeAlert"
            onClick={() => {
              handleRemove(record.id);
            }}
          >
            删除
          </a>
        </>
      ),
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.UserEntity, API.UserControllerFindAllParams>
        headerTitle="用户管理"
        actionRef={actionRef}
        rowKey="id"
        search={{ labelWidth: 120 }}
        toolBarRender={() => [<SetForm key="primary" />]}
        request={userControllerFindAll}
        columns={columns}
      />
    </PageContainer>
  );
};

export default TableList;
