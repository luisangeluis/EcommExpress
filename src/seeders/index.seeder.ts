import { connectToDB } from "../db/sequelizeConnect";
import { createFakeData } from "./createFakeData"

const runSeed = async () => {
    try {
        await connectToDB();
        await createFakeData();
        process.exit(0);
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

runSeed()
    .then(()=>"Seed completed")
    .catch(error=>console.log(error.message));