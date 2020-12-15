import React, { Component } from 'react';
import { Button } from 'reactstrap';


export class GiftGalleryPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                event: 0,
                task: 0, 
                giftGallery: []
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
                    <div className="warning-message gerbil-text-1">You haven't logged in yet! Click "Sign In" on the top right to let Gerbil know who you are!</div>
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

