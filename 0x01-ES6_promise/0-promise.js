export default function getResponseFromAPI() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 300);
  });
  return myPromise
}
