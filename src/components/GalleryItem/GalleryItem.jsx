function GalleryItem ({galleryList}) {
    console.log('GalleryItem', galleryList);
    console.log('testing', galleryList)
    return (
        <>
            {galleryList.map(pic => {
                <p>{pic.description}</p>
            })}
        </>
    )
};

export default GalleryItem;

// {galleryList.map(pic => {
//     <div key={pic.id}>
//             {pic.path}
//             {pic.description}
//             {pic.likes}
//             <button>Test</button>
//     </div>
// })}