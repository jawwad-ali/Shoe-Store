import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css"
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {Link} from "react-router-dom"

export default function RouteConfig() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="main-heading">good design is always in season</h1>
                    <Button className="home-btn" variant="contained" color="primary">
                        <Link to="/Product" className="link">
                        <VisibilityIcon  className="icon-btn"/>
                           START EXPLORING
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
