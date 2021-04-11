import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Photos.css";
const getPhotoInfo = require("../API/photos").getPhotoInfo;

const Photos = (props) => {
    const [photoInfo, setPhotoInfo] = useState(0);
    const [photoNum, setPhotoNum] = useState(0);
    const [loaded, setLoaded] = useState (0);
    const incidentNum= props.match.params.incidentNum;
    var imgLoaded = 0;

    useEffect(() => {
        getPhotoInfo(incidentNum)
            .then(data => {
                setPhotoInfo(data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    const onClickPhoto = (num) => {
        setPhotoNum(num);
        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        modal.style.display = "block";

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = () => {
            modal.style.display = "none";
        }

        document.onkeydown = e => {
            if(e.key === "Escape"){modal.style.display = "none";}
        }
    }

    const imageLoaded = () => {
        imgLoaded++;
        if(imgLoaded == photoInfo && imgLoaded != 0){
            setLoaded(1);
        }
    }

    const photoGallery = () => {
        let gallery = []
        for(let i = 0; i < photoInfo; i++){
            gallery.push(
                <div className = "col-lg-4" key = {i}>
                    <img 
                        className="photo_image" 
                        onClick={() => onClickPhoto(i)} 
                        style={loaded ? {} : { display: 'none' }}
                        onLoad={() => imageLoaded()}
                        name={i} 
                        alt = "Forest Fire Photo"
                        src={"http://localhost:5000/photos/" + incidentNum + '/' + i} />
                </div>
            )
        }
        return gallery
    }
    
    return(
        <div className="container-fluid photoContainer">
            <div className = "row photoRow">
                {photoGallery()}
                <div className = "loader" style={loaded ? {display: 'none'} : { }}></div>
                <h4 className = "loadText" style={loaded ? {display: 'none'} : { }}>Loading...</h4>
            </div>

            <div id="myModal" className="modal">

                <span className="close">&times;</span>

                <div id="caption">
                    <h4><b>Incident {incidentNum}</b></h4>
                    <h5>Photo {photoNum}</h5>
                </div>

                <img className="photo_modal" alt= "Forest Fire Photo" src={"http://localhost:5000/photos/" + incidentNum + '/' + photoNum} />


            </div>
        </div>
    )
    
}

export default Photos;