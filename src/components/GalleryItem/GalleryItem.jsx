import { useState, useEffect } from 'react';
import likeBtn from '../../like-btn.png'

function GalleryItem({
    listItem, onClickLike

}) {
    // set a new useState that will load on render. If false show img, if true show description
    // both img and description will have onClick to change the state value and rerender the opposite
    let [imgShowing, setImgShowing] = useState(false)

    return (
        <>
            <li>
                {
                    imgShowing ?
                        <div onClick={() => setImgShowing(false)}>
                            {listItem.description}
                        </div>
                        :
                        <img src={listItem.path}
                            onClick={() => setImgShowing(true)}
                        />

                }

            </li>
            {/* create a like button */}
            <button
                onClick={() => { onClickLike(listItem) }}
            >
                <img id='like-btn' src={likeBtn} alt="" />
            </button>
            <span id='like-count'>{listItem.likes}</span>
        </>
    )
}

export default GalleryItem;
