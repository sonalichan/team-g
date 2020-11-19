import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';


export class GiftGalleryPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            giftObtained: {},
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
                        requirementText: "log-in 1 time",
                        req: "log-in",
                        reqNum: 1,
                        earned: false
                    },
                    {
                        id: 7,
                        giftName: "India",
                        url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=1.00xw:0.798xh;0,0.202xh&resize=980:*",
                        requirementText: "log-in 5 times",
                        req: "log-in",
                        reqNum: 5,
                        earned: false
                    },
                    {
                        id: 8,
                        giftName: "Vietnam",
                        url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=1.00xw:0.798xh;0,0.202xh&resize=980:*",
                        requirementText: "log-in 10 times",
                        req: "log-in",
                        reqNum: 10,
                        earned: false
                    },
                    {
                        id: 9,
                        giftName: "New Zealand",
                        url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=1.00xw:0.798xh;0,0.202xh&resize=980:*",
                        requirementText: "Log-in 15 times",
                        req: "log-in",
                        reqNum: 15,
                        earned: false
                    },
                    {
                        id: 10,
                        giftName: "France",
                        url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=1.00xw:0.798xh;0,0.202xh&resize=980:*",
                        requirementText: "Log-in 20 times",
                        req: "log-in",
                        reqNum: 20,
                        earned: false
                    }
                ]
            },
            
        };

        this.closeModal = this.closeModal.bind(this);
    }


    componentDidMount() {
      window.scrollTo(0, 0);
    }

    
    addEvent = () => {
        let gifts = this.state.user.giftGallery;
        let numOfEvents = this.state.user.event + 1;
        let ifGiftObtained = false;
        let giftObtained = {};
        gifts = gifts.map((gift) => {
            // if gift is already earned, do nothing
            if (gift.earned) {
                return gift;
            }

            // if gift's requirement is not event-related, do nothing
            if (gift.req != "event") {
                return gift;
            }

            // if gift's requirement num is not reached, do nothing
            if (numOfEvents < gift.reqNum) {
                return gift;
            } 

            gift.earned = true;
            ifGiftObtained = true;
            giftObtained = gift;
            return gift;
        });

        this.setState({
            modal: ifGiftObtained,
            giftObtained: giftObtained,
            user: {
                ...this.state.user,
                event: numOfEvents,
                giftGallery: gifts
            }
        })
    }

    logIn = () => {

        let gifts = this.state.user.giftGallery;
        let numOfLogIn = this.state.user.logIn + 1;
        let ifGiftObtained = false;
        let giftObtained = {};


        gifts = gifts.map((gift) => {
            // if gift is already earned, do nothing
            if (gift.earned) {
                return gift;
            }

            // if gift's requirement is not event-related, do nothing
            if (gift.req != "log-in") {
                return gift;
            }

            // if gift's requirement num is not reached, do nothing
            if (numOfLogIn < gift.reqNum) {
                return gift;
            } 

            gift.earned = true;
            ifGiftObtained = true;
            giftObtained = gift;

            return gift;
        });


        this.setState({
            modal: ifGiftObtained,
            giftObtained: giftObtained,
            user: {
                ...this.state.user,
                logIn: numOfLogIn,
                giftGallery: gifts
            }
        })
    }

  
    //  close modal
    closeModal() {
        this.setState({
            modal: false
        });
    }


    render() {
        let gerbilGifts;

        gerbilGifts = this.state.user.giftGallery.map((gift) => {
            return <GiftCard key={gift.id} data={gift} />;
        })

        let renderModal;
        if (this.state.modal) {
            renderModal = <RenderModal gift={this.state.giftObtained} closeModal={this.closeModal} modal={this.state.modal}/>;
        } else {
            renderModal = "";
        }


        return (
            <div id="gift-gallery-Page">
                <div className="intro-message">
                    <p className="gerbil-text-1">Now you and Gerbil are good friends. Gerbil will never forget you. Hangout with Gerbil more and he will send you secret surprises!!</p>
                    <Button className="test" outline color="info" onClick={this.addEvent}> event + </Button>
                    <Button className="test" outline color="warning" onClick={this.logIn}> sign in + </Button>
                    <p>Event: {this.state.user.event}  Sign In: {this.state.user.logIn}</p>
                </div>                
                <div className="gifts">
                    {gerbilGifts}
                </div>
                {renderModal}
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
                    <img src={gift.url} />
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


class RenderModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let giftObtained = this.props.gift;
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.closeModal}>
                <ModalHeader toggle={this.props.closeModal} className="gerbil-text-1">Gerbil's secret gift</ModalHeader>
                <ModalBody>
                    <p className="gerbil-gift-message gerbil-text-1">Thanks for telling me all of your story! Here is a secret gift!!! Hope you like it!</p>
                    <div className="gerbil-gift">
                        <img src={giftObtained.url} />
                    </div>
                    <div className="gerbil-gift-name gerbil-text-1">{giftObtained.giftName}</div>
                </ModalBody>
            </Modal>
        );
    }
}
