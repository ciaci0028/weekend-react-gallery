import {useState} from 'react';

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
            <img
                src={`${pic.path}?w=161&fit=crop&auto=format`}
                srcSet={`${pic.path}?w=161&fit=crop&auto=format&dpr=2 2x`}
                alt={pic.description}
                loading="lazy"
            />
    )
};

export default GalleryItem;





{/* <div key={pic.id}>
{flipStatus ? 
    <img onClick={onImageClick} className="pictures" src={pic.path}></img> :
    <p className="description" onClick={onDescriptionClick}>{pic.description}</p> 
}
<br/>Likes: {pic.likes}<br/>
<button onClick={(event) => onClickLike(pic)}>👍🏼</button>
<button onClick={(event) => deletePic(pic)}>❌</button>
</div> */}
