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

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  max-width: 550px;
  width: 100%;
  padding: 2rem 1rem;
  position:
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: -1rem;

  &:hover {
    color: hsl(26, 100%, 55%);
  }
`;

const Navigation = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;


  ${props => props.direction === 'prev' ? 'left: -25px;' : 'right: -25px;'}

  &:hover {
    color: hsl(26, 100%, 55%);
  }
`;

function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <GalleryContainer>
        <MainImage
          src={images[selectedImage].main}
          alt={`Product ${selectedImage + 1}`}
          onClick={() => setIsModalOpen(true)}
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

      {isModalOpen && (
        <Modal onClick={() => setIsModalOpen(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={() => setIsModalOpen(false)}>×</CloseButton>
            <MainImage
              src={images[selectedImage].main}
              alt={`Product ${selectedImage + 1}`}
            />
            <Navigation direction="prev" onClick={prevImage}>
              &#8249;
            </Navigation>
            <Navigation direction="next" onClick={nextImage}>
              &#8250;
            </Navigation>
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
          </ModalContent>
        </Modal>
      )}
    </>
  );
}

export default ProductGallery;
