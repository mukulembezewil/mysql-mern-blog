import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
	// const [posts, setPosts] = useState([]);

	const cat = useLocation().search;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(`/posts${cat}`);
				// setPosts(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, [cat]);

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

	const getText = (html) => {
		const doc = new DOMParser().parseFromString(html, 'text/html');
		return doc.body.textContent;
	};

	return (
		<div className="home">
			<div className="posts">
				{posts.map((post) => (
					<div
						className="post"
						key={post.id}
					>
						<div className="img">
							<img
								src={post.img}
								alt=""
							/>
						</div>
						<div className="content">
							<Link
								className="link"
								to={`/post/${post.id}`}
							>
								<h1>{post.title}</h1>
							</Link>
							<p>{post.desc}</p>
							<button>...see more</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default Home;
