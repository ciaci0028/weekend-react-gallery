function GalleryList ({galleryList}) {
    console.log('gallery list', galleryList);
    return (
        <div>
            <h1>Gallery is going to go here</h1>
            {galleryList.map(pic => {
                <div key={pic.id}>
                        {pic.path}
                        {pic.description}
                        {pic.likes}
                        <button>Test</button>
                </div>
            })}
        </div>
    )
};

export default GalleryList;