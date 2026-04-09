//backend for webhook on discord
exports.handler = async (event) => {
    const webhookUrl = "webhook url here"; //replace with your webhook url
    const { feedback } = JSON.parse(event.body);

    try {
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            avatar_url: "image url here", //replace with your image url
            body: JSON.stringify({
                username: "Gomebot",
                embeds: [{
                    title: "New feedback",
                    description: feedback,
                    color: 5814783
                }]
            })
        });

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ success: true })
        };
    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ error: error.message })
        };
    }
};