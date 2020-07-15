import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Shoes from  './../json/shoes.json'
import './Product.css'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    main: {
        width: "100%",
        textAlign:"center",
    },
    heading: {
        fontSize: "25px",
    },
    root: {
        maxWidth: 345,
        marginTop:"17px",
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    icon: {
        fontSize: "15px",
    }
}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    const ShoeKey = Object.keys(Shoes)
    
    return (
        <div>
        <p className={classes.heading}>Men's Shoe and Sneaker</p>
        <div className="discount"> <p className="discount-text"> upto 40% off! </p></div>
        <Grid className={classes.main} container spacing={3}>
            {
                ShoeKey.map(keyName => {
                   
                    const shoe =  Shoes[keyName]

                    return (
                        <Grid item xs={12} md={3} lg={3}>
                            <Card key={keyName} className={classes.root}>
                                <CardHeader
                                    title={shoe.name} 
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={shoe.img}
                                />
                                <CardContent>
                                    <Button className={classes.btn} variant="contained" color="secondary">
                                        <ShoppingCartIcon className={classes.icon} />
                                        Add tO Cart
                                    </Button>
                                    <Link className="link" to={`/product/${keyName}`}>
                                        <Button variant="contained" color="primary">
                                            <VisibilityIcon className={classes.icon} />
                                            Quick View
                                        </Button>
                                    </Link>  
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
        </div>
    );
        
}