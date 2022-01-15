import {useState} from 'react';


function GalleryItem ({pic, addLike}) {

    // Create a variable to help with flipping the photo
    const [flipStatus, setFlipStatus] = useState(true);

    const onImageClick = () => {
        console.log('image click success');
        setFlipStatus(!flipStatus);
    };

    const onDescriptionClick = () => {
        console.log('desc click success');
        setFlipStatus(!flipStatus);
    };

    const onClickLike = (pic) => {
        console.log('like button clicked', pic);
        addLike(pic);
    };


    return (
        <div>
                <div key={pic.id}>
                    {flipStatus ? 
                        <img onClick={onImageClick} className="pictures" src={pic.path}></img> :
                        <p className="description" onClick={onDescriptionClick}>{pic.description}</p> 
                    }
                    <br/>Likes: {pic.likes}<br/>
                <button onClick={(event) => onClickLike(pic)}>Like</button>
                </div>
            <br/>
        </div>
    )
};

export default GalleryItem;

