import{useMemo} from "react"

const Preview = ({ path }) => {
  return (
    path && <div
      className="rounded p-1 m-5"
      style={{
        width: "30%",
        height: "300px",
        backgroundImage: `url(${path}`,
        backgroundSize: "cover",
      }}
    ></div>
  );
};

const UploadForm = ({ inputs ,isVisible, onChange, onSubmit }) => {
// reading from props  to run the action on forms this is used to upload images by user to the form 
const isDisabled = useMemo(()=>{
 return !!Object.values(inputs).some(input =>!input)
},[inputs])
// useMemo is used to validate data so the function works 
// autouploaded the data despite of the form values being missing. the logic written inside checks if any value is missing
return (
      isVisible && <>
      <p className="display-6 text-center mb-3">Upload Stock Image</p>
      <div className="mb-5 d-flex align-items-center justify-content-center">
      <Preview {...inputs} />
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
            disabled={isDisabled}
          >
            Save changes
          </button>
        </form>
      </div>
      </>
    );
  };
export default UploadForm;  