/**
 * rollup.config.js
 */
module.exports = {
  input: 'src/index.js',
  output: {
    file: 'server/mcp.js',
    format: 'cjs',
  },
  external: [
    'uuid',
    'zod',
    '@modelcontextprotocol/sdk/server/mcp.js',
    '@modelcontextprotocol/sdk/server/stdio.js',
    '@modelcontextprotocol/sdk/server/streamableHttp.js',
  ],
};
