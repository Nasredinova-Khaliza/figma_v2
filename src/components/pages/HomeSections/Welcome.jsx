import scss from "./Welcome.module.scss";
import Rectangle from "../../../assets/Rectangle.svg";
import Frame from "../../../assets/Frame 25.svg";

const Welcome = () => {
	return (
		<div className={scss.Welcome}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.text1}>
						<div>
							<p>Рекламное агенство ADVUP</p>
							<h1>Новый поток клиентов Вашему продукту</h1>
						</div>
						<div className={scss.left}>
							<img className={scss.img} src={Rectangle} alt="" />
							<button>Приступим</button>
						</div>
					</div>
					<div className={scss.image}>
						<img src={Frame} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
