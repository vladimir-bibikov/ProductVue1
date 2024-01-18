module.exports = ({ env }) => ({
  auth: {
    secret: 'your_secret_key',
  },
  apiToken: {
    salt: 'CTvjMIkPHaFgAKHozIAutw==',
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
