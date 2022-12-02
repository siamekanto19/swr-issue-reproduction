export default defineEventHandler(() => {
  console.log("Received New Request");
  return { hello: "Hello World" };
});
