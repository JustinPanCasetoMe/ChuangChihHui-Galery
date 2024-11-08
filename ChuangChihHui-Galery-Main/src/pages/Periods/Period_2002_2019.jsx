import React from 'react'
import { Link } from 'react-router-dom'

const Period_2002_2019 = ({ artworks = [] }) => {


  const imgRender = (img_Id, row) => {

    const artwork = artworks[img_Id -= 1];
    if (!artwork) return null;

    return(
      <div 
        className={`mg-b-300`}
        style={{
          marginBottom:`
            ${artwork.id===34 ? '30px' :
              artwork.id===36 ? '30px' :
              artwork.id===37 ? '30px' : '180px'}
        `}}
      >
        <Link to={`/portfolio/artwork_${artwork.name}`} className={{}}>
          <img
            src={artwork.img} alt={artwork.name} 
            className='bx-sd-sm imgActive trans-2 mg-b-50'
            style={{
              height: 
              row === 1 ? '400px' :
              row === 2 ? '480px' :
              row === 3 ? '480px' :
              row === 4 ? '480px' :
              row === 5 ? '480px' :
              row === 6 ? '480px' : '',
            }
          }
          />
        </Link>
        <div className={`${
          artwork.id===34 ? 'dn' :
          artwork.id===36 ? 'dn' :
          artwork.id===37 ? 'dn' : ''
        }`}>
          <h3>{artwork.name}</h3>
          <h3>{artwork.size}{artwork.mediums}{artwork.year}</h3>
        </div>
      </div>
    )
  }

  
  return (

    <>
      <div className='fw'>
        <h2 className='txt-aln-c' style={{marginBottom:'200px'}}>2020-2024</h2>

        <div className='df jc-sb'>
          {imgRender(48, 1)}
          {imgRender(6, 1)}
          {imgRender(27, 1)}
        </div>
        <div className='df jc-sa'>
          {imgRender(5, 2)}
          {imgRender(4, 2)}
        </div>
        <div className='df jc-sa'>
          {imgRender(28, 3)}
          {imgRender(29, 3)}
          {imgRender(30, 3)}
        </div>
        <div className='df jc-c'>
          {imgRender(31,4)}
        </div>
        <div className='df jc-sa'>
          {imgRender(32, 5)}
          {imgRender(33, 5)}
        </div>
        <div className='df jc-c'>
          <div style={{width:'66%'}}>
            <div className='df jc-sb'>
              {imgRender(34, 6)}
              {imgRender(36, 6)}
            </div>
            <div className='df jc-sb'>
              {imgRender(35, 6)}
              {imgRender(37, 6)}
            </div>
          </div>
        </div>
      </div>

      <div className='df jc-c mg-b-300'>
        <Link to='/portfolio/' className='NavLink trans-2'>
          <h3>歷代經典總覽</h3>
        </Link>
      </div>
    
    </>

  )
}

export default Period_2002_2019