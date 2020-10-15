import React from 'react';

function ImageHelper({product}) {

    const imageurl= product ? product.image:`https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuS7zblO-w-KYqT_yOvadPO-y9rw13GAQivQ&usqp=CAU`;


    return (
        <div className="rounded border border-successs p-2">
            <img src={imageurl} style={{maxHeight:"100%",maxWidth:"100%"}} className="mb-3 rounded"  alt="" />
        </div>
    )
}

export default ImageHelper
