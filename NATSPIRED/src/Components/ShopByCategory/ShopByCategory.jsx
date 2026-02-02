import React from 'react'
import img1 from '/webimg/category-img-01.png'
import img2 from '/webimg/category-img-02.png'
import img3 from '/webimg/category-img-03.png'
import img4 from '/webimg/category-img-04.png'
import './ShopByCategory.css'
export const ShopByCategory = () => {
    const categoryData = [
        {
            image: img1,
            categoryTitle: 'Fresh Vegetables',
            noOfItem: 12,
        },

        {
            image: img2,
            categoryTitle: 'Beverages',
            noOfItem: 10,
        },

        {
            image: img3,
            categoryTitle: 'Fresh Fruits',
            noOfItem: 15,
        },

        {
            image: img4,
            categoryTitle: 'Fresh Tomatoes',
            noOfItem: 5,
        },



    ]
    return (
        <div className=''>
            <div className='shop-category'>
                <div className="header-section">
                    <p className='categroy-subtitle'>Nature Only</p>
                    <h1 className='title'>Shop by Category</h1>
                </div>
                <div className='category-card-section'>

                    {
                        categoryData.map((category, idx) => (
                            <div className='category-card' key={idx}>
                                <div className='category-img'>
                                    <img src={category.image} alt="" />
                                </div>
                                <h2 className='category-title'>{category.categoryTitle}</h2>
                                <p className='category-item-no'>({category.noOfItem} Items)</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default ShopByCategory