function GalleryItem ({
    listItem, 
    renderInfo
}) {
    return (
    <li>
    
    <img src={listItem.path} alt="" />
    {/* conditional rendering, if true run img, else run description */}
    </li>
    )
}

export default GalleryItem;

// onClick={()=>renderInfo(listItem)}