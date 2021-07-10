async function todo() {
    const arr = [1, 2, 3];

    console.log("start");

    await Promise.all(arr.map(async (i) => {
        await setTimeout(()=>console.log('*'), 1000);
        console.log(i);
    }));

    console.log("Finished async");
}

todo()