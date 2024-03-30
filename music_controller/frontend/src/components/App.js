import React, { Component } from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import HomePage from "./HomePage";

export default class App extends Component {
	render() {
		return (
			<div>
				<HomePage />
			</div>
		);
	}
}

const appDiv = document.getElementById("app");
// Use createRoot to create a root and then render your component
const root = createRoot(appDiv); // Create a root.
root.render(<App />); // Use the render method on the root to render your component.
