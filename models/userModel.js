// Example user model (PostgreSQL or MongoDB)
email: {
  type: String,
  required: true,
  unique: true,
},
isVerified: {
  type: Boolean,
  default: false,
},
verificationToken: {
  type: String,
}
