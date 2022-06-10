import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList ({
    galleryList, renderInfo
}) {
    return (
        <>
        <ul>
            {galleryList.map(listItem => (
                <GalleryItem 
                listItem={listItem} 
                key={listItem.id}
                renderInfo={renderInfo}
                />
               
            ))}
        </ul>
        </>
    )
}

export default GalleryList;