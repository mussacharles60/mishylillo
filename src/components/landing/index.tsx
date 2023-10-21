import './index.scss';
import './carousel.scss';

import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import React, { useEffect, useRef, useState } from 'react';

import { MdEmail } from 'react-icons/md';

type Product = { name: string; info: string; price: number; src: any };
const products: Product[] = [
  {
    name: 'Pazia',
    info: 'Mapazia haya ni imara kabisa na yanadumu kwa muda mrefu',
    price: 30000,
    src: require('../../assets/images/image-0.jpg'),
  },
  {
    name: 'Pazia',
    info: 'Mapazia haya ni imara kabisa na yanadumu kwa muda mrefu',
    price: 30000,
    src: require('../../assets/images/image-5.jpg'),
  },
  {
    name: 'Pazia',
    info: 'Mapazia haya ni imara kabisa na yanadumu kwa muda mrefu',
    price: 30000,
    src: require('../../assets/images/image-7.jpg'),
  },
  {
    name: 'Pazia',
    info: 'Mapazia haya ni imara kabisa na yanadumu kwa muda mrefu',
    price: 30000,
    src: require('../../assets/images/image-10.jpg'),
  },
  {
    name: 'Pazia',
    info: 'Mapazia haya ni imara kabisa na yanadumu kwa muda mrefu',
    price: 30000,
    src: require('../../assets/images/image-6.jpg'),
  },
  {
    name: 'Pazia',
    info: 'Mapazia haya ni imara kabisa na yanadumu kwa muda mrefu',
    price: 30000,
    src: require('../../assets/images/image-4.jpg'),
  },
  {
    name: 'Pazia',
    info: 'Mapazia haya ni imara kabisa na yanadumu kwa muda mrefu',
    price: 30000,
    src: require('../../assets/images/image-3.jpg'),
  },
  {
    name: 'Pazia',
    info: 'Mapazia haya ni imara kabisa na yanadumu kwa muda mrefu',
    price: 30000,
    src: require('../../assets/images/image-2.jpg'),
  },
];
const LandingPage = () => {
  return (
    <div className='landing-main'>
      <div className='landing-header'>
        <a href='#' className='left-lay'>
          <span className='left-text'>MishyLillo's</span>
          <span className='left-text-sm'>Shopping & retail</span>
        </a>
        <div className='center-lay'>
          <a href='#shop' className='header-btn'>
            <span className='header-btn-text'>Shop</span>
          </a>
          <a href='#products' className='header-btn'>
            <span className='header-btn-text'>Products</span>
          </a>
          <a href='#contact' className='header-btn'>
            <span className='header-btn-text'>Contact</span>
          </a>
          <a href='#location' className='header-btn'>
            <span className='header-btn-text'>Location</span>
          </a>
          {/* <span className='center-text'>Shopping & retail</span> */}
        </div>
        <div className='right-lay'>
          <a
            href='mailto: koshumma@gmail.com'
            target='_blank'
            rel='noreferrer'
            className='right-btn'
          >
            <span className='right-btn-text'>Email</span>
          </a>
          <a
            href='https://
            chat.whatsapp.com/GE3ETgPlgnzHLJ3rVojyhn
            '
            target='_blank'
            rel='noreferrer'
            className='right-btn'
          >
            {/* <FaWhatsapp className='right-btn-icon' /> */}
            <span className='right-btn-text'>WhatsApp</span>
          </a>
          <a
            href='https://instagram.com/shop_with_mishylillo'
            target='_blank'
            rel='noreferrer'
            className='right-btn'
          >
            {/* <FaInstagram className='right-btn-icon' /> */}
            <span className='right-btn-text'>Instagram</span>
          </a>
          <a
            href='https://tiktok.com/@mishylillo'
            target='_blank'
            rel='noreferrer'
            className='right-btn'
          >
            {/* <FaTiktok className='right-btn-icon' /> */}
            <span className='right-btn-text'>TikTok</span>
          </a>
        </div>
      </div>
      <div className='landing-body'>
        <section id='' className='first-lay'>
          <div className='cover-img-ly'>
            <div className='cover-img-top' />
            <img
              className='cover-img'
              alt=''
              src={require('../../assets/images/image-0.jpg')}
            />
          </div>
          <div className='left-lay'>
            <div className='title-lay'>
              <span className='title-text'>Shop With Mishylillo</span>
              <span className='title-text-2'>
                Badilisha Muonekano Wa Nyumba Yako
              </span>
              <span className='title-text-3'>
                Pata Pazia, Mashuka, Duvet, Zulia, Mito na Foronya Nzuri
              </span>
              <span className='title-text-4'>Kwa Bei Nafuu</span>
              <div className='links-lay'>
                <a
                  href='https://
            chat.whatsapp.com/GE3ETgPlgnzHLJ3rVojyhn
            '
                  target='_blank'
                  rel='noreferrer'
                  className='links-btn'
                >
                  <FaWhatsapp className='links-btn-icon' />
                </a>
                <a
                  href='https://instagram.com/shop_with_mishylillo'
                  target='_blank'
                  rel='noreferrer'
                  className='links-btn'
                >
                  <FaInstagram className='links-btn-icon' />
                </a>
                <a
                  href='https://tiktok.com/@mishylillo'
                  target='_blank'
                  rel='noreferrer'
                  className='links-btn'
                >
                  <FaTiktok className='links-btn-icon' />
                </a>
                <a
                  href='mailto: koshumma@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                  className='links-btn'
                >
                  <MdEmail className='links-btn-icon' />
                </a>
              </div>
            </div>
          </div>
          <div className='right-lay'>
            <div className='home-carousel-root-lay'>
              {/* <div className='home-carousel-inner-lay'>
                <div className='home-carousel-item'>
                  <div className='home-carousel-item-img-ly'>
                    <img
                      className='home-carousel-item-img'
                      alt='' src={require('../../assets/images/image-1.jpg')}
                    />
                  </div>
                </div>
                <div className='home-carousel-item'>
                  <div className='home-carousel-item-img-ly'>
                    <img
                      className='home-carousel-item-img'
                      alt='' src={require('../../assets/images/image-2.jpg')}
                    />
                  </div>
                </div>
                <div className='home-carousel-item'>
                  <div className='home-carousel-item-img-ly'>
                    <img
                      className='home-carousel-item-img'
                      alt='' src={require('../../assets/images/image-3.jpg')}
                    />
                  </div>
                </div>
                <div className='home-carousel-item'>
                  <div className='home-carousel-item-img-ly'>
                    <img
                      className='home-carousel-item-img'
                      alt='' src={require('../../assets/images/image-4.jpg')}
                    />
                  </div>
                </div>
                <div className='home-carousel-item'>
                  <div className='home-carousel-item-img-ly'>
                    <img
                      className='home-carousel-item-img'
                      alt='' src={require('../../assets/images/image-5.jpg')}
                    />
                  </div>
                </div>
                <div className='home-carousel-item'>
                  <div className='home-carousel-item-img-ly'>
                    <img
                      className='home-carousel-item-img'
                      alt='' src={require('../../assets/images/image-6.jpg')}
                    />
                  </div>
                </div>
                <div className='home-carousel-item'>
                  <div className='home-carousel-item-img-ly'>
                    <img
                      className='home-carousel-item-img'
                      alt='' src={require('../../assets/images/image-7.jpg')}
                    />
                  </div>
                </div>
              </div> */}
              <Carousel
                children={[
                  <CarouselItem
                    children={
                      <div className='home-carousel-item-img-ly'>
                        <img
                          className='home-carousel-item-img'
                          alt=''
                          src={require('../../assets/images/image-0.jpg')}
                        />
                      </div>
                    }
                  />,
                  <CarouselItem
                    children={
                      <div className='home-carousel-item-img-ly'>
                        <img
                          className='home-carousel-item-img'
                          alt=''
                          src={require('../../assets/images/image-1.jpg')}
                        />
                      </div>
                    }
                  />,
                  <CarouselItem
                    children={
                      <div className='home-carousel-item-img-ly'>
                        <img
                          className='home-carousel-item-img'
                          alt=''
                          src={require('../../assets/images/image-2.jpg')}
                        />
                      </div>
                    }
                  />,
                  <CarouselItem
                    children={
                      <div className='home-carousel-item-img-ly'>
                        <img
                          className='home-carousel-item-img'
                          alt=''
                          src={require('../../assets/images/image-3.jpg')}
                        />
                      </div>
                    }
                  />,
                  <CarouselItem
                    children={
                      <div className='home-carousel-item-img-ly'>
                        <img
                          className='home-carousel-item-img'
                          alt=''
                          src={require('../../assets/images/image-4.jpg')}
                        />
                      </div>
                    }
                  />,
                  <CarouselItem
                    children={
                      <div className='home-carousel-item-img-ly'>
                        <img
                          className='home-carousel-item-img'
                          alt=''
                          src={require('../../assets/images/image-6.jpg')}
                        />
                      </div>
                    }
                  />,
                  <CarouselItem
                    children={
                      <div className='home-carousel-item-img-ly'>
                        <img
                          className='home-carousel-item-img'
                          alt=''
                          src={require('../../assets/images/image-7.jpg')}
                        />
                      </div>
                    }
                  />,
                  <CarouselItem
                    children={
                      <div className='home-carousel-item-img-ly'>
                        <img
                          className='home-carousel-item-img'
                          alt=''
                          src={require('../../assets/images/image-8.jpg')}
                        />
                      </div>
                    }
                  />,
                  <CarouselItem
                    children={
                      <div className='home-carousel-item-img-ly'>
                        <img
                          className='home-carousel-item-img'
                          alt=''
                          src={require('../../assets/images/image-9.jpg')}
                        />
                      </div>
                    }
                  />,
                  <CarouselItem
                    children={
                      <div className='home-carousel-item-img-ly'>
                        <img
                          className='home-carousel-item-img'
                          alt=''
                          src={require('../../assets/images/image-10.jpg')}
                        />
                      </div>
                    }
                  />,
                  <CarouselItem
                    children={
                      <div className='home-carousel-item-img-ly'>
                        <img
                          className='home-carousel-item-img'
                          alt=''
                          src={require('../../assets/images/image-11.jpg')}
                        />
                      </div>
                    }
                  />,
                  <CarouselItem
                    children={
                      <div className='home-carousel-item-img-ly'>
                        <img
                          className='home-carousel-item-img'
                          alt=''
                          src={require('../../assets/images/image-12.jpg')}
                        />
                      </div>
                    }
                  />,
                ]}
              />
            </div>
          </div>
        </section>
        <section id='products' className='second-lay'>
          <div className='header-lay'>
            <span className='header-text'>Products</span>
          </div>
          <div className='body-lay'>
            {products.map((p, i) => (
              <ProductView key={i} p={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;

type CarouselProps = {
  children: JSX.Element[];
};

const Carousel = (props: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swipe = useRef<{ x: number; swiping?: boolean } | any>({});

  const updateIndex = (newIndex: number) => {
    if (newIndex >= React.Children.count(props.children) || newIndex < 0) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 3000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [activeIndex]);

  const onTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    swipe.current = { x: touch.clientX };
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.changedTouches && e.changedTouches.length) {
      swipe.current.swiping = true;
    }
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const touch = e.changedTouches[0];
    const swipedLeft = touch.clientX - swipe.current.x > 0 ? true : false;
    const swipedRight = touch.clientX - swipe.current.x > 0 ? false : true;
    const absX = Math.abs(touch.clientX - swipe.current.x);
    if (swipe.current.swiping && absX > 50) {
      if (swipedLeft) {
        updateIndex(activeIndex - 1);
      } else if (swipedRight) {
        updateIndex(activeIndex + 1);
      }
    }
    swipe.current = {};
  };

  return (
    <div
      className='home-carousel-lay'
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        className='home-carousel-inner-lay'
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {props.children.map((child) => React.cloneElement(child))}
      </div>
    </div>
  );
};

type CarouselItemProps = {
  children: React.ReactElement;
};

export const CarouselItem = (props: CarouselItemProps) => {
  return <div className='home-carousel-item'>{props.children}</div>;
};

type ProductProps = {
  p: Product;
};

const ProductView = (props: ProductProps) => {
  const withThousands = (input: number) => {
    if (input <= 0) return input + '';
    return String(input).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className='product-lay'>
      <div className='left-lay'>
        <div className='image-lay'>
          <div className='image-top' />
          <img alt='' src={props.p.src} className='image' />
        </div>
      </div>
      <div className='right-lay'>
        <span className='name-text'>{props.p.name}</span>
        <span className='info-text'>{props.p.info}</span>
        <span className='price-text'>{`${withThousands(
          props.p.price
        )} Tsh`}</span>
      </div>
    </div>
  );
};
