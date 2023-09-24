import loading from '@/assets/loading.svg'
const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <img src={loading} alt="" className="h-80 w-80" />
      <h1 className="text-3xl font-semibold">Loading...</h1>
    </div>
  )
}

export default Loader
