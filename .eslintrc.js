module.exports = {
    globals: {
        graphql: true,
        __PATH_PREFIX__: true,
        __BASE_PATH__: true,
    },
    extends: `react-app`,
    plugins: [`graphql`],
    rules: {
        "import/no-webpack-loader-syntax": [0]
    },
}