function GalleryList ({
    galleryList
}) {
    return (
        <>
        <ul>
            {galleryList.map(listItem => (
               <li>{listItem.id}</li> 
            ))}
        </ul>
        </>
    )
}

export default GalleryList;