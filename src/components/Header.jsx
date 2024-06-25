import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../assets/restauranfood.jpg";
function Header() {
	return (
		<header className="header">
			<section>
				{/* banner texts */}
				<div className="banner">
					<h2>Little Lemon</h2>
					<h3>Chicago</h3>
					<p>
						We are a family owned Mediterranean restaurant on traditional
						recipes served with a modern twist.
					</p>

					<button aria-label="On Click">Reserve Table</button>
				</div>
				{/* banner image */}
				<div className="banner-img">
					<img src={bannerImg} alt="banner-image" />
				</div>
			</section>
		</header>
	);
}

export default Header;
