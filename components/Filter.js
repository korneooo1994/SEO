import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBRow, MDBInput  } from "mdbreact";

class Filter extends Component {
  render() {
    return (
        <MDBRow className="text-center mt-3">
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4 mt-3">

        <div>
<select className="browser-default custom-select">
<option>Kategoria</option>
<option value="1">Option 1</option>
<option value="2">Option 2</option>
<option value="3">Option 3</option>
</select>
</div>
</MDBCol>
<MDBCol lg="4" md="12" className="mb-lg-0 mb-4 mt-3">

<div>
<select className="browser-default custom-select">
<option>Kategoria</option>
<option value="1">Option 1</option>
<option value="2">Option 2</option>
<option value="3">Option 3</option>
</select>
</div>
</MDBCol>
<MDBCol lg="4" md="12" className="mb-lg-0 mb-4 mt-3">

<div>
<select className="browser-default custom-select">
<option>Kategoria</option>
<option value="1">Option 1</option>
<option value="2">Option 2</option>
<option value="3">Option 3</option>
</select>
</div>
</MDBCol>
<MDBCol lg="4" md="12" className="mb-lg-0 mb-4 mt-3">

<MDBInput hint="Czego szukasz?" type="text" containerClass="mt-3" />
<MDBBtn color="primary" outline rounded>Szukaj</MDBBtn>

</MDBCol>

</MDBRow>
    );
  }
}

export default Filter;