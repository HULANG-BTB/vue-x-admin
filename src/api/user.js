export const category = '业务科室管理相关接口'
const baseUrl = '/dept'

export default [
  {
    name: '分页查询业务科室列表',
    method: 'departmentList',
    url: `${baseUrl}/page`,
    type: 'post'
  },
  {
    name: '删除',
    method: 'deleteDepartment',
    url: `${baseUrl}/remove/{id}/{id}`,
    type: 'delete'
  },
  {
    name: '保存(新增)',
    method: 'saveDepartment',
    url: `${baseUrl}/save`,
    type: 'post'
  },
  {
    name: '更新',
    method: 'updateDepartment',
    url: `${baseUrl}/update`,
    type: 'put'
  },
  {
    name: '获取最大科室编码',
    method: 'getMaxCode',
    url: `${baseUrl}/getMaxCode`,
    type: 'get'
  },
  {
    name: '获取就诊科室下拉列表',
    method: 'getDepartmentSelectList',
    url: `${baseUrl}/list`,
    type: 'get'
  }
]
