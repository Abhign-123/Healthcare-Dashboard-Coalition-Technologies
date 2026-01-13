async function PatientData() {
    const username = "coalition";
    const password = "skills-test";

    try {
        const response = await fetch(
        "https://fedskillstest.coalitiontechnologies.workers.dev",
        {
            headers: {
            Authorization: "Basic " + btoa(username + ":" + password),
            },
        }
        );

        const data = await response.json();
        // const userInfo = data.find(u => u.name === "Jessica Taylor");
        //console.log(userInfo);
        return data;

    } catch (error) {
        console.warn("Error fetching data:", error);
        return null;
    }
}

export default PatientData;