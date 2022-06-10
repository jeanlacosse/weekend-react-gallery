function GalleryItem ({
    listItem, 
    
}) {
    return (
    <li>
    <img src={listItem.path} alt="" />
    </li>
    )
}

export default GalleryItem;