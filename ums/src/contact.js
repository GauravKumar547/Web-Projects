import React from "react";

const Contact = () => {
  return (
    <div className="w-100 pt-5">
      <h1>Contact Us</h1>
      <form
        className="w-50 mx-auto"
        onSubmit={(event) => {
          event.preventDefault();
        }}>
        <div className="form-group mt-5">
          <label htmlFor="exampleInputEmail1">
            <h5>Email address</h5>
          </label>
          <input
            required
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <div className="form-group mt-2">
          <label htmlFor="exampleInputPassword1">
            <h5>Your message</h5>
          </label>
          <textarea
            required
            className="form-control"
            placeholder="Enter your querry or suggestion here"
            id="exampleInputPassword1"
          />
        </div>
        <div className="form-group my-2 form-check">
          <input
            type="checkbox"
            required
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            I agree to the given terms and conditions.
          </label>
        </div>
        <input
          type="submit"
          className="btn btn-secondary btn-lg w-100"
          value={"Submit"}
        />
      </form>
    </div>
  );
};

export default Contact;
