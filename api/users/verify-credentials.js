module.exports = (user) => {
    return Boolean(user.username && user.password && typeof user.password === "string");
}
