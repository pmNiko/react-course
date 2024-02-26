module.exports = {
  presets: [
    [ '@babel/preset-env', { targets: { esmodules: true } } ],
    [ '@babel/preset-react', { runtime:  'automatic' } ],
  ]
}



// ! configuración para config.json
// {
//   "presets": [
//     [
//       "@babel/preset-env",
//       {
//         "targets": {
//           "node": "current"
//         }
//       }
//     ]
//   ]
// }

