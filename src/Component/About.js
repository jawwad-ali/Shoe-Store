import React from 'react'
import "./About.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import myimg from "./../images/myimg.jpg"
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function About() {
    return (
        <div className="container ">
            <h1 className="about-heading">about me</h1>
            <div className="row mt-5">
                <div className="col-lg-6">
                    <img className="myImg" src={myimg} alt="My Image"/>
                </div>
                <div className="col-lg-6">
                    <h2>Ali Jawwad</h2>
                    <p className="text-muted">
                        This is a <strong>Shoe Store</strong> project. This project is build and developed under the guidence of 
                        PanaCloud team. This is my BootCamp project number <strong>3</strong>. This project is developed by using 
                        HTML 5 , CSS 3 , BootStarp ,  React JS (React Routes and Material UI ).
                    </p>
                    <div class="text-center ">
                        <a href="https://github.com/jawwad-ali" title="Github">
                            <GitHubIcon className="icons" />
                        </a>
                        <a href="https://www.facebook.com/ali.jawwad.56" title="Facebook">
                            <FacebookIcon className="icons"  />
                        </a>
                        <a href="https://twitter.com/alijawwad1995" title="Twitter">
                            <TwitterIcon className="icons"/>
                        </a>
                        <a href="https://www.instagram.com/alijawwad199/?hl=en" title="Instagram">
                            <InstagramIcon className="icons"/> 
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
