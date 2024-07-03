declare namespace API {
  type AnalysisTaskControllerExecuteParams = {
    id: number;
  };

  type AnalysisTaskControllerFindAllParams = {
    /** 任务名称 */
    name?: string;
    /** 状态 (0: 待执行, 1: 执行中, 2: 已完成, 3: 失败) */
    status?: number;
    /** 工厂ID */
    factoryId?: number;
    /** 页码 */
    page?: number;
    /** 每页数量 */
    pageSize?: number;
    /** 开始时间 */
    beginTime?: string;
    /** 结束时间 */
    endTime?: string;
  };

  type AnalysisTaskControllerFindOneParams = {
    id: number;
  };

  type AnalysisTaskControllerRemoveParams = {
    id: number;
  };

  type AnalysisTaskControllerResultParams = {
    id: number;
  };

  type AnalysisTaskControllerUpdateParams = {
    id: number;
  };

  type AnalysisTaskEntity = {
    id: number;
    name: string;
    status: number;
    remark: string;
    dictTypeId: number;
    factoryId: number;
    createBy: string;
    updateBy: string;
    createdAt: string;
    updatedAt: string;
  };

  type AnalysisTaskResultEntity = {
    id: number;
    analysisTaskId: number;
    tag: string;
    time: string;
    data: Record<string, any>;
  };

  type ChangePasswordDto = {
    id: number;
    oldPassword: string;
    password: string;
  };

  type ContractControllerFindAllParams = {
    /** 合同名称 */
    name?: string;
    /** 客户名称 */
    customer?: string;
    /** 页码 */
    page?: number;
    /** 每页数量 */
    pageSize?: number;
    /** 开始时间 */
    beginTime?: string;
    /** 结束时间 */
    endTime?: string;
  };

  type ContractControllerFindOneParams = {
    id: number;
  };

  type ContractControllerRemoveParams = {
    id: number;
  };

  type ContractControllerUpdateParams = {
    id: number;
  };

  type ContractEntity = {
    id: number;
    name: string;
    contractTime: string;
    valveCount: number;
    highValveCount: number;
    customer: string;
    customerPhone: string;
    saler: string;
    remark: string;
    factoryId: number;
    createBy: string;
    updateBy: string;
    createdAt: string;
    updatedAt: string;
  };

  type CreateAnalysisTaskDto = {
    /** 任务名称 */
    name: string;
    /** 状态 (0: 待执行, 1: 执行中, 2: 已完成, 3: 失败) */
    status: number;
    /** pdf路径 */
    pdf: string[];
    /** 数据字典ID */
    dictTypeId: number;
    /** 工厂ID */
    factoryId: number;
    /** 备注 */
    remark: string;
  };

  type CreateContractDto = {
    /** 合同名称 */
    name: string;
    /** 签订合同时间 */
    contractTime: string;
    /** 采购阀门总数 */
    valveCount: number;
    /** 高级阀门数量 */
    highValveCount?: number;
    /** 客户名称 */
    customer: string;
    /** 客户联系方式 */
    customerPhone?: string;
    /** 销售人员 */
    saler?: string;
    /** 项目备注 */
    remark?: string;
    /** 工厂id */
    factoryId: number;
  };

  type CreateDeptDto = {
    /** 部门名称 */
    name: string;
    /** 排序 */
    sort?: number;
    /** 负责人 */
    leader?: string;
    /** 负责人电话 */
    phone?: string;
    /** 邮箱 */
    email?: string;
    /** 上级部门ID */
    parentId?: number;
    /** 备注 */
    remark?: string;
  };

  type CreateDeviceDto = {
    /** 装置名称 */
    name: string;
    /** 状态 false: 禁用 true: 启用 */
    status?: boolean;
    /** 装置描述 */
    remark?: string;
    /** 工厂id */
    factoryId: number;
    /** 阀门ids */
    valveIds?: number[];
  };

  type CreateDictDataDto = {
    /** 字典数据名称 */
    name: string;
    /** 字典数据值 */
    value: string;
    /** 排序 */
    sort?: number;
    /** 状态 false: 禁用 true: 启用 */
    status?: boolean;
    /** 字典类型ID */
    dictTypeId: number;
    /** 备注 */
    remark?: string;
    /** 父级菜单id */
    parentId?: number;
  };

  type CreateDictTypeDto = {
    /** 字典名称 */
    name: string;
    /** 字典值 */
    value: string;
    /** 备注 */
    remark?: string;
  };

  type CreateFactoryDto = {
    /** 工厂名称 */
    name: string;
    /** 状态 false: 禁用 true: 启用 */
    status?: boolean;
    /** 工厂地址 */
    address?: string;
    /** 工厂坐标(经度) */
    longitude?: string;
    /** 工厂坐标(纬度) */
    latitude?: string;
    /** 工厂描述 */
    remark?: string;
    /** 父级id */
    parentId?: number;
  };

  type CreateMenuDto = {
    /** 菜单名称 */
    name: string;
    /** 菜单路径 */
    path: string;
    /** 菜单图标 */
    icon: string;
    /** 是否隐藏 */
    hidden?: boolean;
    /** 状态 false: 禁用 true: 启用 */
    status?: boolean;
    /** 排序 */
    sort?: number;
    /** 父级菜单id */
    parentId?: number;
  };

  type CreatePostDto = {
    /** 岗位编码 */
    code: string;
    /** 岗位名称 */
    name: string;
    /** 排序 */
    sort?: number;
    /** 备注 */
    remark?: string;
  };

  type CreateRoleDto = {
    /** 权限名称 */
    name: string;
    /** 权限值 */
    value: string;
    /** 排序 */
    sort?: number;
    /** 备注 */
    remark?: string;
    /** 菜单ID */
    menuIds: number[];
    /** 工厂ID */
    factoryIds: number[];
  };

  type CreateUnitDto = {
    /** 权限名称 */
    name: string;
    /** 权限值 */
    value: string;
    /** 备注 */
    remark?: string;
  };

  type CreateUserDto = {
    /** 账号 */
    account: string;
    /** 密码 */
    password: string;
    /** 昵称 */
    nickname?: string;
    /** 头像 */
    avatar?: string;
    /** 邮箱 */
    email?: string;
    /** 手机号 */
    phoneNumber?: string;
    /** 性别 0: 女 1: 男 */
    sex?: number;
    /** 状态 false: 禁用 true: 启用 */
    status?: boolean;
    /** 备注 */
    remark?: string;
    /** 岗位ID */
    postId?: number;
    /** 部门ID */
    deptId?: number;
    /** 角色ID */
    roleIds?: number[];
    /** 菜单ID */
    menuIds?: number[];
  };

  type CreateValveDto = {
    /** 阀门位号 */
    tag: string;
    /** 装置 */
    unit?: string;
    /** 介质 */
    fluidName?: string;
    /** 关键应用 */
    criticalApplication?: string;
    /** 阀体序列号 */
    serialNumber?: string;
    /** 投用时间 */
    since?: string;
    /** 阀体品牌 */
    valveBrand?: string;
    /** 阀体类型 */
    valveType?: string;
    /** 阀体口径 */
    valveSize?: string;
    /** 阀体连接形式 */
    valveEndConnection?: string;
    /** 阀体阀体材质 */
    valveBodyMaterial?: string;
    /** 阀盖形式 */
    valveBonnet?: string;
    /** 阀内件 */
    valveTrim?: string;
    /** 阀体泄漏等级 */
    valveSeatLeakage?: string;
    /** 阀体描述 */
    valveDescription?: string;
    /** 执行机构品牌 */
    actuatorBrand?: string;
    /** 执行机构类型 */
    actuatorType?: string;
    /** 执行机构尺寸 */
    actuatorSize?: string;
    /** 手轮 */
    handwheel?: string;
    /** 执行机构描述 */
    actuatorDescription?: string;
    /** 定位器品牌 */
    positionerBrand?: string;
    /** 定位器类型 */
    positionerType?: string;
    /** 定位器描述 */
    positionerDescription?: string;
    /** 附件种类 */
    accessory?: string;
    /** 附件品牌 */
    accessoryBrand?: string;
    /** 附件类型 */
    accessoryType?: string;
    /** 附件数量 */
    accessoryQuantity?: number;
    /** 附件描述 */
    accessoryDescription?: string;
    /** 仪表品牌 */
    instrumentBrand?: string;
    /** 仪表类型 */
    instrumentType?: string;
    /** 仪表描述 */
    instrumentDescription?: string;
    /** 备注 */
    remark?: string;
    /** 装置id */
    deviceId?: number;
    /** 工厂id */
    factoryId: number;
    /** 分析任务id */
    analysisTaskId?: number;
  };

  type DeptControllerFindAllParams = {
    /** 部门名称 */
    name?: string;
    /** 开始时间 */
    beginTime?: string;
    /** 结束时间 */
    endTime?: string;
  };

  type DeptControllerFindOneParams = {
    id: number;
  };

  type DeptControllerRemoveParams = {
    id: number;
  };

  type DeptControllerUpdateParams = {
    id: number;
  };

  type DeptEntity = {
    id: number;
    name: string;
    sort: number;
    leader: string;
    phone: string;
    email: string;
    parentId: number;
    remark: string;
    children: DeptEntity[];
    createBy: string;
    updateBy: string;
    createdAt: string;
    updatedAt: string;
  };

  type DeviceControllerFindAllParams = {
    /** 装置名称 */
    name?: string;
    /** 工厂id */
    factoryId?: number;
    /** 页码 */
    page?: number;
    /** 每页数量 */
    pageSize?: number;
    /** 开始时间 */
    beginTime?: string;
    /** 结束时间 */
    endTime?: string;
  };

  type DeviceControllerFindOneParams = {
    id: number;
  };

  type DeviceControllerRemoveParams = {
    id: number;
  };

  type DeviceControllerUpdateParams = {
    id: number;
  };

  type DeviceEntity = {
    id: number;
    name: string;
    status: boolean;
    remark: string;
    factoryId: number;
    createBy: string;
    updateBy: string;
    createdAt: string;
    updatedAt: string;
  };

  type DictDataControllerFindAllParams = {
    /** 字典数据名称 */
    name?: string;
    /** 字典数据值 */
    value?: string;
    /** 字典类型ID */
    dictTypeId?: number;
    /** 页码 */
    page?: number;
    /** 每页数量 */
    pageSize?: number;
    /** 开始时间 */
    beginTime?: string;
    /** 结束时间 */
    endTime?: string;
  };

  type DictDataControllerFindOneParams = {
    id: number;
  };

  type DictDataControllerRemoveParams = {
    id: number;
  };

  type DictDataControllerUpdateParams = {
    id: number;
  };

  type DictDataEntity = {
    id: number;
    name: string;
    value: string;
    sort: number;
    status: boolean;
    dictTypeId: number;
    treeId: number;
    createBy: string;
    updateBy: string;
    remark: string;
    createdAt: string;
    updatedAt: string;
  };

  type DictTypeControllerFindAllParams = {
    /** 字典名称 */
    name?: string;
    /** 字典值 */
    value?: string;
    /** 页码 */
    page?: number;
    /** 每页数量 */
    pageSize?: number;
    /** 开始时间 */
    beginTime?: string;
    /** 结束时间 */
    endTime?: string;
  };

  type DictTypeControllerFindOneParams = {
    id: number;
  };

  type DictTypeControllerRemoveParams = {
    id: number;
  };

  type DictTypeControllerUpdateParams = {
    id: number;
  };

  type DictTypeEntity = {
    id: number;
    name: string;
    value: string;
    createBy: string;
    updateBy: string;
    remark: string;
    createdAt: string;
    updatedAt: string;
  };

  type FactoryControllerFindAllParams = {
    /** 工厂名称 */
    name?: string;
    /** 开始时间 */
    beginTime?: string;
    /** 结束时间 */
    endTime?: string;
  };

  type FactoryControllerFindOneParams = {
    id: number;
  };

  type FactoryControllerRemoveParams = {
    id: number;
  };

  type FactoryControllerUpdateParams = {
    id: number;
  };

  type FactoryEntity = {
    id: number;
    name: string;
    status: boolean;
    address: string;
    longitude: string;
    latitude: string;
    parentId: number;
    remark: string;
    createBy: string;
    updateBy: string;
    createdAt: string;
    updatedAt: string;
  };

  type InfoEntity = {
    cpu: { cores: number; brand: string; manufacturer: string; speed: string };
    memory: { total: string; free: string; used: string; usage: string };
    osInfo: { platform: string; release: string; arch: string; hostname: string };
  };

  type LoginLogControllerFindAllParams = {
    account?: string;
    /** 页码 */
    page?: number;
    /** 每页数量 */
    pageSize?: number;
    /** 开始时间 */
    beginTime?: string;
    /** 结束时间 */
    endTime?: string;
  };

  type LoginLogControllerFindOneParams = {
    id: number;
  };

  type LoginLogEntity = {
    id: number;
    userId: number;
    sessionId: string;
    account: string;
    ip: string;
    address: string;
    createdAt: string;
  };

  type MenuControllerFindAllParams = {
    /** 菜单名称 */
    name?: string;
    /** 是否隐藏 */
    hidden?: boolean;
    /** 开始时间 */
    beginTime?: string;
    /** 结束时间 */
    endTime?: string;
  };

  type MenuControllerFindOneParams = {
    id: number;
  };

  type MenuControllerRemoveParams = {
    id: number;
  };

  type MenuControllerUpdateParams = {
    id: number;
  };

  type MenuEntity = {
    id: number;
    name: string;
    path: string;
    icon: string;
    hidden: boolean;
    status: boolean;
    sort: number;
    parentId: number;
    remark: string;
    createBy: string;
    updateBy: string;
    createdAt: string;
    updatedAt: string;
  };

  type OperationLogControllerFindAllParams = {
    account?: string;
    businessType?: number;
    module?: string;
    /** 页码 */
    page?: number;
    /** 每页数量 */
    pageSize?: number;
    /** 开始时间 */
    beginTime?: string;
    /** 结束时间 */
    endTime?: string;
  };

  type OperationLogControllerFindOneParams = {
    id: number;
  };

  type OperationLogEntity = {
    id: number;
    title: string;
    businessType: number;
    module: string;
    account: string;
    ip: string;
    address: string;
    createdAt: string;
  };

  type PostControllerFindAllParams = {
    /** 岗位名称 */
    name?: string;
    /** 岗位编码 */
    code?: string;
    /** 页码 */
    page?: number;
    /** 每页数量 */
    pageSize?: number;
    /** 开始时间 */
    beginTime?: string;
    /** 结束时间 */
    endTime?: string;
  };

  type PostControllerFindOneParams = {
    id: number;
  };

  type PostControllerRemoveParams = {
    id: number;
  };

  type PostControllerUpdateParams = {
    id: number;
  };

  type PostEntity = {
    id: number;
    code: string;
    name: string;
    sort: number;
    remark: string;
    createBy: string;
    updateBy: string;
    createdAt: string;
    updatedAt: string;
  };

  type RefreshTokenDto = {
    refreshToken: string;
  };

  type RoleControllerFindAllParams = {
    /** 权限名称 */
    name?: string;
    /** 权限值 */
    value?: string;
    /** 页码 */
    page?: number;
    /** 每页数量 */
    pageSize?: number;
    /** 开始时间 */
    beginTime?: string;
    /** 结束时间 */
    endTime?: string;
  };

  type RoleControllerFindOneParams = {
    id: number;
  };

  type RoleControllerRemoveParams = {
    id: number;
  };

  type RoleControllerUpdateParams = {
    id: number;
  };

  type RoleEntity = {
    id: number;
    name: string;
    value: string;
    sort: number;
    remark: string;
    createBy: string;
    updateBy: string;
    createdAt: string;
    updatedAt: string;
    menu: number[];
    user: number[];
    factory: number[];
  };

  type SignInDto = {
    account: string;
    password: string;
  };

  type SignInEntity = {
    accessToken: string;
    refreshToken: string;
  };

  type SignUpDto = {
    /** 账号 */
    account: string;
    /** 密码 */
    password: string;
    /** 昵称 */
    nickname?: string;
    /** 头像 */
    avatar?: string;
    /** 邮箱 */
    email?: string;
    /** 手机号 */
    phoneNumber?: string;
    /** 性别 0: 女 1: 男 */
    sex?: number;
    /** 状态 false: 禁用 true: 启用 */
    status?: boolean;
    /** 备注 */
    remark?: string;
    /** 岗位ID */
    postId?: number;
    /** 部门ID */
    deptId?: number;
    /** 角色ID */
    roleIds?: number[];
    /** 菜单ID */
    menuIds?: number[];
  };

  type UnitControllerFindAllParams = {
    /** 权限名称 */
    name?: string;
    /** 权限值 */
    value?: string;
    /** 页码 */
    page?: number;
    /** 每页数量 */
    pageSize?: number;
    /** 开始时间 */
    beginTime?: string;
    /** 结束时间 */
    endTime?: string;
  };

  type UnitControllerFindOneParams = {
    id: number;
  };

  type UnitControllerRemoveParams = {
    id: number;
  };

  type UnitControllerUpdateParams = {
    id: number;
  };

  type UnitEntity = {
    id: number;
    name: string;
    value: string;
    remark: string;
    createdAt: string;
    updatedAt: string;
  };

  type UpdateAnalysisTaskDto = {
    /** 任务名称 */
    name?: string;
    /** 状态 (0: 待执行, 1: 执行中, 2: 已完成, 3: 失败) */
    status?: number;
    /** pdf路径 */
    pdf?: string[];
    /** 数据字典ID */
    dictTypeId?: number;
    /** 工厂ID */
    factoryId?: number;
    /** 备注 */
    remark?: string;
  };

  type UpdateContractDto = {
    /** 合同名称 */
    name?: string;
    /** 签订合同时间 */
    contractTime?: string;
    /** 采购阀门总数 */
    valveCount?: number;
    /** 高级阀门数量 */
    highValveCount?: number;
    /** 客户名称 */
    customer?: string;
    /** 客户联系方式 */
    customerPhone?: string;
    /** 销售人员 */
    saler?: string;
    /** 项目备注 */
    remark?: string;
    /** 工厂id */
    factoryId?: number;
  };

  type UpdateDeptDto = {
    /** 部门名称 */
    name?: string;
    /** 排序 */
    sort?: number;
    /** 负责人 */
    leader?: string;
    /** 负责人电话 */
    phone?: string;
    /** 邮箱 */
    email?: string;
    /** 上级部门ID */
    parentId?: number;
    /** 备注 */
    remark?: string;
  };

  type UpdateDeviceDto = {
    /** 装置名称 */
    name?: string;
    /** 状态 false: 禁用 true: 启用 */
    status?: boolean;
    /** 装置描述 */
    remark?: string;
    /** 工厂id */
    factoryId?: number;
    /** 阀门ids */
    valveIds?: number[];
  };

  type UpdateDictDataDto = {
    /** 字典数据名称 */
    name?: string;
    /** 字典数据值 */
    value?: string;
    /** 排序 */
    sort?: number;
    /** 状态 false: 禁用 true: 启用 */
    status?: boolean;
    /** 字典类型ID */
    dictTypeId?: number;
    /** 备注 */
    remark?: string;
    /** 父级菜单id */
    parentId?: number;
  };

  type UpdateDictTypeDto = {
    /** 字典名称 */
    name?: string;
    /** 字典值 */
    value?: string;
    /** 备注 */
    remark?: string;
  };

  type UpdateFactoryDto = {
    /** 工厂名称 */
    name?: string;
    /** 状态 false: 禁用 true: 启用 */
    status?: boolean;
    /** 工厂地址 */
    address?: string;
    /** 工厂坐标(经度) */
    longitude?: string;
    /** 工厂坐标(纬度) */
    latitude?: string;
    /** 工厂描述 */
    remark?: string;
    /** 父级id */
    parentId?: number;
  };

  type UpdateMenuDto = {
    /** 菜单名称 */
    name?: string;
    /** 菜单路径 */
    path?: string;
    /** 菜单图标 */
    icon?: string;
    /** 是否隐藏 */
    hidden?: boolean;
    /** 状态 false: 禁用 true: 启用 */
    status?: boolean;
    /** 排序 */
    sort?: number;
    /** 父级菜单id */
    parentId?: number;
  };

  type UpdatePostDto = {
    /** 岗位编码 */
    code?: string;
    /** 岗位名称 */
    name?: string;
    /** 排序 */
    sort?: number;
    /** 备注 */
    remark?: string;
  };

  type UpdateRoleDto = {
    /** 权限名称 */
    name?: string;
    /** 权限值 */
    value?: string;
    /** 排序 */
    sort?: number;
    /** 备注 */
    remark?: string;
    /** 菜单ID */
    menuIds?: number[];
    /** 工厂ID */
    factoryIds?: number[];
  };

  type UpdateUnitDto = {
    /** 权限名称 */
    name?: string;
    /** 权限值 */
    value?: string;
    /** 备注 */
    remark?: string;
  };

  type UpdateUserDto = {
    /** 账号 */
    account?: string;
    /** 密码 */
    password?: string;
    /** 昵称 */
    nickname?: string;
    /** 头像 */
    avatar?: string;
    /** 邮箱 */
    email?: string;
    /** 手机号 */
    phoneNumber?: string;
    /** 性别 0: 女 1: 男 */
    sex?: number;
    /** 状态 false: 禁用 true: 启用 */
    status?: boolean;
    /** 备注 */
    remark?: string;
    /** 岗位ID */
    postId?: number;
    /** 部门ID */
    deptId?: number;
    /** 角色ID */
    roleIds?: number[];
    /** 菜单ID */
    menuIds?: number[];
  };

  type UpdateValveDto = {
    /** 阀门位号 */
    tag?: string;
    /** 装置 */
    unit?: string;
    /** 介质 */
    fluidName?: string;
    /** 关键应用 */
    criticalApplication?: string;
    /** 阀体序列号 */
    serialNumber?: string;
    /** 投用时间 */
    since?: string;
    /** 阀体品牌 */
    valveBrand?: string;
    /** 阀体类型 */
    valveType?: string;
    /** 阀体口径 */
    valveSize?: string;
    /** 阀体连接形式 */
    valveEndConnection?: string;
    /** 阀体阀体材质 */
    valveBodyMaterial?: string;
    /** 阀盖形式 */
    valveBonnet?: string;
    /** 阀内件 */
    valveTrim?: string;
    /** 阀体泄漏等级 */
    valveSeatLeakage?: string;
    /** 阀体描述 */
    valveDescription?: string;
    /** 执行机构品牌 */
    actuatorBrand?: string;
    /** 执行机构类型 */
    actuatorType?: string;
    /** 执行机构尺寸 */
    actuatorSize?: string;
    /** 手轮 */
    handwheel?: string;
    /** 执行机构描述 */
    actuatorDescription?: string;
    /** 定位器品牌 */
    positionerBrand?: string;
    /** 定位器类型 */
    positionerType?: string;
    /** 定位器描述 */
    positionerDescription?: string;
    /** 附件种类 */
    accessory?: string;
    /** 附件品牌 */
    accessoryBrand?: string;
    /** 附件类型 */
    accessoryType?: string;
    /** 附件数量 */
    accessoryQuantity?: number;
    /** 附件描述 */
    accessoryDescription?: string;
    /** 仪表品牌 */
    instrumentBrand?: string;
    /** 仪表类型 */
    instrumentType?: string;
    /** 仪表描述 */
    instrumentDescription?: string;
    /** 备注 */
    remark?: string;
    /** 装置id */
    deviceId?: number;
    /** 工厂id */
    factoryId?: number;
    /** 分析任务id */
    analysisTaskId?: number;
  };

  type UserControllerFindAllParams = {
    /** 账号 */
    account?: string;
    /** 昵称 */
    nickname?: string;
    /** 邮箱 */
    email?: string;
    /** 手机号 */
    phoneNumber?: string;
    /** 性别 0: 女 1: 男 */
    sex?: number;
    /** 页码 */
    page?: number;
    /** 每页数量 */
    pageSize?: number;
    /** 开始时间 */
    beginTime?: string;
    /** 结束时间 */
    endTime?: string;
  };

  type UserControllerFindOneParams = {
    id: number;
  };

  type UserControllerRemoveParams = {
    id: number;
  };

  type UserControllerUpdateParams = {
    id: number;
  };

  type UserEntity = {
    id: number;
    isAdmin: boolean;
    account: string;
    nickname: string;
    avatar: string;
    email: string;
    phoneNumber: string;
    sex: number;
    status: boolean;
    createBy: string;
    createdAt: string;
    updatedAt: string;
    remark: string;
  };

  type ValveControllerFindAllHistoryDataListParams = {
    valveId?: number;
    /** 页码 */
    page?: number;
    /** 每页数量 */
    pageSize?: number;
    /** 开始时间 */
    beginTime?: string;
    /** 结束时间 */
    endTime?: string;
  };

  type ValveControllerFindAllParams = {
    /** 阀门位号 */
    tag?: string;
    /** 工厂id */
    factoryId?: number;
    /** 装置id */
    deviceId?: number;
    /** 分析任务id */
    analysisTaskId?: number;
    /** 页码 */
    page?: number;
    /** 每页数量 */
    pageSize?: number;
    /** 开始时间 */
    beginTime?: string;
    /** 结束时间 */
    endTime?: string;
  };

  type ValveControllerFindHistoryDataParams = {
    id: number;
  };

  type ValveControllerFindOneParams = {
    id: number;
  };

  type ValveControllerFindRunInfoParams = {
    id: number;
  };

  type ValveControllerRemoveParams = {
    id: number;
  };

  type ValveControllerUpdateParams = {
    id: number;
  };

  type ValveEntity = {
    id: number;
    tag: string;
    unit: string;
    fluidName: string;
    criticalApplication: string;
    serialNumber: string;
    since: string;
    valveBrand: string;
    valveType: string;
    valveSize: string;
    valveEndConnection: string;
    valveBodyMaterial: string;
    valveBonnet: string;
    valveTrim: string;
    valveSeatLeakage: string;
    valveDescription: string;
    actuatorBrand: string;
    actuatorType: string;
    actuatorSize: string;
    handwheel: string;
    actuatorDescription: string;
    positionerBrand: string;
    positionerType: string;
    positionerDescription: string;
    accessory: string;
    accessoryBrand: string;
    accessoryType: string;
    accessoryQuantity: number;
    accessoryDescription: string;
    instrumentBrand: string;
    instrumentType: string;
    instrumentDescription: string;
    remark: string;
    deviceId: number;
    analysisTaskId: number;
    factoryId: number;
    createBy: string;
    updateBy: string;
    createdAt: string;
    updatedAt: string;
  };

  type ValveHistoryEntity = {
    id: number;
    name: string;
    value: string;
    unit: string;
    time: string;
    valveHistoryDataListId: number;
  };

  type ValveHistoryListEntity = {
    id: number;
    tag: string;
    valveId: number;
    time: string;
  };

  type ValveRunInfoEntity = {
    id: number;
    name: string;
    value: string;
    unit: string;
    time: string;
    valveId: number;
  };
}
