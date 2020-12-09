import React, { Component } from 'react';
import { Button } from 'reactstrap';


export class GiftGalleryPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                event: 0,
                logIn: 0, 
                giftGallery: [
                    {
                        id: 1,
                        giftName: "South Korea",
                        url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=1.00xw:0.798xh;0,0.202xh&resize=980:*",
                        requirementText: "add 1 event to calendar",
                        req: "event",
                        reqNum: 1,
                        earned: false
                    },
                    {
                        id: 2,
                        giftName: "China",
                        url: "https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg?w=600&quality=85",
                        requirementText: "add 5 event to calendar",
                        req: "event",
                        reqNum: 5,
                        earned: false
                    },
                    {
                        id: 3,
                        giftName: "United States",
                        url: "https://cnet3.cbsistatic.com/img/-qQkzFVyOPEoBRS7K5kKS0GFDvk=/940x0/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg",
                        requirementText: "add 20 event to calendar",
                        req: "event",
                        reqNum: 20,
                        earned: false
                    },
                    {
                        id: 4,
                        giftName: "Japan",
                        url: "https://i2.wp.com/www.wintersexpress.com/files/2019/08/IMG_4605.sunflower.jpg?fit=2546%2C3363&ssl=1",
                        requirementText: "add 50 event to calendar",
                        req: "event",
                        reqNum: 50,
                        earned: false
                    },
                    {
                        id: 5,
                        giftName: "Mexico",
                        url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=1.00xw:0.798xh;0,0.202xh&resize=980:*",
                        requirementText: "add 100 event to calendar",
                        req: "event",
                        reqNum: 100,
                        earned: false
                    },
                    {
                        id: 6,
                        giftName: "Australia",
                        url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=1.00xw:0.798xh;0,0.202xh&resize=980:*",
                        requirementText: "Secret",
                        req: "log-in",
                        reqNum: 2,
                        earned: false
                    },
                    {
                        id: 7,
                        giftName: "India",
                        url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=1.00xw:0.798xh;0,0.202xh&resize=980:*",
                        requirementText: "Secret",
                        req: "log-in",
                        reqNum: 5,
                        earned: false
                    },
                    {
                        id: 8,
                        giftName: "Vietnam",
                        url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=1.00xw:0.798xh;0,0.202xh&resize=980:*",
                        requirementText: "Secret",
                        req: "log-in",
                        reqNum: 10,
                        earned: false
                    },
                    {
                        id: 9,
                        giftName: "New Zealand",
                        url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=1.00xw:0.798xh;0,0.202xh&resize=980:*",
                        requirementText: "Secret",
                        req: "log-in",
                        reqNum: 15,
                        earned: false
                    },
                    {
                        id: 10,
                        giftName: "France",
                        url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=1.00xw:0.798xh;0,0.202xh&resize=980:*",
                        requirementText: "Secret",
                        req: "log-in",
                        reqNum: 20,
                        earned: false
                    }
                ]
            },
            
        };
    }


    componentDidMount() {
      window.scrollTo(0, 0);
    }

    // logIn = () => {

    //     let gifts = this.props.userData.giftGallery.giftGallery;
    //     let numOfLogIn = this.props.userData.giftGallery.logIn + 1;
    //     let ifGiftObtained = false;
    //     let giftObtained = {};


    //     gifts = gifts.map((gift) => {
    //         // if gift is already earned, do nothing
    //         if (gift.earned) {
    //             return gift;
    //         }

    //         // if gift's requirement is not event-related, do nothing
    //         if (gift.req !== "log-in") {
    //             return gift;
    //         }

    //         // if gift's requirement num is not reached, do nothing
    //         if (numOfLogIn < gift.reqNum) {
    //             return gift;
    //         } 

    //         gift.earned = true;
    //         ifGiftObtained = true;
    //         giftObtained = gift;

    //         return gift;
    //     });


    //     this.setState({
    //         modal: ifGiftObtained,
    //         giftObtained: giftObtained,
    //         user: {
    //             ...this.state.user,
    //             logIn: numOfLogIn,
    //             giftGallery: gifts
    //         }
    //     })
    // }

  
    render() {
        if (!this.props.ifLogIn) {
            return (
                <div className="warning">
                    <div className="warning-message gerbil-text-1">You haven't log-in yet! Click "Sign In" on the top right to let Gerbil know who you are!</div>
                </div>
            );
        }

        let gerbilGifts;
        gerbilGifts = this.props.userData.giftGallery.giftGallery.map((gift) => {
            return <GiftCard key={gift.id} data={gift} />;
        })

        return (
            <div id="gift-gallery-Page">
                <div className="intro-message">
                    <p className="gerbil-text-1">Now you and Gerbil are good friends. Gerbil will never forget you. Hangout with Gerbil more and he will send you secret surprises!!</p>
                    <Button className="test" outline color="warning" onClick={this.logIn}> sign in + </Button>
                    <p>Event: {this.state.user.event}  Sign In: {this.state.user.logIn}</p>
                </div>                
                <div className="gifts">
                    {gerbilGifts}
                </div>
            </div>
        );
    }
}

class GiftCard extends Component {
    render() {
        let gift = this.props.data;
        if (gift.earned) {
            return (
                <div className="gerbil-gift met">
                    <img alt="Gerbil's Gift" src={gift.url} />
                </div>
            );
        } else {
            return (
                <div className="gerbil-gift">
                    <p className="gerbil-gift-req">{gift.requirementText}</p>
                </div>
            );
        }
    }
}

