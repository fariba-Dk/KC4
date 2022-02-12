import "./styles.css";
import Profiles from "./components/Profiles";
import pic1 from "./images/collage.jpeg";
import pic2 from "./images/Chris&me.JPG";

export default function App() {
  return (
    <div className="App">
      <h1>Week-4 KC - My Family Profile</h1>
      <Profiles
        title="❣️My Fam❣️"
        description="This is my family profile :)"
        imageUrl={pic1}
      />
      <Profiles
        title="Chris & I"
        description="This is my profile :)"
        imageUrl={pic2}
      />
    </div>
  );
}
