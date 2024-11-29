export default function log(to,from,next) {
    console.log(to.name);
    return next();
  }