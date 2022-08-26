const { fromBech32Address, toBech32Address } = require('@zilliqa-js/crypto');

const { isBech32, isAddress } = require('@zilliqa-js/util/dist/validation');

export const fromb16 = (from) => {
	let converted = [];
	if (from) {
		if (Array.isArray(from)) {
			for (let row of from) {
				if (isAddress(row)) {
					converted.push(toBech32Address(row));
				} else {
					console.log('Status: invalid address found ' + row);
					return;
				}
			}
			return converted;
		} else {
			if (isAddress(from)) {
				return toBech32Address(from);
			} else {
				console.log('Status: invalid address ' + from);
			}
		}
	} else {
		console.log('Status: no address provided');
	}
};
export const fromb32 = (from) => {
	let converted = [];
	if (from) {
		if (Array.isArray(from)) {
			for (let row of from) {
				if (isBech32(row)) {
					converted.push(fromBech32Address(row));
				} else {
					console.log('Status: invalid address found ' + row);
					return;
				}
			}
			return converted;
		} else {
			if (isBech32(from)) {
				return fromBech32Address(from);
			} else {
				console.log('Status: invalid address ' + from);
			}
		}
	} else {
		console.log('Status: no address provided');
	}
};
