import React from 'react'

const OrderCard = () => {
  return (
    <div className='px-5'>
        <div className="text border-2 gap-3 w-full my-5 rounded flex items-center px-5 py-3">
            <div className="text w-32 h-28 rounded-md bg-gray-500"></div>
            <div className="text w-full">
                <div className="text w-full">
                    <div className="text flex justify-between items-center w-full">
                        <div className="text mt-1">HDMI (HDTV) To VGA Adapter Analog Cable</div>
                        <div className="text"><button className="text-amber-700">see details</button></div>
                    </div>
                    <div className="text mb-5">Order 1625983872</div>
                    <div className="text "><button className="text-white cursor-default px-3 py-0.5 rounded-tl-lg rounded-br-lg bg-lime-500">Delivered</button></div>
                    <div className="text">On 23-12</div>
                </div>
                <div className="text"></div>
            </div>
        </div>
    </div>
  )
}

export default OrderCard