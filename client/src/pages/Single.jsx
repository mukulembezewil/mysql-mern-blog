import React from 'react';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
	return (
		<div className="single">
			<div className="content">
				<img src="https://ie.auroville.org/content/images/2020/08/MentalFaculties.png"></img>
				<div className="user">
					<img src="https://ie.auroville.org/content/images/2020/08/MentalFaculties.png"></img>
					<div className="info">
						<span>John</span>
						<p>Posted 6 days ago</p>
					</div>
					<div className="edit">
						<Link to={'/write?edit=2'}>
							<img
								src={Edit}
								alt=""
							/>
						</Link>
						<img
							src={Delete}
							alt=""
						/>
					</div>
				</div>
				<h1>Understanding mental Gems</h1>
				<p>
					Psychological models of cognitive processing that take energy supply into
					account remain uncommon. One exception is research on self-control
					depletion, where debate continues over a limited-resource model. This model
					argues that a transient reduction in self-control after the exertion of
					prior self-control is caused by the depletion of brain glucose, and that
					self-control processes are special, perhaps unique, in this regard.{' '}
				</p>
				<p>
					This model has been argued to be physiologically implausible in several
					recent reviews. This paper attempts to correct some inaccuracies that have
					occurred during debate over the physiological plausibility of this model.
					We contend that not only is such limitation of cognition by constraints on
					glucose supply plausible, it is well established in the neuroscience
					literature across several cognitive domains. Conversely, we argue that
					there is no evidence that self-control is special in regard to its
					metabolic cost.
				</p>{' '}
				<p>
					Mental processes require physical energy, and the body is limited in its
					ability to supply the brain with sufficient energy to fuel mental
					processes. This article reviews current findings in brain metabolism and
					seeks to resolve the current conflict in the field regarding the
					physiological plausibility of the self-control glucose-depletion
					hypothesis.
				</p>
			</div>
			<Menu />
		</div>
	);
};
export default Single;
