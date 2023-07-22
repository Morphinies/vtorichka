declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.module.css";
declare module "*.module.scss";
declare module "*.svg" {
  const path: string;
  export default path;
}
