import React, {Component} from "react";
import ImageGallery from 'react-image-gallery';
import "../css/Gallery.css"

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
      <div className = "gallery">
        <ImageGallery items={images} className= "galleryComponent"/>
      </div>
    ) 
  }
}
 
export default Gallery;
