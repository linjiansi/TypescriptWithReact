import React, { useState, Dispatch } from 'react';
import { ImageContainer } from './style';
import noImage from './assets/noImage.png';

type Props = {
  setImage: Dispatch<any>;
};

export function ImageComponent() {
  const [imagePreview, setImagePreview] = useState<any>(noImage);
  const [base64, setBase64] = useState<string>();

  const photoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const file = event.currentTarget.files
    if (reader !== undefined && file) {
      reader.onloadend = () => {
        setImagePreview(reader.result);
      }
      reader.readAsDataURL(file[0]);
    }
  }

  return (
    <>
      <ImageContainer>
        <img src={imagePreview}></img>
        <input type='file'
              id='file'
              name='avatar'
              accept='.jpeg, .png, .jpg'
              onChange={photoUpload}
              src={imagePreview}
              required
        />
      </ImageContainer>
    </>
  );
}
