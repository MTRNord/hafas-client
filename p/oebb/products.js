'use strict'

module.exports = [
	{
		product: 'nationalExp',
		mode: 'train',
		bitmasks: [1],
		name: 'InterCityExpress & RailJet',
		short: 'ICE/RJ',
		default: true
	},
	{
		product: 'national',
		mode: 'train',
		bitmasks: [2, 4],
		name: 'InterCity & EuroCity',
		short: 'IC/EC',
		default: true
	},
	{
		product: 'interregional',
		mode: 'train',
		bitmasks: [8, 4096],
		name: 'Durchgangszug & EuroNight',
		short: 'D/EN',
		default: true
	},
	{
		product: 'regional',
		mode: 'train',
		bitmasks: [16],
		name: 'Regional & RegionalExpress',
		short: 'R/REX',
		default: true
	},
	{
		product: 'suburban',
		mode: 'train',
		bitmasks: [32],
		name: 'S-Bahn',
		short: 'S',
		default: true
	},
	{
		product: 'bus',
		mode: 'bus',
		bitmasks: [64],
		name: 'Bus',
		short: 'B',
		default: true
	},
	{
		product: 'ferry',
		mode: 'watercraft',
		bitmasks: [128],
		name: 'Ferry',
		short: 'F',
		default: true
	},
	{
		product: 'subway',
		mode: 'train',
		bitmasks: [256],
		name: 'U-Bahn',
		short: 'U',
		default: true
	},
	{
		product: 'tram',
		mode: 'train',
		bitmasks: [512],
		name: 'Tram',
		short: 'T',
		default: true
	},
	{
		product: 'onCall',
		mode: null, // todo
		bitmasks: [2048],
		name: 'On-call transit',
		short: 'on-call',
		default: true
	}
]
