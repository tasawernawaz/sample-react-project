import React from "react";
import {
    MDBBtn,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter
} from 'mdbreact';

class ResetModal extends React.Component {

    render () {
        return (
            <React.Fragment>
            <MDBModal isOpen={this.props.showModal}>
              <MDBModalHeader
                className="text-center"
                titleClass="w-100 font-weight-bold"
                toggle={() => this.props.toggleModal()}
              >
                Reset Password
              </MDBModalHeader>
              <MDBModalBody>
              <form>
                    <label htmlFor="currentPassword" className="grey-text">
                    Current Password
                    </label>
                    <input type="email" id="currentPassword" className="form-control" />
                    <br />
                    <label htmlFor="newPassword" className="grey-text">
                    New Password
                    </label>
                    <input type="password" id="newPassword" className="form-control" />
                    <br />
                    <label htmlFor="confirmPassword" className="grey-text">
                    Confirm Password
                    </label>
                    <input type="password" id="confirmPassword" className="form-control" />
                    <div className="text-center mt-4">
                    <MDBBtn color="indigo" type="submit">Reset Password</MDBBtn>
                    </div>
                </form>
              </MDBModalBody>
              <MDBModalFooter className="justify-content-center">
              </MDBModalFooter>
            </MDBModal>
            </React.Fragment>
        )
    }
}

export default  ResetModal