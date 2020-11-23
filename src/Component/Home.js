import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css"
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from "react-router-dom"

export default function RouteConfig() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-5 heading-div">
                    <h1 className="main-heading">Ali  Jawwad's Store</h1>

                    <div className="btn-div">
                        <Button className="home-btn" variant="contained" color="default">
                            <Link to="/Product" className="link">
                                <VisibilityIcon className="icon" />
                                View Collection
                        </Link>
                        </Button>
                    </div>
                </div>
                <div className="col-lg-7 img-Div">
                    <img src="https://previews.123rf.com/images/kornienko/kornienko1609/kornienko160900226/63545123-chisinau-moldova-may-27-2016-new-style-nike-shoes-taken-at-studio-and-isolated-over-white-background.jpg" alt="shoe" />
                </div>
            </div>
        </div>
    )
}
