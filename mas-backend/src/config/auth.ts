export default {
    jwt: {
        privateKey: process.env.APP_SECRET || 'default',
        expiresIn: '1d'
    }
}