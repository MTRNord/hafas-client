'use strict'

const tapePromise = require('tape-promise').default
const tape = require('tape')

const createClient = require('..')
const rawProfile = require('../p/bvg')
const createParse = require('../lib/create-parse')
const res = require('./fixtures/bvg-journey.json')
const expected = require('./fixtures/bvg-journey.js')

const test = tapePromise(tape)
const client = createClient(rawProfile, 'public-transport/hafas-client:test')
const {profile} = client

const opt = {
	results: null,
	via: null,
	stopovers: true,
	transfers: -1,
	transferTime: 0,
	accessibility: 'none',
	bike: false,
	tickets: true,
	polylines: true,
	remarks: true,
	walkingSpeed: 'normal',
	startWithWalking: true,
	scheduledDays: true,
	departure: '2019-08-18T14:03:50+02:00',
	products: {}
}

test('parses a journey correctly (BVG)', (t) => {
	const ctx = {profile, opt, res}
	ctx.parse = createParse(ctx)
	ctx.common = ctx.parse('common')

	const journey = ctx.parse('journey', res.outConL[0])

	t.deepEqual(journey, expected)
	t.end()
})
