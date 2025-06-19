import "./App.css"
import { btnClick } from "./BtnClick.js";
import Welcome from "./Welcome.jsx";
import Profile from "./components/profile";


function App() {

  const myName = "imran"
  const fullName = "Alief Hanafi"
  const profiles = [
    {
      name: "Paul",
      title: "Software Engineer",
      imageUrl: "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87030587_56.jpg?imwidth=2048&imdensity=1&ts=1733304861520"
    },
    {
      name: "Tony Stark",
      title: "Genius Billionaire Philanthrophist"
    },
    {
      name: "Hiccup",
      title: "Master of Dragons"
    }
  ]
  let fruits = [ "apple", "banana", "watermelon", "orange"]

  let count = 0
  const increaseCount = () => {
    count ++
    console.log(count)
  }

  let [stateCount, setStateCount] = useState(0)
  return (
<div>
  <Welcome myName = {myName}/>
<h4>list hoby</h4>
<ul>
  <li>firsbe</li>
  <li>football</li>
  <li>running</li>
</ul>
{myName == "imran" ? <button onClick={ () => btnClick(myName)}>CLick me</button> : null}
<ol>
{fruits.map((fruit, i) => (
  <p key = {i}>{fruit}</p>
))}
</ol>

{/* {profiles.map((profile,i) => (
  <Profile key={i} nama={profile.name} tajuk = {profile.title} imageUrl = {profile.imageUrl}/>
))} */}

<button onClick={() => setStateCount(stateCount + 1)}>click me</button> 

</div>

  );
}

export default App
