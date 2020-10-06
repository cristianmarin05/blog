import React from 'react';
import useFetch from '../../hooks/useFetch'
import gitHub from '../../assets/github.png'
import Spinner from '../Spinner'

import './Projects.scss'


export default function Projects(props){
    const {dark} = props;
    const work = useFetch('https://blogservercm.herokuapp.com/work');
    const data = work.data.body;
    return(
        <div className={`projects ${dark}`}>
            <h2>Proyectos</h2>
            {
                !work.loading ?
                data.map((item,index)=>{
                    return <div key={index} className="projects__list">
                                <div >
                                    <p>{item.name}</p>
                                </div>
                                <div className="projects__list-links">
                                    <a href={item.repository} target='_blank'>
                                        <img src={gitHub} alt="github"/>
                                    </a>
                                    <a href={item.demo} target='_blank'>
                                        <p>DEMO</p>
                                    </a>
                                </div>
                           </div>
                })
                : <Spinner />
            }
        </div>
    )
}