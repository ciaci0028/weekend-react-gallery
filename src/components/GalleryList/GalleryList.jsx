import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList ({galleryList}) {
    console.log('GalleryList', galleryList);
    return (
        <div>
            {galleryList.map(() => {
                <GalleryItem
                />
            })}
        </div>
    )
};

export default GalleryList;