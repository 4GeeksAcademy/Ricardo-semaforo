import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const colors = ["red","yellow","green"]
	
	const [lightColor, setLightColor] = useState("yellow");
	const [includePurple, setIncludePurple] = useState(false)

	const trafficLightHeight = lightColor === "purple"? "350px":"200px";
	const allColors = includePurple ? [...colors, "purple"] : colors;
	
	const changeColorButton = () => {
		const actualColor = allColors.indexOf(lightColor);
		const nextColor = (actualColor + 1) % allColors.length;
		setLightColor(allColors[nextColor])
	}

	const purpleActive = () => {
		if(includePurple){
			if(lightColor === "purple"){
				setLightColor("red");
			}
			setIncludePurple(false);
		}else
		{setIncludePurple (true);
		setLightColor("purple");
	}
	}



	return (
		<div className="text-center">
            <div className="cable"></div>
			<div className="trafficlight" /*style={{height:trafficLightHeight}} review later, to do it more dynamic*/ >
				<div className={"light red " + (lightColor =="red" ? "on" : "") } onClick={() => setLightColor("red")} ></div>
				<div className={"light yellow " + (lightColor =="yellow" ? "on" : "") } onClick={() => setLightColor("yellow")}></div>
				<div className={"light green " + (lightColor =="green" ? "on" : "") } onClick={() => setLightColor("green")}></div>
				{includePurple && ( <div className={"light purple " + (lightColor =="purple" ? "on" : "")} onClick={() => setLightColor("purple")} >  </div> ) }
			</div>
			<div className="m-2">
				<button onClick={changeColorButton} >Change Color</button>
				<button onClick={purpleActive} > Change to Purple</button>
			</div>
			
		</div>
	);
};

export default Home;