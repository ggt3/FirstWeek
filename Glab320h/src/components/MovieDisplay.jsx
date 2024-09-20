export default function MovieDisplay(poop) {
  
  //props (aka poop) is an object and it will be assigned a variable called movieInfo (that was passed from App.jsx in MovieDisplay) so I have to dot access into the variable name

  //using function to determine behaviour because JSX expressions are nto evaluated until the function is invoked
  const loaded = () => {
    return (
      <>
        <h1>{poop.movieInfo.Title}</h1>
        <h2>released in {poop.movieInfo.Year}</h2>
        <img src={poop.movieInfo.Poster} />
      </>
    );
  };

  // Function to return loading JSX
  const loading = () => {
    return <h1>No Movie to Display</h1>;
  };
  return poop.movieInfo ? loaded() : loading();
}
