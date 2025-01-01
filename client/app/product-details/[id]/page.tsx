import React from 'react'

const page = async ({params}: {params: Promise<{id: string}>}) => {
    const {id} =  (await params).id;
    console.log(id);
  return (
    <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, quam sed. Sunt quo a minus ad odio placeat expedita nam temporibus at voluptatibus veritatis optio, veniam explicabo cum quibusdam minima.
    </div>
  )
}

export default page