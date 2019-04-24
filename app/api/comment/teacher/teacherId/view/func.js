const app = require('@/app')
const errors = require('@/errors')

module.exports = async (context) => {

  const { teacherId, subjectId } = context.params

  const { userId } = context.user._id

  const Comment = app.models.comments

  app.helpers.validate.throwMissingParameter(['teacherId'], context.params)

  if(!userId) throw new errors.BadRequest(`Missing userId: ${userId}`) // auth do grippa

  let comment = await Comment.commentsByReactions({ mainTeacher: teacherId, ...( subjectId && { subject: subjectId}) }, userId)

  return comment
}