import {useState} from 'react';
import {ImageListItem} from '@mui/material';

function GalleryItem ({pic, addLike, deletePic}) {

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
        <ImageListItem key={pic.id}>
            <div>
            {flipStatus ? 
                <img
                    onclick={onImageClick}
                    className="photos"
                    src={`${pic.path}?w=161&fit=crop&auto=format`}
                    srcSet={`${pic.path}?w=161&fit=crop&auto=format&dpr=2 2x`}
                    alt={pic.description}
                    loading="lazy"
                /> 
                : <p className="description" onClick={onDescriptionClick}>{pic.description}</p> 
            }
            <p className="likeText">Likes: {pic.likes}</p>
            <button className="likeButton" onClick={(event) => onClickLike(pic)}>👍🏼</button>
            <button className="deleteButton" onClick={(event) => deletePic(pic)}>❌</button>
            </div>
        </ImageListItem>
    )
};

export default GalleryItem;






