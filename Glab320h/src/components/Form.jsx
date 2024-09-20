import { useState} from "react";

export default function Form({ getMovie }) {
  const [formData, setFormData] = useState({
    searchTerm: "",
    //for more form inputs you would just put all the values in here to be tracked, but rn we only have one input
  });
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getMovie(formData.searchTerm)
  }
  ;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name = "searchTerm" 
         // -name for the event.target.name
          onChange={handleChange}
          value={formData.searchTerm}
          placeholder="Search..."
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
