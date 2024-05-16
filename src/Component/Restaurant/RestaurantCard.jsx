import { Card, Chip, IconButton } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const RestaurantCard = () => {
  return (
    <div>
        <Card className='m-5 w-[18rem]'>
            <div className={`${true?'cursor-pointer':'cursor-not-allowed'} relative`}>
                <img className="w-full h-[10rem] rounded-t-md object-cover" src="https://bizweb.dktcdn.net/100/258/702/files/mo-hinh-cua-hang-dien-nuoc-nho.jpg?v=1697101792450" alt="" />
                <Chip
                    size='smaill'
                    className='absolute top-2 left-2'
                    color={true?"success":'error'}
                    label={true?"open":'closed'}>

                </Chip>
            </div>
            <div className='textPart p-4 lg:flex w-full justify-between'>
                <div className='space-y-1'>
                    <p className='font-semibold text-lg'>Cửa hàng</p>
                    <p className='text-gray-50'>
                        abcdefgh
                    </p>
                </div>
                <div>
                    <IconButton>
                        {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
                    </IconButton>
                </div>
            </div>
        </Card>
    </div>
  )
}

export default RestaurantCard
