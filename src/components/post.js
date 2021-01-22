import React, { Fragment } from 'react'
import { Card, Col, Button } from "reactstrap"
import "../App.css"
import { Bones, View } from "react-bones/lib";

const Post = ({ posts, loading }) => {

    if (loading) {
        <View>
            <Bones />
            <View style={{ padding: 10 }} />
            <Bones width={600} height={20} />
            <View style={{ padding: 10 }} />
            <Bones width={600} height={20} />
            <View style={{ padding: 10 }} />
            <Bones width={600} height={20} />
            <View style={{ padding: 10 }} />
        </View>
    }
    return (
        <Fragment>
        {posts.map(post => (

            <Col md="6" xs="12" lg="3">
                <Card body style={{ height: "200px"}} className="mb-4 display-card">
                    <div className="section">
                        <div className="description">
                            <h5>FirstName: {post.FirstName}</h5> 
                            <h5>LastName: {post.LastName}</h5> 
                        </div>
                        <div className="description">
                            <h6>Username: {post.UserName}</h6>
                            <h6>Gender: {post.Gender}</h6> 
                            <h6><span><i class="fas fa-phone"></i></span>{post.PhoneNumber}</h6>
                            <h6><span><i class="far fa-envelope"></i></span>{post.Email}</h6>   
                        </div>
                        <div className="description">
                            <h6>Lat: {post.Latitude}</h6>
                            <h6>Long: {post.Longitude}</h6>
                        </div>
                    </div>
                    <div className="section1">
                        <div className="description">
                            <h6>{post.DomainName}</h6>
                            <h6>Mac Address:{post.MacAddress}</h6>
                            <h6>URL: {post.URl}</h6>
                            <h6>Last seen: {post.LastLogin}</h6>
                        </div>
                        <div className="description">
                            <h6>{post.CreditCardNumber}</h6>
                            <h6><span><i class="fas fa-credit-card"></i></span>{post.CreditCardtype}</h6>
                            <h6>Payment Menthod: {post.PaymentMethod}</h6>
                        </div>
                    </div>
                </Card>
            </Col>
        ))}
    </Fragment>
    )
}

export default Post