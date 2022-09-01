import React, { useEffect, useState } from 'react';
import excuseImg from '../excuse.bmp'
import axios from 'axios';

const Hero = () => {
    const [category, setCategory] = useState('');
    const [excuse, setExcuse] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const randomUrl = 'https://excuser.herokuapp.com/v1/excuse';
    const categoryUrl = `https://excuser.herokuapp.com/v1/excuse/${category}`;

    useEffect(() => {
      getRandomExcuse()
    
    }, [ ]);

    const  getRandomExcuse = () => {
		axios.get(randomUrl).then((result) => {
            setExcuse(result.data);
            setIsLoading(false)
		}).catch((err) => {
            console.log(err);
        });
    }

    const getExcuse = () => {
        if (!category) {
            alert("Please Select a category")
        } else {
            axios.get(categoryUrl).then((res) => {
                setExcuse(res.data);
                setIsLoading(false)
            }).catch((err) => {
                console.log(err);
            })
        }
	}

    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={excuseImg} className="d-block mx-lg-auto img-fluid" alt="inages" width="700" height="500" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">No Excuse? Try Some Here!!</h1>

                    <p className="lead">Get excuses for your actions in the following categories.</p>
                    
                    <p className='h3'>Family | Office | Children | College | Party</p> 

                    <div className="excuse-text my-5">

                        <div className="card">
                            <div className="card-header">
                                <span className='h5'>Your Excuse</span>
                            </div>
                            <div className="card-body">
                                
                                <blockquote className="blockquote mb-0">
                                    { 
                                        isLoading? (
                                            <div className='text-center'>
                                                <div className="spinner-border text-warning text-center" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </div>
                                        ):
                                        excuse.map(exc => (
                                            <div key={ exc.id }>
                                                <p>{ exc.excuse }</p>
                                                <footer className="blockquote-footer mt-2 mb-0 fw-bold">Category: <cite title="Source Title" className='text-capitalize'>{ exc.category }</cite></footer>
                                            </div>
                                        ))
                                    }
                               
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="d-grid gap-2 d-flex justify-content-md-start justify-content-between">
                        <select className="form-select w-50" onChange={(e) => setCategory(e.target.value)}>
                            <option defaultselected='true'>Select a category</option>
                            <option value="family">Family</option>
                            <option value="office">Office</option>
                            <option value="children">Children</option>
                            <option value="college">College</option>
                            <option value="party">Party</option>
                        </select>
                        <button type="button" 
                            className="btn btn-outline-secondary btn-lg px-4"
                            onClick={getExcuse}
                            >
                            Get Excuse
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero