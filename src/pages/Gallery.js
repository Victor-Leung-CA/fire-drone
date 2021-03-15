import React, {Component} from "react";
import ImageGallery from 'react-image-gallery';
import "../css/Gallery.css"
import "bootstrap/dist/css/bootstrap.min.css";

const images = [
 {
   original: '../FireDrone Logo.png',
   thumbnail: '../FireDrone Logo.png',
 },
 {
  original: '../FireDrone Logo.png',
  thumbnail: '../FireDrone Logo.png',
 },
 {
  original: '../FireDrone Logo.png',
  thumbnail: '../FireDrone Logo.png',
 },
 {
  original: '../FireDrone Logo.png',
  thumbnail: '../FireDrone Logo.png',
 },
 {
  original: '../FireDrone Logo.png',
  thumbnail: '../FireDrone Logo.png',
 },
 ];
 
class Gallery extends React.Component {
  render() {
    return(
      <div className = "gallery container-fluid">
        <h2>Image Gallery</h2>
        <div className= "galleryComponent">
          <ImageGallery items={images}/>
        </div>
      </div>
    ) 
  }
}
 
export default Gallery;
