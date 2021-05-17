exports.handler = async (event, ctx) => {
    const guides = [
        {title: 'Beat all zelda bosses like a boss', author: 'Mario'},
        {title: 'Mario kart shortcuts you never knew existed', author: 'Luigi'},
        {title: 'Ultimate street fighter guide', author: 'Chun-Li'}
    ];

    if(ctx.clientContext.user){
        return {
            statusCode: 200,
            body:  JSON.stringify(guides)
        }
    }

    return {
        statusCode: 401,
        body: JSON.stringify({mssg: 'ah, ah, ah, you must be logged in to see this'})
    }
}