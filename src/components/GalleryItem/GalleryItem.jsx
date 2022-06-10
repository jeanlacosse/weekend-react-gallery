import { useState, useEffect } from 'react';

function GalleryItem({
    listItem,
    // renderInfo
}) {
// set a new useState that will load on render. If false show img, if true show description
// both img and description will have onClick to change the state value and rerender the opposite
    let [imgShowing, setImgShowing] = useState(false)

    return (
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
            {/* conditional rendering, if true run img, else run description */}

        </li>
    )
}

export default GalleryItem;
