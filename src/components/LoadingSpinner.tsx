export default function LoadingSpinner() {
  return (
    <div className='min-h-screen flex justify-center items-center h-full'>
      <div className='animate-spin rounded-full border-t-4 border-gray-500 border-t-gray-500 h-12 w-12' />
    </div>
  );
}
