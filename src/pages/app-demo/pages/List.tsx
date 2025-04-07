import { useEffect } from 'react';
import { useDemoStore } from '../store';
import { useShallow } from 'zustand/react/shallow';
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
export const EditDialog = () => {
  const { control, handleSubmit, reset } = useForm();
  const store = useDemoStore(
    useShallow((state) => ({
      formData: state.formData,
      setFormData: state.setFormData,
      showEdit: state.showEdit,
      setShowEdit: state.setShowEdit,
    })),
  );
  useEffect(() => {
    if (store.showEdit) {
      reset(store.formData || {});
    }
  }, [store.formData]);
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const hasId = !!store.formData?.id;
  return (
    <Dialog open={store.showEdit} onClose={() => store.setShowEdit(false)}>
      <DialogTitle>{hasId ? 'Edit' : 'Add'}</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller control={control} name='title' render={({ field }) => <TextField {...field} label='Title' />} />
          <Button type='submit'>提交</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export const List = () => {
  const store = useDemoStore(
    useShallow((state) => ({
      list: state.list,
      init: state.init,
      setShowEdit: state.setShowEdit,
    })),
  );
  useEffect(() => {
    store.init();
  }, []);
  return (
    <div className='w-full h-full flex flex-col gap-2 bg-gray-100'>
      <div className='flex justify-end'>
        <Button onClick={() => store.setShowEdit(true)}>添加</Button>
      </div>
      <div>
        {store.list.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
      <EditDialog />
    </div>
  );
};
