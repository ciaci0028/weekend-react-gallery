import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList ({galleryList}) {
    console.log('GalleryList', galleryList);
    return (
        <div className="container">
            <div className='row'>
                <h1>These are a few of my favorite things...</h1>
                <GalleryItem galleryList={galleryList}/>
            </div>
        </div>
    )
};

export default GalleryList;