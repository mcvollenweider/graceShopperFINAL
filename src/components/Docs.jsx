import React from "react";
import {
  Form,
  Dropdown,
  DropdownButton,
  Col,
  Container,
} from "react-bootstrap";
function Docs() {
  return (
    <div>
      <div
      className="bg-image "
      style={{
        backgroundImage:
          "url('https://i2.wp.com/files.123freevectors.com/wp-content/original/115982-abstract-cool-blue-blurred-lights-background-design.jpg?w=800&q=95)",
        height: "100vh",
        backgroundSize: "100%",
      }}
    >
       <div
        class="mask"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          height: "100vh",
          backgroundSize: "100%",
        }}
      >
      <Container>
        <br></br><br></br><br></br>
      <Col md={{ span: 4, offset: 4 }}>
        <h1 className="text-center text-white">FAQS</h1>
        <br /><br></br><br></br><br></br>
        <DropdownButton id="dropdown-item-button" title="What is an NFT?">
          <Dropdown.ItemText>
            <b> What is an NFT? </b>
            An NFT is a digital asset stored on the blockchain. These assets
            hold information, like descriptions, properties, and media files.
            NFTs are unique, one-of-a-kind, and non-interchangeable. The history
            of every NFT is recorded on the blockchain, meaning buyers can prove
            their ownership and creators can receive royalties every time their
            work is re-sold. NFTs can be traded on marketplaces, proudly
            displayed in online galleries or used to access exclusive content
            and real-life experiences.
          </Dropdown.ItemText>
        </DropdownButton>
        <br /> <br /> <br /> <br /> <br />
        <DropdownButton id="dropdown-item-button" title="How to get started?">
          <Dropdown.ItemText>
            <b> How to get started? </b>
            Currently, we’re most interested in promoting projects that have
            multi-tiered sales (i.e. 1-of-1s, 1-of-manys, etc), have interesting
            & unique artwork, include robust digital unlockable content
            experiences, and have already been marketed in well-trafficked
            channels. If you fit this description, please fill in our
            partnership request
          </Dropdown.ItemText>
        </DropdownButton>
        </Col>
      </Container>
      </div>
      </div>
    </div>
  );
}

export default Docs;
