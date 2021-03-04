import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <h3 style={{ marginBottom: "10px" }}>
          Found: {this.state.images.length} images
        </h3>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

// const App = () => {
//   const [images, setImages] = useState([]);
//   const onSearchSubmit = async (term) => {
//     const response = await axios.get("https://api.unsplash.com/search/photos", {
//       params: { query: term },
//       headers: {
//         Authorization: "Client-ID AT345vZBSH_0v1J5I0d-Yjs4aLcSovj23QvDFgbpy3s",
//       },
//     });
//     console.log("result", response.data.results);
//     setImages(response.data.results);
//   };
//   console.log("sdfhgha", images);

//   return (
//     <>
//       <div className="ui container" style={{ marginTop: "10px" }}>
//         <SearchBar onSubmit={onSearchSubmit} />
//       </div>
//       {images ? (
//         images.map((image) => (
//           <div key={image.id}>
//             <img src={image.urls.small} alt={image.id} />
//             {/* <h1>Loading</h1> */}
//           </div>
//         ))
//       ) : (
//         <div
//           style={{
//             display: "flex",
//             height: "100vh",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <h1>Loading</h1>
//         </div>
//       )}
//     </>
//   );
// };

// export default App;
