import './footer.css'

export function Footer({className, children, href}) {

  var content = children==undefined?"Title|Subtitle|Description|https://picsum.photos/600/400":children
  content = String(content).split("|")

  return (
    <div className="bg-primary-gray-100 w-full h-70 border-t-2 border-white flex flex-row items-center justify-center">
      <div className="bg-primary-gray-100 w-full h-full flex flex-col items-center justify-center">
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
      </div>
      <div className="bg-primary-gray-100 w-full h-full flex flex-col items-center justify-center">
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
      </div>
      <div className="bg-primary-gray-100 w-full h-full flex flex-col items-center justify-center">
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
      </div>
      <div className="bg-primary-gray-100 w-full h-full flex flex-col items-center justify-center">
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
      </div>
      <div className="bg-primary-gray-100 w-full h-full flex flex-col items-center justify-center">
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
        <p className='text-primary-gray-300'>Something something</p>
      </div>
    </div>
  )
}

export default Footer