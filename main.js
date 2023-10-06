const fs = require("fs").promises;

async function readAndProcessData() {
  try {
    const rawData = await fs.readFile("data.json", "utf-8");
    const jsonData = JSON.parse(rawData);

    const filteredData = jsonData.filter(entry => entry.parent === "BS3_BanksLiab");
    const outputText = filteredData.map(entry => `${entry.txten}:${entry.value}`).join('\n');

    await fs.writeFile('output.txt', outputText, "utf-8");
    console.log("Saved!");
  } catch (error) {
    console.error("Помилка:", error);
  }
}

readAndProcessData();
