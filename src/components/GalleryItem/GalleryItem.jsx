function GalleryItem ({galleryList}) {
    console.log('GalleryItem', galleryList);
    console.log('testing', galleryList)
    return (
        <div>
            {galleryList.map(pic => (
                <div key={pic.id}>
                    <img className="pictures" src={pic.path}></img><br/>
                    {pic.description}<br/>
                    Likes: {pic.likes}<br/>
                <button>Like</button>
                </div>
            ))}
            <br/>
        </div>
    )
};

export default GalleryItem;
