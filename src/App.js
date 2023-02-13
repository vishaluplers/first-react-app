
import Card from "./components/Card"

const App =  () => {
return (
<>
<h1>Props Example</h1>
<div className="card-list">
<Card link="https://source.unsplash.com/random/300x200?sig=1" />
<Card link="https://source.unsplash.com/random/300x200?sig=2"/>
<Card link="https://source.unsplash.com/random/300x200?sig=3"/>
<Card link="https://source.unsplash.com/random/300x200?sig=4"/>
<Card link="https://source.unsplash.com/random/300x200?sig=5" />
<Card link="https://source.unsplash.com/random/300x200?sig=6"/>
<Card link="https://source.unsplash.com/random/300x200?sig=7"/>
<Card link="https://source.unsplash.com/random/300x200?sig=8"/>
</div>
</>
)
}
export default App
