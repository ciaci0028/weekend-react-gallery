import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList ({galleryList}) {
    console.log('GalleryList', galleryList);
    return (
        <div>
            <h1>These are a few of my favorite things...</h1>
            <GalleryItem galleryList={galleryList}/>
        </div>
    )
};

export default GalleryList;