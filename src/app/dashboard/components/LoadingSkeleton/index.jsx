export default function LoadingSkeleton() {
  return (
    <div className="flex items-center justify-center h-max">
      <div className="flex space-x-1">
        <div className="w-1 h-1 bg-red-600 rounded-full animate-bounce1"></div>
        <div className="w-1 h-1 bg-red-600 rounded-full animate-bounce2"></div>
        <div className="w-1 h-1 bg-red-600 rounded-full animate-bounce3"></div>
      </div>
    </div>
  )
}
