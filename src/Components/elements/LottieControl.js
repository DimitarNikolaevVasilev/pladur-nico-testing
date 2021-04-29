import React from 'react'
import Lottie from 'react-lottie';


export default class LottieControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isStopped: false, isPaused: !this.props.running};
    }

    render(){
        const options = {
            loop: false,
            autoplay: false,
            animationData: this.props.data
        };

        return <Lottie
            options={options}
            width={this.props.width || 100}
            height={this.props.height || 100}
            isStopped={this.state.isStopped}
            isPaused={!this.props.running}
        />
    }
}
