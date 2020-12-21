const config = {
  s3: {
    REGION: "eu-west-1",
    BUCKET: "abdallash",
  },
  apiGateway: {
    REGION: "eu-west-1",
    EXAMS_URL: "https://edvvjw5gg5.execute-api.eu-west-1.amazonaws.com/prod",
    Questions_URL: "https://wae94925aj.execute-api.eu-west-1.amazonaws.com/dev/exams",
    result_URL: 'https://o61lha5v4d.execute-api.eu-west-1.amazonaws.com/dev'
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_SHcZ9M5nb",
    APP_CLIENT_ID: "lrcpkhr0ej9ur8jjbr4hhd1ue",
    IDENTITY_POOL_ID: "eu-west-1:be22b004-57a6-4966-bee3-f3aeaa7ca620",
  },
};

export default config;