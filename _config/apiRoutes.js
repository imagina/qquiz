const moduleName = 'iquiz';
const moduleVersion = 'v1';
const baseApiUrl = `${env('BASE_URL', 'http://localhost:8000')}/api`;
const urlBase = `${baseApiUrl}/${moduleName}/${moduleVersion}`


export default {
  urlBase : urlBase,
  version: moduleVersion,
  polls: `${urlBase}/polls`,
  questions: `${urlBase}/questions`,
  answers: `${urlBase}/answers`,
  userQuestionAnswers: `${urlBase}/user-question-answers`,
  userPolls: `${urlBase}/user-polls`,
}
