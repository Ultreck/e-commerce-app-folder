"use client"
import EmptyPageComponent from '@/components/EmptyPageComponent'
import WishListCard from '@/components/WishListCard'
import { userWishListItemsStore } from '@/store/wishListItems'
import { itemsDummyData } from '@/utils/helper'
import React, { useEffect, useState } from 'react'

const CustomerWishlist = () => {
  const [wishListId, setWishListId] = useState<string[]>([]);
  useEffect(() => { 
    const wishListStoredData = userWishListItemsStore.getState().wishListCardsDatas;
    setWishListId(wishListStoredData);   
  }, [])
  return (
    <div>
      {wishListId.length > 0 ? itemsDummyData.filter((wish) => wishListId.includes(wish.id)).map((wishMatchd, index) => (
          <div className="text" key={index}>
          <WishListCard data={wishMatchd}/>
        </div>
      )):
      <div className="text">
        <EmptyPageComponent caption="You don't have any wishlist" className="h-[80vh]" text={`You can click on the wishlilst icon on the product card or on the top navigation bar to add the item to your wishlist`}/>
       </div>
      }
    </div>
  )
}

export default CustomerWishlist