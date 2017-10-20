module.exports = (model) => {
  let influencer = model.create({
    _id: null,
    medias: {
      twitter: null,
      integri: {
        email: '',
        pwd: ''
      }
    },
    like: [],
    // dislike: [],
    location: '',
    name: '',
    profile_image: null,
    created_at: null,
    last_change: null,
    last_login: null,
    unsuccessfull_attempts: null,
    blocked: {
      permanently: false,
      block_time: null,
    },
    type: 'profile'
  })
  return influencer
}
