//Daniel is doing
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";



function ContactUs() {
  return (
    
    <form>
  <div class="form-group">
    <h1 className='primary text-center text-lg-left'><br/>Contact Us</h1>
    <br/>
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
<br/>
<br/>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Please explain in details:</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Type here" rows="3"></textarea>
  </div>
  <br/>
  <br/>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

    
  );
}

export default ContactUs;
