import React from "react"
import { useParams } from "react-router-dom"
import Shoes from "./../json/shoes.json"
import './ProductItem.css'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Typography from '@material-ui/core/Typography';

export default function ProductItem() {
    const { id } = useParams()
    const shoe = Shoes[id];

    if (!shoe) {
        return (<div style={{ textAlign: 'center' }}> <h2>Opps! <br /> Product Not Found!</h2> </div>)
    }

    return (
        <div className="product-item">
            <Grid item xs={12} md={6} lg={6}>
                <img className="shoe-img" src={shoe.img} alt="Shoe"/>
            </Grid>
            <div class="product-right">
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <h4 className="shoe-heading">{shoe.name}</h4>
                    <Button className="btn" variant="contained" color="primary">
                        <FavoriteIcon className="icon" />
                            Add to Favourite
                        </Button>
                    <Button className="btn" variant="contained" color="secondary">
                        <ShoppingCartIcon />
                            Add tO Cart
                    </Button>
                    <Typography className="product-right-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                         electronic typesetting, remaining essentially unchanged.
                    </Typography>

                </Grid>
            </div>
        </div>
    )
}