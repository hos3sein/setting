const asyncHandler = require("../middleware/async");
const fetch = require("node-fetch");

exports.refresh = asyncHandler(async (req, res, next) => {
  const url = `${process.env.SERVICE_REFRESH}/callsetting`;
  try {
    const rawResponse = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "*",
        "Content-Type": "*",
      },
      body: JSON.stringify("body"),
    });
    const response = await rawResponse.json();
    console.log("response", response);
    return response;
  } catch (error) {
    res.json("error", error);
  }
});

exports.upNameCat = asyncHandler(async (category) => {
  console.log("category", category);
  const url = `${process.env.SERVICE_CONTENT}/dev/upnamecat`;
  try {
    const rawResponse = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    });
    const response = await rawResponse.json();
    console.log("response", response);
    return response;
  } catch (error) {}
});

exports.remcontentByCat = asyncHandler(async (category) => {
  console.log("category", category);
  const url = `${process.env.SERVICE_CONTENT}/dev/remcontentbycat`;
  try {
    const rawResponse = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ category }),
    });
    const response = await rawResponse.json();
    console.log("response", response);
    return response;
  } catch (error) {}
});
