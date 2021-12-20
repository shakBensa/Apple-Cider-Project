import React from 'react'

export default function Track(props) {
    return (
        <div >
            <img className='cover' style={{boxShadow:'2px 3px 15px'}} width='200px' height='200px' src={props.img} alt={props.name}  />
            <link rel="stylesheet" href="" />
            <div className='platforms'>
            <a href={props.spotify.link} target="_blank" rel="noreferrer" > <img className='platformImg' width='45px' height='45px' src={props.spotify.img} alt={props.name} /></a>
            <a href={props.apple.link} target="_blank" rel="noreferrer"> <img className='platformImg' width='45px' height='45px'src={props.apple.img} alt={props.name} /></a>
           <a href={props.deezer.link} target="_blank" rel="noreferrer"> <img className='platformImg' width='45px' height='45px' src={props.deezer.img} alt={props.name} /></a>
            {/* <a href={props.tidal.link}> <img src={props.tidal.img} alt={props.name} /></a>  */}
            </div>
        </div>
    )
}
