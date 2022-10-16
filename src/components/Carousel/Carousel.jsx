import React, { useState, useEffect } from 'react'
import styles from './CarouselStyle.module.scss'
const slideWidth = 22

const _items = [
  {
    new: {
      title: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
      desc: '1h ago · by Troy Corlson',
      image: 'https://i.ibb.co/YTHNr3C/Image.png'
    }
  },
  {
    new: {
      title: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
      desc: '1h ago · by Troy Corlson',
      image: 'https://i.ibb.co/YTHNr3C/Image.png'
    }
  },
  {
    new: {
      title: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
      desc: '1h ago · by Troy Corlson',
      image: 'https://i.ibb.co/YTHNr3C/Image.png'
    }
  },
  {
    new: {
      title: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
      desc: '1h ago · by Troy Corlson',
      image: 'https://i.ibb.co/YTHNr3C/Image.png'
    }
  },
  {
    new: {
      title: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
      desc: '1h ago · by Troy Corlson',
      image: 'https://i.ibb.co/YTHNr3C/Image.png'
    }
  }
]

const length = _items.length
_items.push(..._items)

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const createItem = (position, idx) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`
    },
    new: _items[idx].new
  }

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles }
      break
    case length:
      break
    default:
      item.styles = { ...item.styles, opacity: 0 }
      break
  }
  return item
}

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
  const item = createItem(pos, idx, activeIdx)

  return (
    <li className={styles['carousel__slide-item']} style={item.styles}>
      <div className={styles['carousel__slide-item-img-link']}>
        <img src={item.new.image} alt={item.new.title} />
      </div>
      <div className={styles['carousel-slide-item__body']}>
        <h4>{item.new.title}</h4>
        <p>{item.new.desc}</p>
      </div>
    </li>
  )
}

const keys = Array.from(Array(_items.length).keys())

const Carousel = () => {
  const [items, setItems] = useState(keys)
  const [isTicking, setIsTicking] = useState(false)
  const [activeIdx, setActiveIdx] = useState(0)
  const bigLength = items.length

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true)
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength])
      })
    }
  }

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true)
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength])
      })
    }
  }

  useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false))
  }, [isTicking])

  useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length)
  }, [items])

  return (
    <div className={styles['carousel__wrap']}>
      <div className={styles['carousel__inner']}>
        <button
          className={`
            ${styles['carousel__btn']}
            
            ${styles['carousel__btn--prev']}
        `}
          onClick={() => prevClick()}
        >
          <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' className='bi bi-chevron-left' viewBox='0 0 16 16'>
            <path fillRule='evenodd' d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z' />
          </svg>
        </button>
        <div className={styles['carousel__container']}>
          <ul className={styles['carousel__slide-list']}>
            {items.map((pos, i) => (
              <CarouselSlideItem key={i} idx={i} pos={pos} activeIdx={activeIdx} />
            ))}
          </ul>
        </div>
        <button className={` ${styles['carousel__btn']} ${styles['carousel__btn--next']} `} onClick={() => nextClick()}>
          <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' className='bi bi-chevron-right' viewBox='0 0 16 16'>
            <path fillRule='evenodd' d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z' />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Carousel
