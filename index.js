const alexa = require('./alexa')
const { DATABASE, VERSION } = require('./config')
const start = async () => {
	try {
		console.log(`Alexa ${VERSION}`)
		await DATABASE.sync()
		console.log('DB syncing')
		await alexa.connect()
	} catch (error) {
		console.error(error)
	}
}
start()
