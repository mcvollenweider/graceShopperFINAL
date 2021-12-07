import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdb-react-ui-kit';

const FormPage = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4 fixed-center"><br/>Subscribe To Our Newsletter</p>
        <div className="grey-text">
          <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
        </div>
        <div className="text-center">
          <MDBBtn outline color="info">
            Send
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
         
    <h1> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> </h1>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default FormPage;