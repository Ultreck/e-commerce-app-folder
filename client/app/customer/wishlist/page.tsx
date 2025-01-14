"use client"
import WishListCard from '@/components/WishListCard'
import { userWishListItemsStore } from '@/store/wishListItems'
import { itemsDummyData } from '@/utils/helper'
import React, { useEffect } from 'react'

const CustomerWishlist = () => {
  const wishListId = userWishListItemsStore((state) => state.wishListCardsDatas);
  useEffect(() => {
  console.log(wishListId);
  
  }, [])
  return (
    <div>
      {itemsDummyData.filter((wish) => wishListId.includes(wish.id)).map((wishMatchd, index) => (
          <div className="text" key={index}>
          <WishListCard data={wishMatchd}/>
        </div>
      ))}
    </div>
  )
}

export default CustomerWishlist