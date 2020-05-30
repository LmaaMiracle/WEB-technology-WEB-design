const fields = document.querySelectorAll('.field');

const WINNING_COMBINATIONS = [
	[ 0, 1, 2 ],
	[ 3, 4, 5 ],
	[ 6, 7, 8 ],
	[ 0, 3, 6 ],
	[ 1, 4, 7 ],
	[ 2, 5, 8 ],
	[ 0, 4, 8 ],
	[ 2, 4, 6 ]
];

let startTime, timer;
for (let f in fields) {
	// console.log(fields[f]);

	fields[f].addEventListener('click', () => {
		onClickhandler(fields[f]);
	});
}

function onClickhandler (field) {
	if (!startTime) {
		startTime = Date.now();
		timer = setInterval(() => {
			document.querySelector('.time').innerHTML = getTime();
		}, 100);
	}

	if (field.innerHTML == '') {
		field.innerHTML = 'O';
		let states = getStates(Array.from(fields));
		let winner = checkWinners(states);
		if (winner) {
			clearInterval(timer);
			declareWinner(winner);
			return;
		}
		if (getAllIndexes(states, '').length == 0) {
			clearInterval(timer);
			declareWinner();
			return;
		} else {
			botsMove(states);
			states = getStates(Array.from(fields));
		}
		console.log(winner);

		winner = checkWinners(states);
		console.log(winner);

		if (checkWinners(states)) {
			clearInterval(timer);
			declareWinner(winner);
			return;
		}
	}
}

function botsMove (states) {
	let playerPosses = getAllIndexes(states, 'O');
	let moved = false;
	let c, pos;
	for (let comb of WINNING_COMBINATIONS) {
		c = [ ...comb ];
		pos = c.splice(0, 1)[0];

		if (find_subarray(playerPosses, c)) {
			if (fields[pos].innerHTML == '' && !moved) {
				fields[pos].innerHTML = 'X';
				moved = true;
			}
		}
		c = [ ...comb ];
		pos = c.splice(1, 1)[0];
		if (find_subarray(playerPosses, c)) {
			if (fields[pos].innerHTML == '' && !moved) {
				fields[pos].innerHTML = 'X';
				moved = true;
			}
		}
		c = [ ...comb ];
		pos = c.splice(2, 1)[0];
		// console.log(WINNING_COMBINATIONS);

		if (find_subarray(playerPosses, c)) {
			if (fields[pos].innerHTML == '' && !moved) {
				fields[pos].innerHTML = 'X';
				moved = true;
			}
		}
	}
	while (!moved) {
		pos = Math.floor(Math.random() * fields.length);
		if (fields[pos].innerHTML == '') {
			fields[pos].innerHTML = 'X';
			moved = true;
		}
	}

	// if (playerPosses.length === 1) {
	// 	if (playerPosses[0] != 4) {
	// 		fields[4].innerHTML = 'X';
	// 	} else {
	// 		fields[0].innerHTML = 'X';
	// 	}
	// } else if (playerPosses.length === 2) {
	// 	if (playerPosses[0] === 0 && playerPosses[1] === 1) {
	// 		fields[2].innerHTML = 'X';
	// 	} else if (playerPosses[0] === 0 && playerPosses[1] === 2) {
	// 		fields[1].innerHTML = 'X';
	// 	} else if (playerPosses[0] === 0 && playerPosses[1] === 3) {
	// 		fields[6].innerHTML = 'X';
	// 	} else if (playerPosses[0] === 0 && playerPosses[1] === 6) {
	// 		fields[3].innerHTML = 'X';
	// 	} else if (playerPosses[0] === 4 && playerPosses[1] === 1) {
	// 		fields[7].innerHTML = 'X';
	// 	} else if (playerPosses[0] === 4 && playerPosses[1] === 2) {
	// 		fields[6].innerHTML = 'X';
	// 	} else if (playerPosses[0] === 4 && playerPosses[1] === 3) {
	// 		fields[5].innerHTML = 'X';
	// 	} else if (playerPosses[0] === 4 && playerPosses[1] === 5) {
	// 		fields[6].innerHTML = 'X';
	// 	} else if (playerPosses[0] === 4 && playerPosses[1] === 6) {
	// 		fields[2].innerHTML = 'X';
	// 	} else if (playerPosses[0] === 4 && playerPosses[1] === 7) {
	// 		fields[1].innerHTML = 'X';
	// 	} else if (playerPosses[0] === 4 && playerPosses[1] === 8) {
	// 		fields[7].innerHTML = 'X';
	// 	}else {

	//     }
	// }
}
function declareWinner (winner = 'Nobody') {
	const endPanel = document.querySelector('.ended');

	if (winner === 'Player') {
		endPanel.classList.add('user_won');
	} else if (winner === 'Bot') {
		endPanel.classList.add('bot_won');
	} else {
		endPanel.classList.add('nobody_won');
	}
	endPanel.innerHTML = winner + ' won!';
	endPanel.classList.remove('hidden');
}

function checkWinners (states) {
	let playerPosses = getAllIndexes(states, 'O');
	let botPosses = getAllIndexes(states, 'X');

	console.log(botPosses);

	for (let comb of WINNING_COMBINATIONS) {
		if (find_subarray(playerPosses, comb)) {
			return 'Player';
		}
		if (find_subarray(botPosses, comb)) {
			return 'Bot';
		}
	}
	return false;
}
function getStates (fields) {
	let state = [];

	for (let f of fields) {
		state.push(f.innerHTML);
	}
	return state;
}
function getAllIndexes (arr, val) {
	// console.log('arr' + arr);

	let indexes = [],
		i = -1;
	while ((i = arr.indexOf(val, i + 1)) != -1) {
		indexes.push(i);
	}
	return indexes;
}
function find_subarray (arr, subarr) {
	for (let sa of subarr) {
		if (arr.indexOf(sa) === -1) {
			return false;
		}
	}
	return true;
}

function getTime () {
	let timePast = Date.now() - startTime;
	let formattedTime = Math.floor(timePast / 1000 / 60);
	let secs = Math.floor((timePast - timePast / 1000 / 60) / 1000);
	secs = secs >= 60 ? secs - 60 : secs;
	formattedTime = (formattedTime < 10 ? '0' + formattedTime : formattedTime) + ':' + (secs < 10 ? '0' + secs : secs);
	return formattedTime;
}
