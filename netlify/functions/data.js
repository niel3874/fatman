exports.handler = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello, this is your API!", status: "success" }),
    };
};
