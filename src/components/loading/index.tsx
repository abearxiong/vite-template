type LoadingProps = {
  loading?: boolean;
  children?: React.ReactNode;
};
export const Loading = (props: LoadingProps) => {
  if (!props.loading) return <>{props.children}</>;
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='w-20 h-20 border-t-8 border-b-8  rounded-full animate-spin'></div>
    </div>
  );
};
