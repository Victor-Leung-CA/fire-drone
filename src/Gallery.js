import React, {Component} from "react";
import ImageGallery from 'react-image-gallery';
import "./css/Gallery.css"

const images = [
 {
   original: 'https://picsum.photos/id/125/1000/600/',
   thumbnail: 'https://picsum.photos/id/125/250/150/',
 },
 {
  original: 'https://picsum.photos/id/10/1000/600/',
  thumbnail: 'https://picsum.photos/id/10/250/150/',
 },
 {
  original: 'https://picsum.photos/id/1021/1000/600/',
  thumbnail: 'https://picsum.photos/id/1021/250/150/',
 },
 {
  original: 'https://picsum.photos/id/1043/1000/600/',
  thumbnail: 'https://picsum.photos/id/1043/250/150/',
 },
 {
  original: 'https://picsum.photos/id/1056/1000/600/',
  thumbnail: 'https://picsum.photos/id/1056/250/150/',
 },
 {
  original: 'https://picsum.photos/id/11/1000/600/',
  thumbnail: 'https://picsum.photos/id/11/250/150/',
 },
 {
  original: 'https://picsum.photos/id/121/1000/600/',
  thumbnail: 'https://picsum.photos/id/121/250/150/',
 },
 {
  original: 'https://picsum.photos/id/17/1000/600/',
  thumbnail: 'https://picsum.photos/id/17/250/150/',
 },
 {
  original: 'https://picsum.photos/id/229/1000/600/',
  thumbnail: 'https://picsum.photos/id/229/250/150/',
 },
 {
  original: 'https://picsum.photos/id/243/1000/600/',
  thumbnail: 'https://picsum.photos/id/243/250/150/',
 },
 {
  original: 'https://picsum.photos/id/28/1000/600/',
  thumbnail: 'https://picsum.photos/id/28/250/150/',
 },
 {
  original: 'https://picsum.photos/id/324/1000/600/',
  thumbnail: 'https://picsum.photos/id/324/250/150/',
 },
 {
  original: 'https://picsum.photos/id/412/1000/600/',
  thumbnail: 'https://picsum.photos/id/412/250/150/',
 },
 ];
 
class Gallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}
 
export default Gallery;
