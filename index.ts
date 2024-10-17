import { Query } from "./epp/query";
async function main() {
   console.log("Hello via Bun!");
   const q = new Query();
   const result = await q.check(new EppObject());
   console.log(result);
}

main().then(() => {
    console.log("Done");
}).catch((e) => {
    console.error(e);
});