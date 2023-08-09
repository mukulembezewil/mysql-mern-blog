import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Menu = ({ cat }) => {
	// const [posts, setPosts] = useState([]);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const res = await axios.get(`/posts/?cat=${cat}`);
	// 			setPosts(res.data);
	// 		} catch (err) {
	// 			console.log(err);
	// 		}
	// 	};
	// 	fetchData();
	// }, [cat]);

	const posts = [
		{
			id: 1,
			title: 'Understanding the power of mental vibration',
			desc:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
			img: 'https://static.scientificamerican.com/blogs/cache/file/D69B9621-F22F-4EB8-900C67DE93ED5596_source.jpg?w=590&h=800&087D150B-5230-4599-80C021C49E894B1F',
		},
		{
			id: 2,
			title: 'An introduction to the two essential laws of Thought',
			desc:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
			img: 'https://www.hindustantimes.com/ht-img/img/2023/06/06/1600x900/thumbnail_AI_1686061712757_1686061725643.jpg',
		},
		{
			id: 3,
			title: 'Mental states and the several religious phenomena',
			desc:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
			img: 'https://www.luxuryrecruit.com/wp-content/uploads/2022/01/silence-on-mental-health.jpg',
		},
		{
			id: 4,
			title: 'Mental faculties and the mental states',
			desc:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
			img: 'https://ie.auroville.org/content/images/2020/08/MentalFaculties.png',
		},
	];

	return (
		<div className="menu">
			<h1>You might also like</h1>
			{posts.map((post) => (
				<div
					className="post"
					key={post.id}
				>
					<img
						src={post.img}
						alt=""
					/>
					<h2>{post.title}</h2>
					<button>...read on</button>
				</div>
			))}
		</div>
	);
};

export default Menu;
