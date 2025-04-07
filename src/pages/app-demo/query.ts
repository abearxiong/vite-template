import { BaseQuery } from '@kevisual/query';
export class QueryApi extends BaseQuery {
  constructor(options: { query: any }) {
    super(options);
  }
  async getList(params?: any, dataOpts?: any) {
    return this.query.post(
      {
        path: 'demo',
        key: 'list',
        ...params,
      },
      dataOpts,
    );
  }
  async getDetail(id?: string, dataOpts?: any) {
    return this.query.post(
      {
        path: 'demo',
        key: 'get',
        data: { id },
      },
      dataOpts,
    );
  }
  async update(data?: any, dataOpts?: any) {
    return this.query.post(
      {
        path: 'demo',
        key: 'update',
        data,
      },
      dataOpts,
    );
  }
  async delete(id?: string, dataOpts?: any) {
    return this.query.post(
      {
        path: 'demo',
        key: 'delete',
        data: { id },
      },
      dataOpts,
    );
  }
}
