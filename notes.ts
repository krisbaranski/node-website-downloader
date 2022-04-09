// const body = { a: 1 }

// const response = await fetch(process.argv[2], {
//   method: "post",
//   body: JSON.stringify(body),
//   headers: { "Content-Type": "application/json" },
// })
// const data = await response.json()

// console.log(data)

// const fetch = require("node-fetch")
// const cheerio = require("cheerio")

// const getReddit = async () => {
//   // get html text from reddit
//   const response = await fetch("https://reddit.com/")
//   // using await to ensure that the promise resolves
//   const body = await response.text()

//   // parse the html text and extract titles
//   const $ = cheerio.load(body)
//   const titleList = []

//   // using CSS selector
//   $("process.argv[2]").each((i, title) => {
//     const titleNode = $(title)
//     const titleText = titleNode.text()

//     titleList.push(titleText)
//   })

//   console.log(titleList)
// }

// getReddit()

import fetch = require("node-fetch")
const { URL, URLSearchParams } = require("url")

;async () => {
  const url = new URL("https://some-url.com")
  const params = { param: "test" }
  const queryParams = new URLSearchParams(params).toString()
  url.search = queryParams

  const fetchOptions = {
    method: "POST",
    headers: {
      cookie: "<cookie>",
    },
  }

  await fetch(url, fetchOptions)
}
