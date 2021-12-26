function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const avatar = document.querySelector("#player");
const coin = document.querySelector("#coin");

const extractPos = (pos) => {
	if (!pos) return 0;
	return parseInt(pos.slice(0, -2));
};

window.addEventListener("keyup", function (e) {
	if (e.key === "ArrowDown") {
		const currTop = extractPos(avatar.style.top);
		avatar.style.top = `${currTop + 50}px`;
	}
	//
	else if (e.key === "ArrowUp") {
		const currTop = extractPos(avatar.style.top);
		avatar.style.top = `${currTop - 50}px`;
	}
	//
	else if (e.key === "ArrowRight") {
		const currLeft = extractPos(avatar.style.left);
		avatar.style.left = `${currLeft + 50}px`;
		avatar.style.transform = "scale(1,1)";
	}
	//
	else if (e.key === "ArrowLeft") {
		const currLeft = extractPos(avatar.style.left);
		avatar.style.left = `${currLeft - 50}px`;
		avatar.style.transform = "scale(-1,1)";
	}
	if (isTouching(avatar, coin)) moveCoin();
});

const moveCoin = () => {
	const Y = Math.floor(window.innerHeight * Math.random());
	const X = Math.floor(window.innerWidth * Math.random());
	coin.style.top = Y + "px";
	coin.style.left = X + "px";
};

moveCoin();
