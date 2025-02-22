import React, { useState } from 'react';
import styled from '@emotion/styled';

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 445px;
`;

const MainImage = styled.img`
  width: 100%;
  border-radius: 15px;
  cursor: pointer;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
`;

const ThumbnailWrapper = styled.div`
  position: relative;
  width: 88px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;

  ${({ isSelected }) => isSelected && `
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: hsla(0, 0%, 100%, 0.75);
    }
    border: 2px solid hsl(26, 100%, 55%);
  `}

  &:hover::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsla(0, 0%, 100%, 0.5);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  display: block;
`;

function ProductGallery() {
    const [selectedImage, setSelectedImage] = useState(0);
    const images = [
        {
            main: '/images/products/image-product-1.jpg',
            thumbnail: '/images/products/image-product-1-thumbnail.jpg'
        },
        {
            main: '/images/products/image-product-2.jpg',
            thumbnail: '/images/products/image-product-2-thumbnail.jpg'
        },
        {
            main: '/images/products/image-product-3.jpg',
            thumbnail: '/images/products/image-product-3-thumbnail.jpg'
        },
        {
            main: '/images/products/image-product-4.jpg',
            thumbnail: '/images/products/image-product-4-thumbnail.jpg'
        }
    ];

    return (
        <GalleryContainer>
            <MainImage
                src={images[selectedImage].main}
                alt={`Product ${selectedImage + 1}`}
            />
            <ThumbnailContainer>
                {images.map((image, index) => (
                    <ThumbnailWrapper
                        key={index}
                        isSelected={selectedImage === index}
                        onClick={() => setSelectedImage(index)}
                    >
                        <Thumbnail
                            src={image.thumbnail}
                            alt={`Thumbnail ${index + 1}`}
                        />
                    </ThumbnailWrapper>
                ))}
            </ThumbnailContainer>
        </GalleryContainer>
    );
}

export default ProductGallery;
