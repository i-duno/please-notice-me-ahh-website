import './card.css'
import CTA from './cta.jsx'

export function Card({className, children, href}) {
  var content = children==undefined?"Title|Subtitle|Description|https://picsum.photos/600/400":children
  content = String(content).split("|")

  return (
    <div className="shadow-lg/50 flex-1 w-full flex flex-col justify-around h-86 p-3 gap-2 bg-primary-gray-100 rounded-2xl border-2 border-white">
      <div className="flex-3 w-full bg-primary-gray-100 max-h-35">
        <img src={content[3]} alt="Card Image" className='object-cover w-full h-full rounded-md border-2 border-white'/>
      </div>
      <div className="flex-4 flex flex-col justify-start w-full">
        <p className="text-white text-xl">{content[0]}</p>
        <p className="text-primary-gray-300 text-sm">{content[1]}</p>
        <p className="text-gray-200 text-md min-h-10">{content[2]}</p>
        <span className='flex-1'></span>
        <div className="flex flex-row flex-1">
          <span className='flex-1'></span>
          <span className='flex-2 max-h-12'>
            <CTA>Learn More</CTA>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card