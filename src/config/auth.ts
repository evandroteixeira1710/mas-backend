export default {
    jwt: {
        privateKey: process.env.APP_SECRET || 'default',
        publicKey: process.env.JWT_PUBLIC_KEY || 'default',
        secret:process.env.APP_SECRET || 'default',
        expiresIn: '20d'
    }
}