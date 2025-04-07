import { create } from 'zustand';
import { query } from '@/modules/query';
import { QueryApi } from './query';
import { toast } from 'react-toastify';

export const queryApi = new QueryApi({ query });
type Store = {
  list: any[];
  setList: (list: any[]) => void;
  data: any;
  setData: (data: any) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  formData: any;
  setFormData: (data: any) => void;
  showEdit: boolean;
  setShowEdit: (showEdit: boolean) => void;
  getList: () => Promise<any>;
  init: () => Promise<void>;
  getData: (id: string) => Promise<any>;
  updateData: (data: any, opts?: { refresh?: boolean }) => Promise<any>;
  deleteData: (id: string, opts?: { refresh?: boolean }) => Promise<any>;
};
export const useDemoStore = create<Store>((set, get) => ({
  list: [],
  setList: (list) => set({ list }),
  data: null,
  setData: (data) => set({ data }),
  loading: false,
  setLoading: (loading) => set({ loading }),
  formData: null,
  setFormData: (formData) => set({ formData }),
  showEdit: false,
  setShowEdit: (showEdit) => set({ showEdit }),
  getList: async () => {
    set({ loading: true });
    const res = await queryApi.getList();
    set({ loading: false });
    if (res.code === 200) {
      set({ list: res.data });
    }
    return res;
  },
  init: async () => {
    await get().getList();
  },
  getData: async (id) => {
    set({ loading: true });
    const res = await queryApi.getDetail(id);
    set({ loading: false });
    if (res.code === 200) {
      const data = res.data;
      set({ data });
    }
    return res;
  },
  updateData: async (data, opts = { refresh: true }) => {
    set({ loading: true });
    const res = await queryApi.update(data);
    set({ loading: false });
    if (res.code === 200) {
      set({ data: res.data });
      toast.success('更新成功');
    } else {
      toast.error(res.message || '更新失败');
    }
    if (opts.refresh) {
      await get().getList();
    }
    return res;
  },
  deleteData: async (id, opts = { refresh: true }) => {
    set({ loading: true });
    const res = await queryApi.delete(id);
    set({ loading: false });
    if (res.code === 200) {
      set({ data: null });
      toast.success('删除成功');
    } else {
      toast.error(res.message || '删除失败');
    }
    if (opts.refresh) {
      await get().getList();
    }
    return res;
  },
}));
