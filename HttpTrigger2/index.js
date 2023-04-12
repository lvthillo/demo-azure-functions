module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger2 function processed a request.');
    const responseMessage = "This is random.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}