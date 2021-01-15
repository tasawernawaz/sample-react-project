import React from 'react'
import {
    MDBContainer,
    MDBRow,
    MDBCol
} from "mdbreact"


const socket = new WebSocket("ws://stream.tradingeconomics.com/?client=guest:guest")

class Price extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            price: 0.0,
            timestamp: "00:00:00"
        }

    }

    componentDidMount() {
        socket.onopen = () => {
            socket.send(JSON.stringify({"topic": "subscribe", "to": "EURUSD:CUR"}))
        }

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data)
            this.setState(currentState => ({
                price: data.price,
                timestamp: new Date(data.dt).toLocaleTimeString("en-US")
            }))
        }
      }

      componentWillUnmount() {
        socket.close()
      }

      render() {

        return (
            <MDBContainer>
            <MDBRow>
            <MDBCol md="6">
                <p><strong>Price:</strong>{this.state.price}</p>
                <p><strong>Timestamp:</strong>{this.state.timestamp}</p>
            </MDBCol>
            </MDBRow>
            </MDBContainer>
        )
      }
}

export default Price