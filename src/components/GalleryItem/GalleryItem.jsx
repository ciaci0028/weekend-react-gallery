import {useState} from 'react';

function GalleryItem ({}) {
    console.log('GalleryItem');

    // // Create a variable to help with flipping the photo
    // const [flipStatus, setFlipStatus] = useState(true);

    // const onImageClick = () => {
    //     console.log('image click success');
    //     setFlipStatus(!flipStatus);
    // };

    // const onDescriptionClick = () => {
    //     console.log('desc click success');
    //     setFlipStatus(!flipStatus);
    // };


    return (
        <h1> hi </h1>
        // <div>
        //         <div key={key}>
        //             {flipStatus ? 
        //                 <img onClick={onImageClick} className="pictures" src={pic.path}></img> :
        //                 <p onClick={onDescriptionClick}>{pic.description}</p> 
        //             }
        //             Likes: {pic.likes}<br/>
        //         <button>Like</button>
        //         </div>
        //     <br/>
        // </div>
    )
};

export default GalleryItem;

