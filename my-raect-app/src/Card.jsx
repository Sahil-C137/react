import profile from './assets/ee2e2da83529499e849591482beff620.jpg'
function Card(){
 return(
<div className="card">
<img  className="cardimage"src={profile}alt="Sahil"></img>
<h2 className='cardtitle'>Sahil</h2>
<p className='cardtext'>I am Batman I am Vangence</p>
</div>
 );
}
export default Card