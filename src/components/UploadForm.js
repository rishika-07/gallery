const UploadForm = ({ isVisible, onChange, onSubmit }) => {
  // reading from props  to run the action on forms this is used to upload images by user to the form 
  return (
      isVisible && <>
      <p className="display-6 text-center mb-3">Upload Stock Image</p>
      <div className="mb-5 d-flex align-items-center justify-content-center">
        <form className="mb-2" style={{ textAlign: "left" }} onSubmit={onSubmit}>
          {/* on submit is used for the function that saves the information user enters */}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="title"
              aria-describedby="text"
              onChange={onChange}
              // getting user information   "onChange={onChange}" is used
            />
          </div>
          <div className="mb-3">
            <input type="file" className="form-control" name="file" onChange={onChange} />
            {/* onChange={onChange} is needed to get user information important */}
          </div>
          <button
            type="submit"
            className="btn btn-success float-end"
          >
            Save changes
          </button>
        </form>
      </div>
      </>
    );
  };
export default UploadForm;  