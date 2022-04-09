import fetch from "node-fetch"

class Download {
  public static main() {
    const download = new Download()
    download.downloadSite()
  }

  downloadSite() {
    fetch(process.argv[2])
      .then(res => res.text())
      .then(data => console.log(data))
      .catch(err => console.log(err))
      .finally(() => console.log("finally done!!!"))
  }
}

Download.main()
