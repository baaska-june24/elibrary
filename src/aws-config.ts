const REGION = process.env.AWS_USER_POOL_REGION || "ap-southeast-1";
const USER_POOL_ID = process.env.AWS_USER_POOL_ID || "";
const USER_POOL_CLIENT_ID = process.env.AWS_USER_POOL_CLIENT_ID || "";

const config = {
  aws_project_region: REGION,
  aws_cognito_region: REGION,
  aws_user_pools_id: USER_POOL_ID,
  aws_user_pools_web_client_id: USER_POOL_CLIENT_ID,
  oauth: {}
};

export default config;
