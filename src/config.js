const config = {
  s3: {
    REGION: "eu-west-1",
    BUCKET: "abdallash",
  },
  apiGateway: {
    REGION: "eu-west-1",
    EXAMS_URL: "https://edvvjw5gg5.execute-api.eu-west-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_SHcZ9M5nb",
    APP_CLIENT_ID: "lrcpkhr0ej9ur8jjbr4hhd1ue",
    IDENTITY_POOL_ID: "eu-west-1_SHcZ9M5nb",
  },
};

export default config;