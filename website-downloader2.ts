import fetch from "node-fetch"

class Download {
  public static main() {
    const download = new Download()
    download.downloadSite()
  }

  async downloadSite() {
    const page = await fetch(process.argv[2])
    const content = await page.text()
    const regex = /<title[^>]*>(.*)<\/title>/
    const matches: any = content.match(regex)
    const title = matches[1]

    console.log(title)
  }
}

Download.main()

// command line: npx ts-node download.ts https://www.google.com
