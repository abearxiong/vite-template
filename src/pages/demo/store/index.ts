import { create } from 'zustand';
import { query } from '@/modules/query';
import { toast } from 'sonner';

interface Data {
  id: string;
  [key: string]: any;
}

type State = {
  formData: Record<string, any>;
  setFormData: (data: Record<string, any>) => void;
  showEdit: boolean;
  setShowEdit: (showEdit: boolean) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  list: Data[];
  getItem: (id: string) => Promise<any>;
  getList: () => Promise<any>;
  updateData: (data: Data) => Promise<void>;
  deleteData: (id: string) => Promise<void>;
}

export const useDemoStore = create<State>((set, get) => {
  return {
    formData: {},
    setFormData: (data) => set({ formData: data }),
    showEdit: false,
    setShowEdit: (showEdit) => set({ showEdit }),
    loading: false,
    setLoading: (loading) => set({ loading }),
    list: [],
    getItem: async (id) => {
      const { setLoading } = get();
      setLoading(true);
      try {
        const res = await query.post({
          path: 'demo',
          key: 'item',
          data: { id }
        })
        if (res.code === 200) {
          return res;
        } else {
          toast.error(res.message || '请求失败');
        }
      } finally {
        setLoading(false);
      }
    },
    getList: async () => {
      const { setLoading } = get();
      setLoading(true);
      try {
        const res = await query.post({
          path: 'demo',
          key: 'list'
        });
        if (res.code === 200) {
          const list = res.data?.list || []
          set({ list });
        } else {
          toast.error(res.message || '请求失败');
        }
        return res;
      } finally {
        setLoading(false);
      }
    },
    updateData: async (data) => {
      const res = await query.post({
        path: 'demo',
        key: 'update',
        data
      })
      if (res.code === 200) {
        get().getList()
      } else {
        toast.error(res.message || '请求失败');
      }
    },
    deleteData: async (id) => {
      const res = await query.post({
        path: 'demo',
        key: 'delete',
        data: { id }
      })
      if (res.code === 200) {
        get().getList()
      } else {
        toast.error(res.message || '请求失败');
      }
    }
  }
})