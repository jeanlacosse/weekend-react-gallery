import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList ({
    galleryList
}) {
    return (
        <>
        <ul>
            {galleryList.map(listItem => (
                <GalleryItem 
                listItem={listItem} 
                key={listItem.id}
                />
               
            ))}
        </ul>
        </>
    )
}

export default GalleryList;