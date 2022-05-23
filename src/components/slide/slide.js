import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { urlAPI } from '../../utils/config'
import Loader from '../loader/Loader';

export default function Slide() {
    const [loaderShow, setLoaderShow] = useState(false);
    useEffect(()=>{
        setLoaderShow(true)
        axios.get(`${urlAPI}/producto/traer`, {
            headers: {
                "Content-type": "application/json"
            }
        }).then(succ=>{
            if(succ.data.status === 202){
                succ.data.data.map((x,index)=> dataSlide.push(x))
                // setdataSlide(dataSlide)
            }
            setLoaderShow(false)
        }).catch(err=>{
            console.log(err);
        })
    },[])
    const [dataSlide, setdataSlide] = useState([
        {
            imagenes:'https://cdn.pixabay.com/photo/2022/03/12/07/47/lotus-7063576_960_720.jpg',
            titulo:'producto 1',
            descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem elit, imperdiet consectetur enim ac, commodo varius lacus.'
        },
        {
            imagenes:'https://cdn.pixabay.com/photo/2022/04/23/07/38/lin-zhi-7151302_960_720.jpg',
            titulo:'producto 2',
            descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem elit, imperdiet consectetur enim ac, commodo varius lacus.'
        },
        {
            imagenes:'https://cdn.pixabay.com/photo/2022/05/10/20/52/calligraphy-7188024_960_720.jpg',
            titulo:'producto 2',
            descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem elit, imperdiet consectetur enim ac, commodo varius lacus.'
        }
    ])
    
    let elemento = [];
    const getImg = () => {
        
    }
    return (
        <React.Fragment>
             {/* {
                loaderShow && (
                    <Loader show={true} />
                )
            } */}
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                <div class="carousel-inner">
                    {
                        dataSlide.map((x, index)=>{
                            return(
                                <div class={`carousel-item ${index=== 0&&'active'}`}>
                                    <img src={x.imagenes} class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>{x.titulo}</h5>
                                        <p>{x.descripcion}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </React.Fragment>
    )
}
